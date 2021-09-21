import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class SaibaMaisPag extends React.Component {
  constructor() {
    super();

    this.state = {
      qtd: 1,
      item: {},
      objeto: '',
    };

    this.itemSaibaMais = this.itemSaibaMais.bind(this);
  }

  componentDidMount() {
    this.itemSaibaMais();
  }

  handleChange = ({ target }) => {
    const { name } = target;
    if (name === 'add') {
      this.setState((state) => ({ qtd: state.qtd + 1 }));
    } else {
      this.setState((state) => ({ qtd: state.qtd - 1 }));
    }
  };

  addItems = () => {
    const { location: { onClick } } = this.props;
    const { qtd, item: { id, title, price, thumbnail } } = this.state;
    for (let cont = 0; cont < qtd; cont += 1) {
      // console.log(location);
      onClick(title, price, thumbnail, id);
    }
  }

  itemSaibaMais() {
    const { location: { id, products } } = this.props;
    const item = products.find((element) => element.id === id);
    const objeto = JSON.stringify(item);
    this.setState({
      item,
      objeto,
    });
  }

  render() {
    const { item: { title, price, thumbnail }, qtd, objeto } = this.state;

    return (
      <section>
        <header>
          <Link to="/">
            <span>
              return
            </span>
          </Link>
          <Link data-testid="shopping-cart-button" to="/carrinho">
            <span
              role="img"
              aria-label="carrinho compra icone"
            >
              &#x1F6D2;carrinho de compras
            </span>
          </Link>
        </header>
        <main>
          <h1 data-testid="product-detail-name">
            <p data-testid="shopping-cart-product-name">{ title }</p>
            {' '}
            - R$
            {' '}
            { price }
          </h1>
          <article>
            <img
              alt="productImg"
              src={ thumbnail }
            />
            <textarea value={ objeto } />

            <div>
              <button type="button" name="add" onClick={ this.handleChange }> &#10133; </button>
              <h3>{ qtd }</h3>
              <button type="button" name="remove" onClick={ this.handleChange }> &#10134; </button>
            </div>
          </article>
          <button data-testid="product-detail-add-to-cart" type="button" onClick={ this.addItems }>
            Adicionar ao Carrinho
          </button>
        </main>
      </section>
    );
  }
}

SaibaMaisPag.propTypes = {
  location: PropTypes.shape({
    id: PropTypes.string.isRequired,
    products: PropTypes.arrayOf().isRequired,
  }).isRequired,
};

export default SaibaMaisPag;
