import React, { Component, PropTypes } from 'react';


import Leadership from './Leadership.jsx';

// LeadershipArea component
export default class LeadershipArea extends Component {


  renderLeaderships(){
    return this.props.leaderships.map((leadership) => {
          return(
            <Leadership key={leadership.leadershipName} leadership={leadership}></Leadership>

      );
    });
    }
  render() {

    return (

      <div className="bs-docs-section">
      <div className= "leadership">
      <h3 id="progress-animated"><i className="fa fa-arrow-up fa-3x" aria-hidden="true"></i>Leadership</h3>
      </div>
        {this.renderLeaderships()}
      </div>


    );
  }
}

LeadershipArea.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  leaderships: PropTypes.array.isRequired,
};
