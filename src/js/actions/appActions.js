'use strict';

var appConstants  = require('../constants/appConstants'),
    appDispatcher = require('../dispatchers/appDispatcher'),

    appActions    = {
      addItem:      function addItem(item) {
        console.log(item);
        appDispatcher.dispatch({
          actionType: appConstants.ADD_ITEM,
          item:       item
        });
      },
      removeItem:   function removeItem(id) {
        appDispatcher.dispatch({
          actionType: appConstants.REMOVE_ITEM,
          id:         id
        });
      },
      increaseItem: function increaseItem(id) {
        appDispatcher.dispatch({
          actionType: appConstants.INCREASE_ITEM,
          id:         id
        });
      },
      decreaseItem: function decreaseItem(id) {
        appDispatcher.dispatch({
          actionType: appConstants.DECREASE_ITEM,
          id:         id
        });
      }
    };

module.exports = appActions;
