import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';
import ReactDOM from 'react-dom';
 
//import { Tasks } from '../api/tasks.js';

// Task component - represents a single todo item
export default class BlankCampaign extends Component {


handleSubmit(event){
  event.preventDefault();
const name = ReactDOM.findDOMNode(this.refs.nameInput).value.trim();
const cover = ReactDOM.findDOMNode(this.refs.coverInput).value.trim();

    Meteor.call('campaigns.insert', name, cover);

    // Clear form
    ReactDOM.findDOMNode(this.refs.nameInput).value = '';
    ReactDOM.findDOMNode(this.refs.coverInput).value = '';

}

  render() {
     // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS

    return (

        <div className="panel panel-default campaign-panel blank-campaign-panel">
        <div className="panel-body">
            <form id="campaign-form" onSubmit={this.handleSubmit.bind(this)} >
             <div className="form-group">
              <label for="nameInput">Company </label>
              <input
                type="text"
                className="form-control"
                ref="nameInput"
                placeholder="Company Name"
              />
              </div>

              <div className="form-group">
              <textarea
                type="text"
                className="form-control"
                ref="coverInput"
                placeholder="Enter cover letter here."
              />
              </div>
            </form>
            <button className="btn btn-default" type="submit" form="campaign-form" value="Submit">Add</button>
        </div>
      </div>
       
    );
  }
}