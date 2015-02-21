'use strict';

var React      = require('react'),
    appActions = require('../../actions/appActions'),

    RemoveFromCart  = React.createClass({
  handleClick: function handleClick() {
    appActions.removeItem(this.props.id);
  },

  render: function render() {
    return (
      <button onClick={this.handleClick}>Remove From Cart</button>
    );
  }
});

module.exports = RemoveFromCart;
