import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import firebase from '../firebase/';

var Main = require('app/components/Main');
var Login = require('app/components/Login');
var Clients = require('app/components/Clients');
var Orders = require('app/components/Orders');

var requireLogin = (nextState, replace, next) => {
  if (!firebase.auth().currentUser) {
    replace('/');
  }
  next();
};

var redirectIfLoggedIn = (nextState, replace, next) => {
  if (firebase.auth().currentUser) {
    replace('/clients');
  }
  next();
};


export default (
  <Router history={hashHistory}>
  <Route path="/" component={Main}>
    <Route path="/orders" component={Orders} onEnter={requireLogin} />
    <Route path="/clients" component={Clients} onEnter={requireLogin} />
    <IndexRoute component={Login} onEnter={redirectIfLoggedIn} />
  </Route>
</Router>
);
