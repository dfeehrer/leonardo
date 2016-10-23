import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

import Nav from './Nav.jsx';
 
export default class CustomJumbo extends Component {


  render() {
     // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS
    
    return (
      <div className="container-fullwidth">
          <div className="main-jumbo personal-jumbo">
            <Nav/>
            <img className="img-circle" width="100px" src="pro_pic.jpg"/>
            <h1>Hi {this.props.campaign.name}, I'm Derek Feehrer and I want to work for you.</h1>
            <p><a className="btn btn-primary btn-lg jumbo-btn" href="#" role="button">Get to know me.</a></p>
          </div>
      </div>
    );
  }
}
CustomJumbo.propTypes = {
  campaign: PropTypes.object.isRequired
};



