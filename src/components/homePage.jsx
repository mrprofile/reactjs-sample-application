"use strict";

var React = require('react');

var Home = React.createClass({
  render: function(){
    return (
      <div className="jumbotron">
        <h1>Welcome to the React Flux Starter Kit</h1>
        <p>
          React, Flux, and React Router combined with Browserify, Gulp, and Bootstrap. Build a React and Flux app from scratch using this starter kit.
        </p>
      </div>
    );
  }
});

module.exports = Home;
