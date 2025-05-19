const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productsRouter = require('./routes/products');
const authRouter = require('./routes/auth');
const db = require('./database'); // Configure your MySQL connection here

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/products', productsRouter);
app.use('/api/auth', authRouter);

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL database');
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
});