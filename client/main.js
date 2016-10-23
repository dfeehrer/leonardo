import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import App from '../imports/ui/App.jsx';

import About from '../imports/ui/About.jsx';
import Dashboard from '../imports/ui/Dashboard.jsx';
import Site from '../imports/ui/Site.jsx';
 
Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});

FlowRouter.route( '/', {
  name: 'about',
  action() {
    ReactLayout.render( App, { routeTarget: <About /> } );
  }
});

FlowRouter.route( '/derekfeehrer', {
  name: 'site',
  action() {
    ReactLayout.render( App, { routeTarget: <Site /> } );
  }
});


FlowRouter.route( '/derekfeehrer/dashboard', {
  name: 'dashboard',
  action() {
    ReactLayout.render( App, { routeTarget: <Dashboard/> } );
  }
});
