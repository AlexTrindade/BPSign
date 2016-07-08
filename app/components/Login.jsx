var React = require('react');
import firebase from '../firebase/index.js';


export var Login = React.createClass({
  getInitialState: function() {
    return {
      userEmail: 'Não logado ainda!'
    };
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var email = this.refs.email.value;
    var pass = this.refs.pass.value;
    firebase.auth().signInWithEmailAndPassword(email, pass).then((result) => {
      console.log('Auth worked!', result);
    }, (error) => {
      console.log('Unable to auth', error);
    });
  },
  render: function () {
    return (
      <div>
        <div>Login page</div>
        <form>
          <div className="row">
            <div className="large-12 columns">
              <input type="text" placeholder="email" ref="email"/>
            </div>
            <div className="large-12 columns">
              <input type="text" placeholder="pass" ref="pass"/>
            </div>
            <div className="large-12 columns">
              <button className="button" onClick={this.handleSubmit}>Login</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
});

module.exports = Login;
