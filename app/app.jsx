var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
import firebase from 'app/firebase/';

import router from 'app/router/';

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
  <div>{router}</div>,
  document.getElementById('app')
);
