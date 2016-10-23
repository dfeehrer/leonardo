import React, { Component, PropTypes } from 'react';

// skill component - represents a single skill item
export default class Education extends Component {
  
  render() {
    return (
      /*  <div className="bs-component">

          <div className="panel panel-success">
            <div className="panel-heading">
              <h3 className="panel-title">{this.props.edu.eduName}</h3>
            </div>
          <div className="panel-body">
          {this.props.edu.eduDesc}
          </div>
          </div>
        </div>
        */
        <div className="media">
  <a className="media-left" href="#">
    <img className="media-object" src="image.jpg"></img>
  </a>
  <div className="media-body">
    <h4 className="media-heading">{this.props.edu.eduName}</h4>
{this.props.edu.eduDesc}
  </div>
</div>

    );
  }
}

Education.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  edu: PropTypes.object.isRequired,
};
