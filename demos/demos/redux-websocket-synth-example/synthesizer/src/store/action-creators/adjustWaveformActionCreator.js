import actionTypes from '../actionTypes';

function adjustWaveform(waveForm) {
    return {
        type: actionTypes.ADJUST_WAVEFORM,
        waveForm: waveForm 
    };
}

export default adjustWaveform;