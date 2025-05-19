
import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
    const formatPriceInRupees = (price) => {
       
        return `₹${price.toFixed(2)}`;
    };

    return (
        <div className="product-card">
            <img
                src={product.image_url || 'placeholder.jpg'}
                alt={product.name}
                className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{formatPriceInRupees(product.price)}</p>
            <button className="add-to-cart-button">Add to Cart</button>
        </div>
    );
}

export default ProductCard;