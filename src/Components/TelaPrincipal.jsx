import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import CardCategories from './CardCategories';
import ProductCard from './ProductCard';

class TelaPrincipal extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
      searchFor: '',
      categories: [],
    };
  }

  componentDidMount() {
    this.getAllCategories();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  callApi = async () => {
    const { searchFor } = this.state;
    const search = await getProductsFromCategoryAndQuery('', searchFor);
    this.setState({ products: search.results });
  }

  getAllCategories = async () => {
    const data = await getCategories();
    this.setState({ categories: data });
  }

  render() {
    const { searchFor, categories, products } = this.state;
    return (
      <div>
        <label htmlFor="searchFor" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input
            data-testid="query-input"
            type="text"
            name="searchFor"
            onChange={ this.handleChange }
            value={ searchFor }
          />
        </label>
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.callApi }
        >
          Search
        </button>

        <Link data-testid="shopping-cart-button" to="/carrinho">
          <span
            role="img"
            aria-label="carrinho compra icone"
          >
            &#x1F6D2;carrinho de compras
          </span>
        </Link>
        <section>
          <ul>
            {categories
              .map((element) => (<CardCategories
                key={ element.id }
                category={ element.name }
              />))}
          </ul>
        </section>
        <section>
          {products
            .map(({ title, price, id, thumbnail }) => (
              <ProductCard
                key={ id }
                img={ thumbnail }
                title={ title }
                price={ price }
              />))}
        </section>
      </div>
    );
  }
}

export default TelaPrincipal;
