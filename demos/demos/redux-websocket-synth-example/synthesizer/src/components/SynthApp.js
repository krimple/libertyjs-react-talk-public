import React, {Component} from 'react';
import {Provider} from 'react-redux';
import ControlPanel from './ControlPanel';
import Synthesizer from './Synthesizer';
import configureStore from '../store/configureStore';
import messageBridge from '../message-bridge/MessageBridge';

import './SynthApp.css';

let store = configureStore();
messageBridge(store);

console.log('store is', store);
class SynthApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="container">
                    <ControlPanel />
                    <Synthesizer />
                </div>
            </Provider>
        );
    }
}

export default SynthApp;
