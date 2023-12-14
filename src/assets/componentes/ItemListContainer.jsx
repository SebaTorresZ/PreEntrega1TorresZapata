import React from 'react';
import ProductCatalog from './ProductCatalog';

const ItemListContainer = ({ greeting, category, products }) => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">{greeting}</h2>
      <ProductCatalog category={category} products={products} />
    </div>
  );
};

export default ItemListContainer;