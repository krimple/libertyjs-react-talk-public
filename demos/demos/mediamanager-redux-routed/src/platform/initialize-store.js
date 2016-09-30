import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import videoReducer from '../reducers/video-reducer';
let logger = createLogger({ diff: true});
let initializeStore = (initialState) => {
    const store = createStore(
        videoReducer,
        initialState,
        compose(
                applyMiddleware(thunk, logger),
                window.devToolsExtension && 
                window.devToolsExtension())
    );

    return store;

};

export default initializeStore;