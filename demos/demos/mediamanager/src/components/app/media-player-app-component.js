import React from 'react';
import MediaListContainer from '../../containers/media-list/media-list-container';
import MediaPlayerContainer from '../../containers/media-player/media-player-container';

let MediaPlayerAppComponent = (props) => {
    return (
        <div className="container">
            <div className="row">
                <h1>Chariot Video Stream (React)</h1>
                <hr/>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <MediaListContainer items={props.items}
                                        currentId={props.currentId}
                                        selectVideo={props.selectVideo}/>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-5">
                    <MediaPlayerContainer currentId={props.currentId }/>
                </div>
            </div>
        </div>
    );
};

export default MediaPlayerAppComponent;

