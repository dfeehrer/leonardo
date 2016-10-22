import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
 
export default class Nav extends Component {


  render() {
     // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS

    return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span> 
              </button>
              <a className="navbar-brand" id="logo" href="#">Home</a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav">
                <li><AccountsUIWrapper/></li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}





