
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Sites } from '../api/campaigns.js';
import { Settings } from '../api/campaigns.js';

import Nav from './Nav.jsx';
import About from './About.jsx';
import Dashboard from './Dashboard.jsx';
import CoverLetter from './CoverLetter.jsx';
import Campaign from './Campaign.jsx';
import Site from './Site.jsx';
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
    if(!(Meteor.userId() || FlowRouter.current().route.path.length < 2)){
      var organization = Meteor.call('campaigns.checkIP', function(err, data) {
          if (err)
          console.log(err);

          console.log("Data: ");
          console.log(data);
          if(data){
            console.log("Data: ");
            console.log(data);
            Session.set('organization', data);
            console.log("Session var: " + Session.get('organization'));

            if(data == "/"){
              FlowRouter.go("/derekfeehrer");
            }else{
            FlowRouter.route( '/derekfeehrer/' + Session.get('organization'), {
                name: Session.get('organization'),
                action() {
                  ReactLayout.render( App, { routeTarget: <Site /> } );
                }
              });
            FlowRouter.go("/derekfeehrer/" + Session.get('organization'));
          }
          }
          
        });
    }
    

  }

  render() {
    return (
      <div>

          {this.props.routeTarget}

      </div>
    );
  }
}
/*
App.propTypes = {
  settings: PropTypes.object.isRequired
};*/

export default createContainer(() => {
  //Meteor.subscribe('settings');
  return {
    
  };
}, App);