import React from 'react';
import Player from '@vimeo/player';

class MediaPlayerComponent extends React.Component {
    render() {
        console.log('rendering player again ', this.props);
        return (
            <div>
                <div data-vimeo-id={this.props.currentId} data-vimeo-width="640"
                     style={{width: '640px', height: '480px'}}
                     id={ 'vimeo-' + this.props.currentId }>
                </div>
            </div>
        );
    }

    componentDidUpdate() {
        if (this.props && this.props.currentId) {
            if (this.player) {
               this.player.loadVideo(this.props.currentId);
            } else {
                this.player = new Player('vimeo-' + this.props.currentId, {
                    id: this.props.currentId,
                    width: 640,
                    height: 480,
                    loop: false
                });
            }
        }
    }
};

export default MediaPlayerComponent;

