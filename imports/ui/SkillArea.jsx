import React, { Component, PropTypes } from 'react';

import Skill from './Skill.jsx';

// skillArea component
export default class SkillArea extends Component {


  renderSkills(){
    return this.props.skills.map((skill) => {
          return(
            <Skill key={skill.skillName} skill={skill}></Skill>
      );
    });
    }
  render() {

    return (

      <div className="bs-docs-section">
{/************ Progress Bars For Skills **************/}
      <div className = "skill">
      <h3 id="progress-animated">SKILLS<i className="fa fa-laptop fa-3x" aria-hidden="true"></i></h3>
      </div>
        {this.renderSkills()}
      </div>


    );
  }
}

SkillArea.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  skills: PropTypes.array.isRequired,
};
