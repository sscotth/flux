'use strict';

var React  = require('react'),
    Router = require('react-router'),

    DefaultRoute = Router.DefaultRoute,
    Route        = Router.Route,

    App     = require('./components/app.jsx'),
    Catalog = require('./components/catalog.jsx'),
    Cart    = require('./components/cart.jsx'),

    ROUTES = (
      <Route name="app" path="/" handler={App}>
        <DefaultRoute handler={Catalog} />
        <Route name="catalog" handler={Catalog} />
        <Route name="cart" handler={Cart} />
      </Route>
    );

Router.run(ROUTES, function router(Handler) {
  React.render(<Handler />, document.querySelector('.container'));
});
