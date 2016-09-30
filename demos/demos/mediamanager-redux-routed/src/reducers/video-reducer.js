import {LOAD_VIDEOS, SELECT_VIDEO, FILTER_TEXT} from "../actions/action-types";

let videoReducer = (state, action) => {
    let newState;
    switch (action.type) {
        case LOAD_VIDEOS:
            newState = { items: action.items, currentId: 0, filterText: '' };
            break;
        case SELECT_VIDEO:
            newState = { ...state, currentId: action.id };
            break;
        case FILTER_TEXT:
            newState = { ...state, filterText: action.text};
            break;
        default:
            newState = { ...state };
    }
    return newState;
};

export default videoReducer;
