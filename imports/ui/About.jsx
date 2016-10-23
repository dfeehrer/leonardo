import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';
import Nav from './Nav.jsx';
 
export default class About extends Component {


  render() {
     // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS

    return (
          <div className="container-fullwidth">
          <div className="main-jumbo about-jumbo">
          <Nav/>
            <img height="200px" src="hire-hydrant.png"/>
            <h3>Engineer. Entrepreneur. Etc.</h3>

            <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
          </div>

            <div className="row">

              <div className="col-sm-4 about-col">
                <i className="fa fa-laptop fa-5x"></i>
                <h3>Your professional website. Start to finish in under 10 clicks.</h3>
              </div>

              <div className="col-sm-4 about-col">
                <i className="fa fa-crosshairs fa-5x"></i>
                <h3>Uses discrete IP geolocation to automatically redirect recruiters to a personalized space where you can market yourself directly to them.</h3>
              </div>

              <div className="col-sm-4 about-col">
                <i className="fa fa-black-tie fa-5x"></i>
                <h3>Market yourself. Increase your online presence. Increase your odds of landing your dream job by 30%.</h3>
              </div> 

            </div>
          </div>
    );
  }
}




