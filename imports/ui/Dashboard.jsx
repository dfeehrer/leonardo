
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Settings } from '../api/campaigns.js';

import Nav from './Nav.jsx';
import About from './About.jsx';
import CoverLetter from './CoverLetter.jsx';
import Campaign from './Campaign.jsx';
import BlankCampaign from './BlankCampaign.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

// App component - represents the whole app
class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }


  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Meteor.call('tasks.insert', text);

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  renderCampaigns() {
    console.log(this.props.settings);
    if(this.props.settings[0]){
    return this.props.settings[0].campaigns.map((campaign) => {
 
      return (
        <Campaign
          key={campaign.id}
          campaign={campaign}
        />
      );
    });
    }else{
      return null;
    }
  }

  render() {
    return (
      <div className="container-fullwidth">
        
          <Nav/>

          <div className="row campaign-holder">
          <div className="col-sm-12">
            <h3>Add New Campaigns</h3>
            <BlankCampaign/>
            </div>  
            </div> 
            <h3>Existing Campaigns</h3>
            <ul>
              {this.renderCampaigns()}
            </ul>
      </div>
    );
  }
}

Dashboard.propTypes = {
  settings: PropTypes.array.isRequired
};

export default createContainer(() => {
  Meteor.subscribe('settings');
  return {
    settings: Settings.find({}).fetch()
  };
}, Dashboard);