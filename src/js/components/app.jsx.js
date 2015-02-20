'use strict';

var React = require('react'),
    Catalog = require('../components/catalog.jsx'),

    App   = React.createClass({
  render: function render() {
    return (
      <div>
        <h1>My Store</h1>
        <hr />
        <Catalog />
      </div>
    );
  }

});

module.exports = App;
