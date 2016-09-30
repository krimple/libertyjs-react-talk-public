require('babel-polyfill');

require('../node_modules/bootstrap/dist/css/bootstrap.css');
require('../node_modules/@vimeo/player/dist/player.min.js');

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import initializeStore from './platform/initialize-store';
import MediaPlayerApp from './components/app/media-player-app-component';
import videoReducer from './reducers/video-reducer';
import loadVideos from './actions/load-videos-action';

let providerStore = initializeStore({ items: [], currentId: 0 });

providerStore.dispatch(loadVideos());

render(
  <div className="container">
    <Provider store={providerStore}>
      <MediaPlayerApp  />
    </Provider>
  </div>,
  document.getElementById('root')
);
