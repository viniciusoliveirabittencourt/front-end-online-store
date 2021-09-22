import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import TelaSaibaMais from './Components/TelaSaibaMais';
import TelaCarrinhoCompras from './Components/TelaCarrinhoCompras';
import TelaPrincipal from './Components/TelaPrincipal';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ TelaPrincipal } />
          <Route path="/carrinho" component={ TelaCarrinhoCompras } />
          <Route path="/SaibaMais" component={ TelaSaibaMais } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
