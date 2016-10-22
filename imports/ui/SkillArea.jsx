import React, { Component, PropTypes } from 'react';

import Skill from './Skill.jsx';

// skillAre component
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
      <div>
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
