import React, { Component, PropTypes } from 'react';


import Honor from './Honor.jsx';

// HonorArea component
export default class HonorArea extends Component {


  renderHonors(){
    return this.props.honors.map((honor) => {
          return(
            <Honor key={honor.honorName} honor={honor}></Honor>

      );
    });
    }
  render() {

    return (

      <div className="bs-docs-section">
      <div className= "Honor">
      <h3 id="progress-animated"><i className="fa fa-trophy fa-3x" aria-hidden="true"></i>Honors / Awards / Achievements</h3>
      </div>
        {this.renderHonors()}
      </div>


    );
  }
}

HonorArea.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  honors: PropTypes.array.isRequired,
};
