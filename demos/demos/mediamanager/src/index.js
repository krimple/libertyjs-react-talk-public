require('babel-polyfill');

require('../node_modules/bootstrap/dist/css/bootstrap.css');
require('../node_modules/@vimeo/player/dist/player.min.js');

import React from 'react';
import { render } from 'react-dom';

import MediaPlayerAppContainer from './containers/app/media-player-app-container';

render(
  <div className="container">
    <MediaPlayerAppContainer />
  </div>,
  document.getElementById('root')
)
