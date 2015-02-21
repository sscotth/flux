'use strict';

var React = require('react'),
    Link  = require('react-router').Link,

    Header;

Header = React.createClass({
  render: function render() {
    return (
      <header>
        <h1><Link to="app">My Store</Link></h1>
        <nav>
          <ul>
            <li><Link to="catalog">Catalog</Link></li>
            <li><Link to="cart">Cart</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
});

module.exports = Header;
