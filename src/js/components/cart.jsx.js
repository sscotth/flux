'use strict';

var React             = require('react'),
    appStore          = require('../stores/appStore.js'),
    RemoveFromCart    = require('../components/removeFromCart.jsx'),
    IncreaseItemCount = require('../components/increaseItemCount.jsx'),
    DecreaseItemCount = require('../components/decreaseItemCount.jsx'),

    Link              = require('react-router').Link,

    Cart  = React.createClass({
  getInitialState: function getInitialState() {
    return {items: appStore.getCart()};
  },

  componentWillMount: function componentWillMount() {
    appStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function componentWillUnmount() {
    appStore.removeChangeListener(this._onChange);
  },

  _onChange: function onChange() {
    this.setState({items: appStore.getCart()});
  },

  render: function render() {
    var total = this.state.items.reduce(function total(prev, curr) {
      return prev + (curr.price * curr.qty);
    }, 0),

    items = this.state.items.map(function createRow(item) {
      return (
        <tr key={item.id}>
          <td>{item.title}</td>
          <td>${item.price}</td>
          <td>x{item.qty}</td>
          <td>${item.price * item.qty}</td>
          <td>
            <IncreaseItemCount id={item.id} />
            <DecreaseItemCount id={item.id} />
            <RemoveFromCart id={item.id} />
          </td>
        </tr>
      );
    });

    return (
      <div>
        <table>
          {items}
        </table>
        <h3>Total: {total}</h3>
        <Link to="catalog">Continue Shopping</Link>
      </div>
    );
  }
});

module.exports = Cart;
