import React from 'react';
import Player from '@vimeo/player';
import MediaPlayerComponent from '../../components/media-player/media-player-component';

export default class MediaPlayerContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MediaPlayerComponent currentId={this.props.currentId}
                                      vimeoId={this.props.currentId}
                                      width="640"/>
            </div>
        );
    }


}
