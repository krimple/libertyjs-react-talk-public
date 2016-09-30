import React from 'react'

import MediaPlayerAppComponent from '../../components/app/media-player-app-component';
import * as axios from 'axios';

export default class MediaPlayerAppContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentId: 0,
            items: []
        };
        this.selectVideo = this.selectVideo.bind(this);
    }

    render() {
        return (
            <div className="container">
                <MediaPlayerAppComponent items={this.state.items} currentId={this.state.currentId} selectVideo={this.selectVideo}/>
            </div>
        );
    }

    componentDidMount() {
        let me = this;
        console.log('rendering...', me);

        axios.get('http://vimeo.com/api/v2/chariotsolutions/videos.json')
            .then((response) => {
                this.setState({items: response.data, currentId: 0});
            });
    }

    selectVideo(selectedItemId) {
        console.log('arguments are', arguments);
        console.log('this is', this);
        this.setState({currentId: selectedItemId});
    }
}
