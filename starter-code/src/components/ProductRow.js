import React, { Component } from 'react';

const ProductRow = props => {
  let style;
  const style1 = {
    color: 'red'
  };
  const style2 = {
    color: 'black'
  };

  if (props.item.stocked) {
    style = style2;
  } else {
    style = style1;
  }

  return (
    <tr>
      <td style={style}>{props.item.name}</td>
      <td>{props.item.price}</td>
    </tr>
  );
};

export default ProductRow;
