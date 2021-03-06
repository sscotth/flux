'use strict';

var React      = require('react'),
    appStore   = require('../../stores/appStore.js'),
    AddToCart  = require('./addToCart.jsx'),

    Catalog  = React.createClass({
  getInitialState: function getInitialState() {
    return {items: appStore.getCatalog()};
  },

  render: function render() {
    var items = this.state.items.map(function createRow(item) {
      return (
        <tr key={item.id}>
          <td>{item.title}</td>
          <td>${item.price}</td>
          <td><AddToCart item={item}/></td>
        </tr>
      );
    });

    return (
      <table>{items}</table>
    );
  }
});

module.exports = Catalog;
