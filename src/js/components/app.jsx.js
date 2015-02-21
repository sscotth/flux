'use strict';

var React = require('react'),

    Header = require('./header.jsx'),

    App;

App = React.createClass({
  render: function render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
});

module.exports = App;
