import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import CardCategoria from './CardCategoriaTelaPrincipal';
import CardProduto from './CardProdutoTelaPrincipal';

class TelaPrincipal extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
      searchFor: '',
      categories: [],
      cartItems: [],
    };
  }

  componentDidMount() {
    this.getAllCategories();
  }

  searchHandleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  callApiGetProduct = async (params = '') => {
    const { searchFor } = this.state;
    const search = await getProductsFromCategoryAndQuery(params, searchFor);
    this.setState({ products: search.results });
  }

  getAllCategories = async () => {
    const data = await getCategories();
    this.setState({ categories: data });
  }

  addItemToCar = (title, price, img, id) => {
    this.setState({
      cartItems: [{ title, price, img, id }],
    });
  }

  render() {
    const { searchFor, categories, products, cartItems } = this.state;
    return (
      <div>
        <label htmlFor="searchFor" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input
            data-testid="query-input"
            type="text"
            name="searchFor"
            onChange={ this.searchHandleChange }
            value={ searchFor }
          />
        </label>
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.callApiGetProduct }
        >
          Search
        </button>

        <Link
          data-testid="shopping-cart-button"
          to={ { pathname: '/carrinho', carrArr: cartItems } }
        >
          <span
            role="img"
            aria-label="carrinho compra icone"
          >
            &#x1F6D2;carrinho de compras
          </span>
        </Link>

        <section>
          <ul>
            { categories
              .map((element) => (<CardCategoria
                key={ element.id }
                category={ element }
                onClick={ this.callApiGetProduct }
              />)) }
          </ul>
        </section>
        <section>
          { products
            .map(({ title, price, id, thumbnail }) => (<CardProduto
              products={ products }
              id={ id }
              key={ id }
              img={ thumbnail }
              title={ title }
              price={ price }
              onClick={ this.addItemToCar }
            />)) }
        </section>
      </div>
    );
  }
}

export default TelaPrincipal;
