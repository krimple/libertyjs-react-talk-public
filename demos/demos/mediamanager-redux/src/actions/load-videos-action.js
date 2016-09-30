import * as axios from 'axios';
import {LOAD_VIDEOS} from "./action-types";



// this is an async action
let loadVideos = () => {
    function loadVideosAction(data) {
        return {
            type: LOAD_VIDEOS,
            items: data
        };
    }
    return function(dispatch) {
        return axios.get('http://vimeo.com/api/v2/chariotsolutions/videos.json')
            .then((response) => {
                dispatch(loadVideosAction(response.data));
            });
    };
};



export default loadVideos;