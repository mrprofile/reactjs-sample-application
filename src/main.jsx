$ = jQuery = require('jquery');

var React = require('react');
var Home = require('./components/homePage.jsx');
var Header = require('./components/common/header.jsx');
var Authors = require('./components/authors/authors.jsx');

var App = React.createClass({
  render: function(){
    return (
      <div>
        <Header />
        <Authors />
      </div>
    );
  }
});

React.render(<App />, document.getElementById('app'));
