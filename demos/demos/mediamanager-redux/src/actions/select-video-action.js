import {SELECT_VIDEO} from "./action-types";

let selectVideoById = (id) => {
    return {
        type: SELECT_VIDEO,
        id: id
    };
}

export default selectVideoById;