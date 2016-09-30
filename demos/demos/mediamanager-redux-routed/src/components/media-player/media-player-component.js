import React from 'react';
import Player from '@vimeo/player';
import { connect } from 'react-redux';

class MediaPlayer extends React.Component {
    componentDidMount() {
        this.forceUpdate();
    }

    componentDidUpdate() {
        this.player = new Player(this._vimeoPlayer, {
          id: this.props.videoId,
          width: "auto",
          loop: false
        });
     }

    render() {
            let viewContent;
            if (!this.props.video) {
                viewContent = <p>Please wait..</p>;
            } else {
                viewContent = (
                <div className="col-md-12">
                    <h3>{this.props.video.title}</h3>
                    <div className="row">
                        <div id='vimeo-player'
                             ref={(c) => this._vimeoPlayer = c } className="row col-md-12">
                        </div>
                    </div>
                    <h3>Talk Description</h3>
                    <div className="row">
                        <div className="col-md-12 text-justify"
                             dangerouslySetInnerHTML={this.createMarkup(this.props.video.description)}></div>
                    </div>
                </div>
            );
            }

            return viewContent;
    }
    createMarkup(content) {
        return {
            __html: content
        };
    }
}


function mapStateToProps(state, ownProps) {
    let theId = Number(ownProps.routeParams.id);
    return {
        video: state.items.find((item) => item.id === theId),
        videoId: ownProps.routeParams.id
    }
}

export default connect(mapStateToProps)(MediaPlayer);

