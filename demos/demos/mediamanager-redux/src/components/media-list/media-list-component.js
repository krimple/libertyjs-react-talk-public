import React from 'react';
import { connect } from 'react-redux';
import MediaListItem from '../media-list-item/media-list-item-component';

class MediaList extends React.Component {
  render() {

    if (this.props.items && this.props.items.length > 0) {
       return (
         <div className="list-group">
             { this.props.items.map((item) => 
                <MediaListItem key={item.id} item={item} />) }
         </div>
       );
  } else {
     return (<div>No items found...</div>);
  }
 }
}


function mapReduxStateToProps(state) {
  let items;
  if (state) {
      if (state.filterText && state.filterText.trim() !== '') {
          items = state.items.filter((item) => item.description.toLowerCase().indexOf(state.filterText.toLowerCase()) > -1);
      } else {
          items = state.items;
      }
    return {
      items: items
    };
  } else {
    return { };
  }
}

export default connect(mapReduxStateToProps)(MediaList);
