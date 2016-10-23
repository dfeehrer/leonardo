import React, { Component, PropTypes } from 'react';

// skill component - represents a single skill item
export default class Leadership extends Component {
  
  render() {
    return (
        <div className="bs-component">

          <div className="panel panel-warning">
            <div className="panel-heading">
              <h3 className="panel-title">{this.props.leadership.leadershipName}</h3>
            </div>
          <div className="panel-body">
          {this.props.leadership.leadershipDesc}
          </div>
          </div>
        </div>


    );
  }
}

Leadership.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  leadership: PropTypes.object.isRequired,
};
