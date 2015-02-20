'use strict';

var React      = require('react'),
    appActions = require('../actions/appActions'),

    IncreaseItemCount  = React.createClass({
  handleClick: function handleClick() {
    appActions.increaseItem(this.props.id);
  },

  render: function render() {
    return (
      <button onClick={this.handleClick}>+</button>
    );
  }
});

module.exports = IncreaseItemCount;
