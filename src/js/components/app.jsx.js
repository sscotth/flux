'use strict';

var React = require('react'),
    appActions = require('../actions/appActions'),

    App   = React.createClass({

  handleClick: function handleClick() {
    appActions.addItem('this is an item');
  },

  render: function render() {
    return (
      <h1 onClick={this.handleClick}>My First Component</h1>
    );
  }

});

module.exports = App;
