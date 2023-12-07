// src/ProductCard.js
import React from 'react';

    const ProductCard = ({ product }) => {
    const { category, name, price } = product;

    return (
        <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{category}</h6>
            <p className="card-text">Precio: ${price}</p>
            <a href="#" className="btn btn-primary">
            Ver Detalles
            </a>
        </div>
        </div>
    );
};

export default ProductCard;
