import React from 'react';
import { useParams } from 'react-router-dom';

const allProducts = [
    { id: 1, category: 'Hombre', name: 'Camisa para hombre', price: 40000 },
    { id: 2, category: 'Mujer', name: 'Vestido para mujer', price: 50000 },
    { id: 3, category: 'Niños', name: 'Camiseta para niños', price: 15000 },
];

const ProductDetails = () => {
    const { category, id } = useParams();

    const productDetails = allProducts.find(
        (product) => product.id.toString() === id && product.category.toLowerCase() === category.toLowerCase()
    );

    return (
        <div className="container mt-4">
        <div className="card">
            <div className="card-body">
            <h5 className="card-title">{productDetails.name}</h5>
            <p className="card-text">Categoría: {productDetails.category}</p>
            <p className="card-text">Precio: ${productDetails.price}</p>
            </div>
        </div>
        </div>
    );
};

export default ProductDetails;