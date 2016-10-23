import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';
 
export default class CoverLetter extends Component {


  render() {
     // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS

    return (
      <div className="panel panel-default cover-panel">
        <div className="panel-body">
          {this.props.coverText}
        </div>
      </div>
      
    );
  }
}

CoverLetter.propTypes = {
  coverText: PropTypes.string.isRequired
};




