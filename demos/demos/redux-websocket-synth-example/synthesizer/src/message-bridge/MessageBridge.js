import adjustVolume from '../store/action-creators/volumeActionCreator';
import adjustFrequency from '../store/action-creators/setFrequencyActionCreator';
import adjustWaveform from '../store/action-creators/adjustWaveformActionCreator';

export default function messageBridge(store) {
    let webSocket = new WebSocket('ws://localhost:8080/data', 'data');
    // cheat cheat cheat!

    webSocket.onerror = function(e) {
        console.log('connection error');
        console.dir(e);
    };

    webSocket.onopen = function() {
        console.log('Websocket client connected');
    };

    webSocket.onmessage = function(e) {
        console.log(`message received ${JSON.stringify(e.data)}`);
        let parsedData = JSON.parse(e.data);
        let volume = parsedData[0] / 4.0;
        let frequency = parsedData[1] * 10 + 100;
        let waveformRaw = parsedData[2];
        let waveform;
        switch(true) {
            case (waveformRaw >= 0 && waveformRaw <= 250):
                waveform = 'square';
                break;
            case (waveformRaw >= 251 && waveformRaw <= 500):
                waveform = 'sine';
                break;
            case (waveformRaw >= 501 && waveformRaw <= 750):
                waveform = 'sawtooth';
                break;
            case (waveformRaw >= 750 && waveformRaw <= 1024):
                waveform = 'triangle';
                break;
            default:
                console.log('no good case, defaulting to square');
                waveform = 'square';
        }
        console.log(`Changing volume to ${volume}, frequency to ${frequency}, waveform to ${waveform}`);
        store.dispatch(adjustVolume(volume));
        store.dispatch(adjustFrequency(frequency));
        store.dispatch(adjustWaveform(waveform));
    }
}