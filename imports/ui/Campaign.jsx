import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';
 
//import { Tasks } from '../api/tasks.js';

// Task component - represents a single todo item
export default class Campaign extends Component {

deleteThisCampaign(){
  Meteor.call('campaigns.delete', this.props.campaign.id)
}

  render() {
  	 // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS

    return (
       <li>
        <div className="panel panel-default campaign-panel">
        <div className="panel-body">
          <h1>{this.props.campaign.name}</h1>
        <p>{this.props.campaign.cover}</p>
        <button className="delete btn btn-primary" onClick={this.deleteThisCampaign.bind(this)}>
          Delete
        </button>
        </div>
      </div>
      </li>
    );
  }
}

Campaign.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  campaign: PropTypes.object.isRequired,
};
