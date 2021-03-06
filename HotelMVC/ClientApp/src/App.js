import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { FetchUser } from './components/FetchUser';
import { FetchCidade } from './components/FetchCidade';
import { FetchEstado } from './components/FetchEstado';
import { AddCliente } from './components/AddCliente';
import { AddEstado } from './components/AddEstado';
import { AddCidade } from './components/AddCidade';
import { AddClima } from './components/AddClima';



import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/fetch-user' component={FetchUser} />
        <Route path='/fetch-cidade' component={FetchCidade} />
        <Route path='/fetch-estado' component={FetchEstado} />
        <Route path='/add-cliente' component={AddCliente} />
        <Route path='/add-estado' component={AddEstado} />
        <Route path='/add-cidade' component={AddCidade} />
        <Route path='/add-clima' component={AddClima} />

        <Route path='/cliente/put/:id' component={AddCliente} />

      </Layout>
    );
  }
}
