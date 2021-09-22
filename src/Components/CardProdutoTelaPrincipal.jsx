import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CardProduto extends React.Component {
  render() {
    const { title, price, img, id, products, onClick } = this.props;
    return (
      <div data-testid="product">
        <img src={ img } alt={ title } />
        <h1>{ title }</h1>
        <h2>{ price }</h2>
        <Link
          data-testid="product-detail-link"
          to={ { pathname: '/SaibaMais', id: `${id}`, products, onClick } }
        >
          <span>
            Saiba Mais
          </span>
        </Link>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ () => onClick(title, price, img, id) }
        >
          Adicione no carrinho
        </button>
      </div>
    );
  }
}

CardProduto.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape().isRequired,
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CardProduto;
