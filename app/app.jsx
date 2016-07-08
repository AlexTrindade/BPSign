var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
import firebase from './firebase/index.js';

var Main = require('Main');
var Login = require('Login');
var Clients = require('Clients');
var Orders = require('Orders');

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    hashHistory.push("/clients");
  } else {
    console.log('não autenticado');
    hashHistory.push("/");
  }
});

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="/orders" component={Orders} />
      <Route path="/clients" component={Clients} />
      <IndexRoute component={Login} />
    </Route>
  </Router>,
  document.getElementById('app')
);
