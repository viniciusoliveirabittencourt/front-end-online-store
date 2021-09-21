import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class SaibaMaisPag extends React.Component {
  constructor() {
    super();
    this.obtemObjetoNecessarioParaCriarAPagina = this
      .obtemObjetoNecessarioParaCriarAPagina.bind(this);
  }

  obtemObjetoNecessarioParaCriarAPagina() {
    const { location: { id, products } } = this.props;
    const object = products.find((element) => element.id === id);
    return object;
  }

  render() {
    console.log(this.obtemObjetoNecessarioParaCriarAPagina());
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
            { this.obtemObjetoNecessarioParaCriarAPagina().title }
            {' '}
            - R$
            {' '}
            { this.obtemObjetoNecessarioParaCriarAPagina().price }
          </h1>
          <article>
            <img
              alt="productImg"
              src={ this.obtemObjetoNecessarioParaCriarAPagina().thumbnail }
            />
            <textarea>
              { JSON.stringify(this.obtemObjetoNecessarioParaCriarAPagina()) }
            </textarea>
          </article>
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
