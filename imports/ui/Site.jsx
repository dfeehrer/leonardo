
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


  render() {
    return (
      <div className="container-fullwidth">
        
          <div className="main-jumbo personal-jumbo">
          <Nav/>
            <h1>Derek Feehrer</h1>
            <h3>Engineer. Entrepreneur. Etc.</h3>
            <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
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