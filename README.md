Backend
npm init -y
npm install express body-parser cors mysql
node server.js


for setting up Frontend
node -v
npm -v

npm react-bootstrap bootstrap
npm install axios

SQL queries
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    description TEXT,
    category VARCHAR(255),
    price DECIMAL(10, 2),
    image_url VARCHAR(255),
    stock_quantity INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO products (name, description, category, price, image_url, stock_quantity, created_at, updated_at)
VALUES ('New Product Name', 'Product Description', 'Category Name', 19.99, '/images/newproduct.jpg', 100, NOW(), NOW());
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
INSERT INTO products (name, description, category, price, image_url, stock_quantity) VALUES
('Apples', 'Fresh red apples', 'Fruits', 1.00, '/images/apples.jpg', 100),
('Bananas', 'Ripe yellow bananas', 'Fruits', 0.50, '/images/bananas.jpg', 150),
('Milk', 'Whole milk 1L', 'Dairy', 2.50, '/images/milk.jpg', 50),
('Bread', 'Whole wheat bread', 'Bakery', 2.00, '/images/bread.jpg', 75);
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
CREATE TABLE Consumers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
