'use strict';

var React      = require('react'),
    appActions = require('../actions/appActions'),

    AddToCart  = React.createClass({
  handleClick: function handleClick() {
    appActions.addItem(this.props.item);
  },

  render: function render() {
    return (
      <button onClick={this.handleClick}>Add To Cart</button>
    );
  }
});

module.exports = AddToCart;
