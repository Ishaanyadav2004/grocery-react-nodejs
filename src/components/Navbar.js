import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Create this CSS file

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">Grocery Shop</div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/catalogue" className="nav-link">Catalogue</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">Register</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;