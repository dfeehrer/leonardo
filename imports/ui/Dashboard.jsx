
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Sites } from '../api/campaigns.js';

import Nav from './Nav.jsx';
import About from './About.jsx';
import CoverLetter from './CoverLetter.jsx';
import Campaign from './Campaign.jsx';
import BlankCampaign from './BlankCampaign.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }


  componentWillMount(){
    Meteor.call('campaigns.checkIP');
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

    return this.props.sites[0].campaigns.map((campaign) => {
 
      return (
        <Campaign
          key={campaign._id}
          campaign={campaign}
        />
      );
    });
  }

  render() {
    return (
      <div className="container-fullwidth">
        
          <Nav/>

          <div className="row">
            <CoverLetter/>
            <BlankCampaign/>
            <ul>
              {/*this.renderCampaigns()*/}
            </ul>
          </div>  
      </div>
    );
  }
}

App.propTypes = {
  sites: PropTypes.array.isRequired
};

export default createContainer(() => {
  Meteor.subscribe('sites');
  return {
    sites: Sites.find({}).fetch()
  };
}, App);