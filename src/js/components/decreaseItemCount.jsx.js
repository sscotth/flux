'use strict';

var React      = require('react'),
    appActions = require('../actions/appActions'),

    DecreaseItemCount  = React.createClass({
  handleClick: function handleClick() {
    appActions.decreaseItem(this.props.id);
  },

  render: function render() {
    return (
      <button onClick={this.handleClick}>-</button>
    );
  }
});

module.exports = DecreaseItemCount;
