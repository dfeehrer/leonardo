import React, { Component, PropTypes } from 'react';

import Exp from './Exp.jsx';

// ExpArea component
export default class ExpArea extends Component {


  renderExps(){
    return this.props.exps.map((exp) => {
          return(
            <Exp key={exp.expName} exp={exp}></Exp>

      );
    });
    }
  render() {

    return (

      <div className="bs-docs-section">
{/************ Progress Bars For Exps **************/}
      <div className="experience">
      <h3 id="progress-animated"><i className="fa fa-puzzle-piece fa-3x" aria-hidden="true"></i>EXPERIENCE</h3>
      </div>
        {this.renderExps()}
      </div>


    );
  }
}

ExpArea.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  exps: PropTypes.array.isRequired,
};
