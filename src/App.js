import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm'; 
import CataloguePage from './components/CataloguePage';
import RegisterForm from './components/RegisterForm';
import Navbar from './components/Navbar';
import './App.css';

function App() {
    return (
        <Router>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                   
                    <Route path="/login" element={<LoginForm />} /> 
                   
                    <Route path="/catalogue" element={<CataloguePage />} />
                   
                    <Route path="/register" element={<RegisterForm />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;