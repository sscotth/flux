'use strict';

var React        = require('react'),
    RouteHandler = require('react-router').RouteHandler,

    Header = require('./header.jsx'),

    App;

App = React.createClass({
  render: function render() {
    return (
      <div>
        <Header />
        <RouteHandler/>
      </div>
    );
  }
});

module.exports = App;
