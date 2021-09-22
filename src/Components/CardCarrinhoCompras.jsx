import React from 'react';
import PropTypes from 'prop-types';

class CardCarrinhoCompras extends React.Component {
  render() {
    const { title, img, price } = this.props;
    return (
      <div>
        <img alt="imagem-do-produto" src={ img } />
        <h1 data-testid="shopping-cart-product-name">{ title }</h1>
        <h2>{ price }</h2>
      </div>
    );
  }
}

CardCarrinhoCompras.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CardCarrinhoCompras;
