import React from 'react';
import {connect} from 'react-redux';
import selectVideoById from '../../actions/select-video-action';

class MediaListItem extends React.Component {

  constructor(props) {
    super(props);
    this.selectVideo = this.selectVideo.bind(this);
  }

  render() {
    return (
      <div onClick={this.selectVideo}
           className={"list-group-item " +
           (this.props.item.id === this.props.currentId ? "active" : "")}>
        <h3>{ this.props.item.title }</h3>
        <p>{ this.props.item.description.substring(0, 300) + '...' }</p>
      </div>
    );
  }

  selectVideo() {
    this.props.dispatch(selectVideoById(this.props.item.id));
  }
};

function mapStateToProps(state) {
  return {
    currentId: state.currentId
  }
}

export default connect(mapStateToProps)(MediaListItem);
