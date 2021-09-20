import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';

class TelaPrincipal extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      products: [],
      searchFor: '',
    }
  }

  async handleChange({ target }) {
    const { name, value } = target;
    const categoryId = "MLB1051";
    const search = await getProductsFromCategoryAndQuery(categoryId, value);
    console.log(search.results);
    this.setState({ [name]: value, products: search.results });
  }

  render() {
    const { searchFor, products } = this.state;
    return (
      <div>
        <input type="text" name="searchFor" onChange={ this.handleChange } value={ searchFor } />
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>

        <Link data-testid="shopping-cart-button" to="/carrinho">
          <span>&#x1F6D2</span> carrinho de compras
        </Link>
        {products.map(({ title, price }) => <div><h1>{ title }</h1><h2>{ price }</h2></div>)}

      </div>
    );
  }
}

export default TelaPrincipal;
