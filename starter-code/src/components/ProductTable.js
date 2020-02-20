import React, { Component } from 'react';
import ProductRow from './ProductRow';

const ProductTable = props => {
  console.log('Test', props.products.data);
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
          {props.products.data.map(el => {
            return <ProductRow name={el.name} price={el.price} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
