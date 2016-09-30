import actionTypes from '../actionTypes';

function adjustVolume(amount) {
    return {
        type: actionTypes.ADJUST_VOLUME,
        value: amount
    };
}

export default adjustVolume;