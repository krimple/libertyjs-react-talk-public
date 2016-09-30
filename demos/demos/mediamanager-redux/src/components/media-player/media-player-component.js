import React from 'react';
import Player from '@vimeo/player';
import { connect } from 'react-redux';

class MediaPlayer extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        if (this.props.item) {
            return (
                <div className="col-md-12">
                    <h3>{this.props.item.title}</h3>
                    <div className="row">
                        <div id='vimeo-player' className="row col-md-12">
                        </div>
                    </div>
                    <h3>Talk Description</h3>
                    <div className="row">
                        <div className="col-md-12 text-justify"
                             dangerouslySetInnerHTML={createMarkup(this.props.item.description)}></div>
                    </div>
                </div>
            );
        } else {
            return (<p>Choose video...</p>)
        }
    }

    componentDidUpdate() {
        if (this.props && this.props.item) {
            if (this.player) {
               this.player.loadVideo(this.props.currentId);
            } else {
                this.player = new Player('vimeo-player', {
                    id: this.props.currentId,
                    width: 550,
                    loop: false
                });
                this.player.play();
            }
        }
    }
}

function mapStateToProps(state) {
  if (state) {
    return {
      item: state.items.find((item) => {
          return state.currentId === item.id }),
      currentId: state.currentId
    };
  } else {
    return {
      item: null
    }
  }
}

function createMarkup(content) {
    return {
        __html: content
    };
}

export default connect(mapStateToProps)(MediaPlayer);

