import React from 'react';
import { Link } from 'react-router-dom';

class TelaPrincipal extends React.Component {
  render() {
    return (
      <div>
        <input type="text" value="aaa" />
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>

        <Link data-testid="shopping-cart-button" to="/carrinho">
          &#x1F6D2; carrinho de compras
        </Link>

      </div>
    );
  }
}

export default TelaPrincipal;
