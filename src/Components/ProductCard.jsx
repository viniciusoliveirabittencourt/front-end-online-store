import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { title, price, img } = this.props;
    return (
      <div data-testid="product">
        <img src={ img } alt={ title } />
        <h1>{ title }</h1>
        <h2>{ price }</h2>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default ProductCard;
