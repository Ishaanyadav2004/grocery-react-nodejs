import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import VITLogo from './vit_logo.png';
import FruitsImage from './fruits.jpg'; 

function HomePage() {
    return (
        <div className="home-page">
            <div className="header-container">
                <img src={VITLogo} alt="Vishwakarma Institute of Technology Logo" className="vit-logo" />
                <h1>Welcome to Our Online Grocery Shop!</h1>
                <p>Get fresh groceries delivered right to your doorstep.</p>
            </div>

            <div className="featured-image">
                <img src={FruitsImage} alt="Assortment of Fresh Fruits" className="main-fruits-image" />
            </div>

            {                                   }

            <div className="footer-info">
                <p>Created by Ishaan Yadav <br />Roll no-83</p>
                <p>Vishwakarma Institute of Technology, Pune</p>
            </div>
        </div>
    );
}

export default HomePage;