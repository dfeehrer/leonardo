import React, { Component, PropTypes } from 'react';

// skill component - represents a single skill item
export default class Skill extends Component {
  render() {
    var ex_skill1 = {
      skillName: "REact",
      percentage: "30"
    }
    var ex_skill2 = {
      skillName: "JS",
      percentage: "50"
    }
    var ex_skill3 = {
      skillName: "METEOR",
      percentage: "100"
    }
    var ex_skill4 = {
      skillName: "python",
      percentage: "95"
    }
    var ex_skillArea =  [ex_skill1,ex_skill2,ex_skill3,ex_skill4]

var skillStyle = {
         width:this.props.skill.percentage + "%"
       };

       var classString = "progress-bar " + this.props.skill.color;

    return (

        <div className="bs-component">
          <div className="progress progress-striped active">
            <div className={classString} style={skillStyle}>{this.props.skill.skillName}</div>
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
