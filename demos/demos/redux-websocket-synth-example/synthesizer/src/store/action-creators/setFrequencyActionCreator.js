import actionTypes from '../actionTypes';

function adjustFrequency(amount) {
    return {
        type: actionTypes.ADJUST_FREQUENCY,
        value: amount
    };
}

export default adjustFrequency;