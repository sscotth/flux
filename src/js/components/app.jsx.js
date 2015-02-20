'use strict';

var React = require('react'),
    Catalog = require('../components/catalog.jsx'),
    Cart = require('../components/cart.jsx'),

    App   = React.createClass({
  render: function render() {
    return (
      <div>
        <h1>My Store</h1>
        <hr />
        <Catalog />
        <hr />
        <Cart />
      </div>
    );
  }
});

module.exports = App;
