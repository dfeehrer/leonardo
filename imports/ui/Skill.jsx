import React, { Component, PropTypes } from 'react';

// skill component - represents a single skill item
export default class Skill extends Component {
  render() {
var skillStyle = {
         width:this.props.skill.percentage + "%"
       };

    return (

        <div className="bs-component">
          <div className="progress progress-striped active">
            <div className="progress-bar progress-bar-danger" style={skillStyle}>{this.props.skill.skillName}</div>
          </div>
        </div>
        
    );
  }
}

Skill.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  skill: PropTypes.object.isRequired,
};
