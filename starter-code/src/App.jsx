import React, { Component } from 'react';
import data from './data.json';
import FilterableProductsTable from './components/FilterableProductsTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableProductsTable products={data}></FilterableProductsTable>
      </div>
    );
  }
}

export default App;
