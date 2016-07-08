var React = require('react');
var Navigation = require('app/components/Navigation');

var Main = (props) => {
  function isLoginPage() {
    if(props.children.props.route.component.displayName !== 'Login') {
      return <Navigation />
    } else {
      console.log('Login page!');
    }
  }
  return (
    <div>
    {isLoginPage()}
    <div className="row">
      <div className="column small-12 medium-8 large-6">
        {props.children}
      </div>
    </div>
    </div>
  );
}

module.exports = Main;
