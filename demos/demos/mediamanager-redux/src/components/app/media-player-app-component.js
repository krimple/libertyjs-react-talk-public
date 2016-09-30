import React from 'react';
import MediaList from '../media-list/media-list-component';
import MediaPlayer from '../media-player/media-player-component';
import filterText from '../../actions/filter-text-action';
import { connect } from 'react-redux';

class MediaPlayerApp extends React.Component {

    constructor(props) {
        super(props);
        this.setFilterText = this.setFilterText.bind(this);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <h1>Chariot Video Stream (React)</h1>
                    <hr/>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <MediaPlayer />
                    </div>
                    <div className="col-md-1 divider">
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="filter">
                            Filter
                            <input type="text" name="filter"
                                   onChange={this.setFilterText} 
                                   value={this.props.filterText} /></label><br/>
                        <MediaList />
                    </div>
                </div>
            </div>
        );
    }

    setFilterText(event) {
        this.props.dispatch(filterText(event.target.value));
    }
}

function flubber(storeData) {
    return {
        filterText: storeData.filterText
    };
}

export default connect(flubber)(MediaPlayerApp);

