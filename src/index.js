import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import './index.css';

import Home from './pages/home';
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/categoria';
import Listar from './pages/listar';
import Pesquisa from './pages/pesquisa';
import DetalheProjeto from './pages/detalhe';

const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact /> 
      <Route path="/listar" component={Listar} /> 
      <Route path="/pesquisa/:searchString" component={Pesquisa} /> 
      <Route path="/detalhe/:id" component={DetalheProjeto} /> 
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);