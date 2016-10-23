import React, { Component, PropTypes } from 'react';

// skill component - represents a single skill item
export default class Honor extends Component {
  
  render() {
    return (
        <div className="bs-component">

          <div className="panel panel-info">
            <div className="panel-heading">
              <h3 className="panel-title">{this.props.honor.honorName}</h3>
            </div>
          <div className="panel-body">
          {this.props.honor.honorDesc}
          </div>
          </div>
        </div>


    );
  }
}

Honor.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  honor: PropTypes.object.isRequired,
};
