import React from 'react';
import {Route, IndexRoute} from 'react-router';
import MediaPlayerAppComponent from '../components/app/media-player-app-component'
import MediaList from '../components/media-list/media-list-component';
import MediaPlayer from '../components/media-player/media-player-component';


export default (
    <Route path="/" component={MediaPlayerAppComponent}>
        <IndexRoute component={MediaList}/>
        <Route path="list" component={MediaList}/>
        <Route path="video/:id" component={MediaPlayer}/>
    </Route>
);

