import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router';

class MediaListItem extends React.Component {

  render() {
    return (
        <div className={"list-group-item"}>
          <div className="row">
              <div className="col-md-2">
                  <img src={this.props.item.thumbnail_medium} style={{border: '1px solid black'}}/>
              </div>
              <div className="col-md-1">
                  &nbsp;
              </div>
              <div className="col-md-9">
                  <h3><Link to={"/video/" + this.props.item.id}>{ this.props.item.title }</Link></h3>
                  <p>{ this.props.item.description.substring(0, 300) + '...' }</p>
              </div>
          </div>
        </div>
    );
  }
}

// in this case, we don't need external state context, it's a dumb component!
export default withRouter(MediaListItem);
