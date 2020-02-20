import React, { Component } from 'react';
import ProductRow from './ProductRow';

const ProductTable = props => {
  let filtered = props.products.data.filter(product => {
    return product.name.toLowerCase().includes(props.search.toLowerCase());
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          {filtered.map((el, i) => {
            return <ProductRow item={el} key={i} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
