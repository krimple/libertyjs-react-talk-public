import {applyMiddleware, combineReducers, createStore} from 'redux';
import createLogger from 'redux-logger';

import synthDataReducer from './synthDataReducer';
let logger = createLogger();
let configureStore = () => {
    return createStore(
        combineReducers({
            synthData: synthDataReducer
        }),
        applyMiddleware(logger)
    );
};

export default configureStore;