import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductsTable extends Component {
  state = {
    searchText: '',
    productList: this.props.products
  };

  updateSearchText = text => {
    this.setState({
      searchText: text
    });
  };

  render() {
    return (
      <div>
        <h1>IRONSTORE</h1>
        <SearchBar
          search={this.state.searchText}
          updateSearchText={this.updateSearchText}
        />
        <ProductTable
          products={this.state.productList}
          search={this.state.searchText}
        />
      </div>
    );
  }
}
