import SynthData from '../SynthData';
import actionTypes from './actionTypes';

let synthDataReducer = (previousState = new SynthData(), action) => {
    console.log('reducing!', previousState, action);
    switch(action.type) {
        case actionTypes.ADJUST_FREQUENCY:
            return {
                ...previousState,
                frequency: action.value
            };
        case actionTypes.ADJUST_VOLUME:
            return {
                ...previousState,
                volume: action.value
            };
        case actionTypes.ADJUST_WAVEFORM:
            return {
                ...previousState,
                waveForm: action.waveForm
            };
        case actionTypes.ENABLE_VIBRATO:
            return {
                ...previousState,
                rootNote: previousState.frequency,
                vibrato: true,
                vibratoOffset: 0
            };
        case actionTypes.DISABLE_VIBRATO:
            let newState = { ...previousState };
            newState.delete('vibrato');
            newState.delete('vibratoOffset');
            return newState;
        case actionTypes.MOVE_VIBRATO:
            return {
                ...previousState,
                vibratoOffset: action.offset
            };
        default:
            return previousState;
    }
};

export default synthDataReducer;