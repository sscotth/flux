/* eslint key-spacing: 0 */

'use strict';

var EventEmitter  = require('events').EventEmitter,
    assign        = require('object-assign'),

    appDispatcher = require('../dispatchers/appDispatcher'),
    appConstants  = require('../constants/appConstants'),

    CHANGE_EVENT = 'change',

    _catalog      = [
      {id: 0, title: 'Apple',  price: 1.23},
      {id: 1, title: 'Banana', price: 0.99},
      {id: 2, title: 'Carrot', price: 2.12}
    ],

    _cartItems    = [],


    appStore = assign({}, EventEmitter.prototype, {

  getCart: function getCart() {
    return _cartItems;
  },

  getCatalog: function getCatalog() {
    return _catalog;
  },

  emitChange: function emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  },

  removeChangeListener: function removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }
});

module.exports = appStore;


appDispatcher.register(function register(action) {
  switch (action.actionType) {
    case appConstants.ADD_ITEM:
      _addItem(action.item);
      break;

    case appConstants.REMOVE_ITEM:
      _removeItem(action.id);
      break;

    case appConstants.INCREASE_ITEM:
      _increaseItem(action.id);
      break;

    case appConstants.DECREASE_ITEM:
      _decreaseItem(action.id);
      break;

    default:
  }

  appStore.emitChange();

  return true;
});


function _removeItem(id) {
  _cartItems = _cartItems.filter(function remove(item) {
    return item.id !== id;
  });

  return _cartItems;
}

function _increaseItem(id) {
  _cartItems = _cartItems.map(function increaseItem(item) {
    if (item.id === id) {
      item.qty++;
    }

    return item;
  });

  return _cartItems;
}

function _decreaseItem(id) {
  _cartItems = _cartItems
    .map(function decreaseItem(item) {
      if (item.id === id) {
        item.qty--;
      }

      return item;
    })
    .filter(function removeEmptyItems(item) {
      return item.qty > 0;
    });

  return _cartItems;
}

function _addItem(item) {
  var isAlreadyInCart = _cartItems.filter(function findItem(cartItem) {
    return cartItem.id === item.id;
  }).length > 0;

  if (isAlreadyInCart) {
    _increaseItem(item.id);
  } else {
    item.qty = 1;
    _cartItems.push(item);
  }

  return _cartItems;
}
