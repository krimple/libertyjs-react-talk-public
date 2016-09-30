import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class MediaPlayerApp extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <h1><Link to="/">Chariot Video Stream (React)</Link></h1>
                    <hr/>
                    {this.props.children}
                </div>
           </div>
        );
    }


}

export default connect()(MediaPlayerApp);

