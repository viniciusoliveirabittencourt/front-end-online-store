import React from 'react';
import PropTypes from 'prop-types';
import CarrinhoComponent from './CardCarrinhoCompras';
import { Link } from 'react-router-dom';

class TelaCarrinhoCompras extends React.Component {
  constructor() {
    super();
    this.state = { cartItems: [] };
    this.addCarrinhoComponent = this.addCarrinhoComponent.bind(this);
    this.valorCompra = this.valorCompra.bind(this);
  }

  componentDidMount() {
    this.addCarrinhoComponent();
  }

  valorCompra(target) {
    const { name } = target;
    const value = name === 'add' ? this.cartComponentsAdd() : this.cartComponentsSubb();
    console.log(value);
  }

  addCarrinhoComponent() {
    const { location } = this.props;
    const { carrArr } = location;
    const items = carrArr.map(({ title, price, img }, index) => (<CarrinhoComponent
      title={ title }
      price={ price }
      img={ img }
      key={ index }
      onClick={ this.valorCompra }
    />));
    this.setState({ cartItems: items });
  }

  render() {
    const { location } = this.props;
    const { carrArr } = location;
    const { cartItems } = this.state;
    return (
      <div>
        <Link to="/">
            <span>
              return
            </span>
          </Link>
        <h1
          data-testid="shopping-cart-product-quantity"
        >
          { carrArr ? carrArr.length : 0 }
        </h1>
        { cartItems
          .length !== 0 ? cartItems
          : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p> }
        <h1>Valor Total da Compra: R$ {}</h1>
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
