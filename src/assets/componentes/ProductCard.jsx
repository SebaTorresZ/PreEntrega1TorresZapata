import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { id, category, name, price } = product;

    return (
        <div className="card mb-4">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Categoría: {category}</p>
                <p className="card-text">Precio: ${price}</p>
                <Link to={`/detalle/${category.toLowerCase()}/${id}`} className="btn btn-primary">
                    Ver Detalles
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
