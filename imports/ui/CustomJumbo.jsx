import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

import Nav from './Nav.jsx';
 
export default class Jumbo extends Component {


  render() {
     // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS
    
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



