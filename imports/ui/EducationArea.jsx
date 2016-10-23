import React, { Component, PropTypes } from 'react';


import Education from './Education.jsx';

// EducationArea component
export default class EducationArea extends Component {


  renderEdus(){
    return this.props.edus.map((edu) => {
          return(
            <Education key={edu.eduName} edu={edu}></Education>

      );
    });
    }
  render() {

    return (

      <div className="bs-docs-section">
      <div className= "education">
      <h3 id="progress-animated"><i className="fa fa-graduation-cap fa-3x" aria-hidden="true"></i>EDUCATION</h3>
      </div>
        {this.renderEdus()}
      </div>


    );
  }
}

EducationArea.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  edus: PropTypes.array.isRequired,
};
