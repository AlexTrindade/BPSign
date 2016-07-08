var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = React.createClass({
  logout: function() {
    firebase.auth().signOut().then(() => {
      console.log('Logged out!');
    });
  },
  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">BPSign</li>
            <li>
              <IndexLink to="/clients" activeClassName="active-link">Clients</IndexLink>
            </li>
            <li>
              <IndexLink to="/orders" activeClassName="active-link">Orders</IndexLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              <a href="#" className="logout-button" onClick={this.logout}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Navigation;
