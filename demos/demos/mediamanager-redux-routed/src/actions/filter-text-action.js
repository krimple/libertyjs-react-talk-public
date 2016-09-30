import {FILTER_TEXT} from "./action-types";

let filterText = (text) => {
    return {
        type: FILTER_TEXT,
        text: text
    }
};

export default filterText;