import React from 'react';
import ProductCard from './ProductCard';

const allProducts = [
    { id: 1, category: 'Hombre', name: 'Camisa para hombre', price: 40000 },
    { id: 2, category: 'Mujer', name: 'Vestido para mujer', price: 50000 },
    { id: 3, category: 'Niños', name: 'Camiseta para niños', price: 15000 },
];

const ProductCatalog = ({ category }) => {
    const filteredProducts = category
        ? allProducts.filter((product) => product.category.toLowerCase() === category.toLowerCase())
        : allProducts;

    return (
        <div className="container mt-5">
        <h2 className="mb-4">Catálogo de Compras</h2>
        <div className="row">
            {filteredProducts.map((product) => (
            <div key={product.id} className="col-md-4">
                <ProductCard product={product} />
            </div>
            ))}
        </div>
        </div>
    );
};

export default ProductCatalog;