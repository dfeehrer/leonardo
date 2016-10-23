import React, { Component, PropTypes } from 'react';

// skill component - represents a single skill item
export default class Exp extends Component {
  render() {
    return (
        <div className="bs-component">

          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">{this.props.exp.expName}</h3>
            </div>
          <div className="panel-body">
          {this.props.exp.expText}
          </div>
          </div>
        </div>


    );
  }
}

Exp.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  exp: PropTypes.object.isRequired,
};
