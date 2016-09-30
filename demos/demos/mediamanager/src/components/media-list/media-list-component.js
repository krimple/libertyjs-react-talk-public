import React from 'react';

let MediaListComponent = (props) => {
            return(
                    <div className="list-group">
                        { props.items }
                    </div>
            );
};

export default MediaListComponent;

