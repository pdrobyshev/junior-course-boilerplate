import React from 'react';
import { render } from 'react-dom';
import './index.css';
import data from './products';

const ProductItem = (props) => {
  return (
    <li className="products-list__item">{props.product.name}</li>
  );
};

const ProductsList = (props) => {
  let products = props.products.slice(0, props.amount);

  products = products.map(product => <ProductItem key={product.id} product={product}/>);

  return (
    <ul className="products-list">
      {products}
    </ul>
  );
};

function App() {
  const amount = 3;

  return (
    <div className="App">
      <h1 className="page-title">Список товаров</h1>

      <ProductsList amount={amount} products={data}/>
    </div>
  );
}

render(<App/>, document.getElementById('root'));
