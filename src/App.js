import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Nav from './Components/Nav';
import PageNotFound from './Components/PageNotFound';
import ProductList from './Components/ProductList';
import { Switch,Route } from 'react-router-dom';
import Carts from './Components/Carts';
export default class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Switch>
          <Route exact path="/" component={ProductList}/>
          <Route path="/carts" component={Carts}/>
          <Route component={PageNotFound}/>
          </Switch>
       
      </div>
    )
  }
}
