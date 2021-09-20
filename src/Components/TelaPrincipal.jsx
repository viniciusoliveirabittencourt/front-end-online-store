import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';
import CardCategories from './CardCategories';

class TelaPrincipal extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [] };
  }

  componentDidMount() {
    this.getAllCategories();
  }

  getAllCategories = async () => {
    const data = await getCategories();
    this.setState({ categories: data });
    console.log(data);
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <input type="text" value="aaa" />
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>

        <Link data-testid="shopping-cart-button" to="/carrinho">
          &#x1F6D2; carrinho de compras
        </Link>
        <ul>
          {categories
            .map((element) => (<CardCategories
              key={ element.id }
              category={ element.name }
            />))}
        </ul>

      </div>
    );
  }
}

export default TelaPrincipal;
