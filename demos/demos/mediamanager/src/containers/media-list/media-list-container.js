import React from 'react';
import MediaItem from '../../components/media-item/media-item-component';
import MediaListComponent from '../../components/media-list/media-list-component';

export default class MediaListContainer extends React.Component {

    constructor(props) {
        super(props);
        console.log('initializing medialistcontainer', props);
    }

    render() {
        let items = [];
        this.props.items.forEach((item, index) => {
            items.push(<MediaItem key={item.id}
                                  item={item}
                                  currentId={this.props ? this.props.currentId : 0}
                                  selectVideo={this.props.selectVideo} />);
        });


        if (this.props.items.length > 0) {
            return (
                <div>
                    <MediaListComponent items={items}
                                        currentId={this.props ? this.props.currentId : 0} />
                </div>
            );
        } else {
            return <span>Please wait...</span>
        }
    }
}

