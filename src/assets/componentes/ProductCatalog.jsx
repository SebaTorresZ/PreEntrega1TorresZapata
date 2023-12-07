// src/ProductCatalog.js
import React from 'react';
import ProductCard from './ProductCard';

const ProductCatalog = () => {
    const products = [
        { id: 1, category: 'Hombre', name: 'Camisa para hombre', price: 40000 },
        { id: 2, category: 'Mujer', name: 'Vestido para mujer', price: 50000 },
        { id: 3, category: 'Niños', name: 'Camiseta para niños', price: 15000 },
    ];

    return (
        <div className="container mt-5">
        <h2 className="mb-4">Catálogo de Compras</h2>
        <div className="row">
            {products.map((product) => (
            <div key={product.id} className="col-md-4">
                <ProductCard product={product} />
            </div>
            ))}
        </div>
        </div>
    );
};

export default ProductCatalog;
