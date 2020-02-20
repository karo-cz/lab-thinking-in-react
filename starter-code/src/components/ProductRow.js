import React, { Component } from 'react';

const ProductRow = props => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.price}</td>
    </tr>
  );
};

export default ProductRow;
