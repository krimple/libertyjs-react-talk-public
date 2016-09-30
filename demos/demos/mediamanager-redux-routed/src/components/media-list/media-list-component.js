import React from 'react';
import {connect} from 'react-redux';
import MediaListItem from '../media-list-item/media-list-item-component';
import filterText from '../../actions/filter-text-action';

class MediaList extends React.Component {

    constructor(props) {
        super(props);
        this.setFilterText = this.setFilterText.bind(this);
    }

    render() {
        let items = [];

        if (this.props.items && this.props.items.length > 0) {
            return (
                <div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="filter">
                                Filter
                                <input type="text" name="filter" ref="filter"
                                       onChange={this.setFilterText} 
                                       value={this.props.filterText} /></label>
                                &nbsp; <span style={{color: 'red'}}>{ this.props.errors }</span>
                            <br/>
                        </div>
                    </div>
                    <div className="list-group">
                        { this.props.items.map((item) => {
                            return <MediaListItem key={item.id} item={item}/>;
                        })
                        }
                    </div>
                </div>
            );
        } else {
            return (<div>Please wait...</div>);
        }
    }

    setFilterText(event) {
        this.props.dispatch(filterText(event.target.value));
    }
}


function mapStateToProps(state, ownProps) {
    console.log('mapping state to props');
    console.dir(state);
    console.dir(ownProps);
    let newProps = {
        filterText: state.filterText
    };
    let items;
    let errors = null;
    if (state) {
        if (state.filterText && state.filterText.trim() !== '') {
            let searchArgument = state.filterText.toLowerCase();
            items = state.items.filter((item) => item.description.toLowerCase().indexOf(searchArgument) > -1);
            if (items.length === 0) {
                items = state.items;
                errors = "Not found. Showing all videos.";
            }
        } else {
            items = state.items;
        }
        newProps.items = items;
        newProps.errors = errors;
    }
    return newProps;
}

export default connect(mapStateToProps)(MediaList);
