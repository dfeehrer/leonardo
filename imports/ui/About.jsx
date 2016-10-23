import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';
import Nav from './Nav.jsx';
 
export default class About extends Component {


  render() {
     // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS

    return (
      <div>
          <div className="container-fullwidth">
          <div className="main-jumbo about-jumbo">
          <Nav/>
            <img height="200px" className="big-logo" src="hire-hydrant.png"/>
            <h3>Have you ever been sprayed in the face by job offers?</h3>

            <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
          </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-4 about-col">
                <i className="fa fa-laptop fa-5x"></i>
                <h4>Your professional website. Start to finish in under 10 clicks.</h4>
              </div>

              <div className="col-sm-4 about-col">
                <i className="fa fa-crosshairs fa-5x"></i>
                <h4>Uses discrete IP geolocation to automatically redirect recruiters to a personalized space where you can market yourself directly to them.</h4>
              </div>

              <div className="col-sm-4 about-col">
                <i className="fa fa-black-tie fa-5x"></i>
                <h4>Market yourself. Increase your online presence. Increase your odds of landing your dream job by 30%.</h4>
              </div> 

            </div>
            </div>
            </div>
          
    );
  }
}





