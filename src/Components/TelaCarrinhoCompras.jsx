import React from 'react';
import PropTypes from 'prop-types';
import CarrinhoComponent from './Carrinhos-Compents/CarrinhoComponet';

class TelaCarrinhoCompras extends React.Component {
  constructor() {
    super();
    this.addCarrinhoComponent = this.addCarrinhoComponent.bind(this);
  }

  addCarrinhoComponent() {
    const { location } = this.props;
    const { carrArr } = location;
    return carrArr.map(({ title, price, img }, index) => (<CarrinhoComponent
      title={ title }
      price={ price }
      img={ img }
      key={ index }
    />));
  }

  render() {
    const { location } = this.props;
    const { carrArr } = location;
    return (
      <div>
        <h1
          data-testid="shopping-cart-product-quantity"
        >
          { carrArr ? carrArr.length : 0 }
        </h1>
        { this.addCarrinhoComponent().length !== 0 ? this.addCarrinhoComponent() : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p> }
      </div>
    );
  }
}

TelaCarrinhoCompras.propTypes = {
  location: PropTypes.shape(
    PropTypes.shape(
      PropTypes.arrayOf().isRequired,
    ).isRequired,
  ).isRequired,
};

export default TelaCarrinhoCompras;
