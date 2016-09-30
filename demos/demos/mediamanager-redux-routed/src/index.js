require('babel-polyfill');

require('../node_modules/bootstrap/dist/css/bootstrap.css');
require('../node_modules/@vimeo/player/dist/player.min.js');

import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import initializeStore from './platform/initialize-store';
import loadVideos from './actions/load-videos-action';
import routes from './routes/routes';

let providerStore = initializeStore({ items: [], currentId: 0 });

providerStore.dispatch(loadVideos());

render(
  <div className="container">
    <Provider store={providerStore}>
        <Router history={browserHistory} routes={routes}>
        </Router>
    </Provider>
  </div>,
  document.getElementById('root')
);
