import React from 'react';
import Player from '@vimeo/player';

class MediaItem extends React.Component {

    constructor(props) {
        super(props);
        this.setCurrentItem = this.setCurrentItem.bind(this);
    }

    setCurrentItem() {
        this.props.selectVideo(this.props.item.id);
    }

    render() {
        console.log('rendering media item', this.props);
        return (
            <div onClick={this.setCurrentItem}
                className={"list-group-item " +
                (this.props.item.id === this.props.currentId ? "active" : "")}>
                <h3>{ this.props.item.title }</h3>
                <p>{ this.props.item.description.substring(0, 300) + '...' }</p>
            </div>
        );
    }
};

export default MediaItem;
