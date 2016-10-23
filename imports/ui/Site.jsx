
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Sites } from '../api/campaigns.js';


import SkillArea from './SkillArea.jsx';
import ExpArea from './ExpArea.jsx';
import EducationArea from './EducationArea.jsx';
import LeadershipArea from './LeadershipArea.jsx';
import HonorArea from './HonorArea.jsx';

import Nav from './Nav.jsx';
import App from './App.jsx';
import About from './About.jsx';
import CoverLetter from './CoverLetter.jsx';
import Campaign from './Campaign.jsx';
import BlankCampaign from './BlankCampaign.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';


// App component - represents the whole app
export default class Site extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
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

var ex_skill1 = {
      skillName: "REact",
      percentage: "30"
    }
    var ex_skill2 = {
      skillName: "JS",
      percentage: "50"
    }
    var ex_skill3 = {
      skillName: "METEOR",
      percentage: "100"
    }
    var ex_skill4 = {
      skillName: "python",
      percentage: "95"
    }
    var ex_skillArea =  [ex_skill1,ex_skill2,ex_skill3,ex_skill4]

    var ex_exp1 = {
      expName: "Internship at HubSpot",
      expText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }

    var ex_exp2 = {
      expName: "Internship at Microsoft",
      expText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }

    var ex_exp3 = {
      expName: "Internship at Bloomberg",
      expText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
    var ex_expArea = [ex_exp1,ex_exp2,ex_exp3]

    var ex_leadership1 = {
      leadershipName: "Worcester Polytechnic Institute",
      leadershipDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }

    var ex_leadership2 = {
      leadershipName: "Westford Academy",
      leadershipDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
    var ex_leadershipArea = [ex_leadership1,ex_leadership2]
    var ex_edu1 = {
      eduName: "Worcester Polytechnic Institute",
      eduDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }

    var ex_edu2 = {
      eduName: "Westford Academy",
      eduDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
    var ex_eduArea = [ex_edu1,ex_edu2]

    var ex_honor1 = {
      honorName: "Something Scholar",
      honorDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }

    var ex_honor2 = {
      honorName: "Dean's List",
      honorDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
    var ex_honorArea = [ex_honor1,ex_honor2]


    return (
      <div>
      <div className="container-fullwidth">
        
          <div className="main-jumbo personal-jumbo">
          <Nav/>
            <h1>Derek Feehrer</h1>
            <h3>Engineer. Entrepreneur. Etc.</h3>
            <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
          </div>
      </div>
      <div className="container">
      <EducationArea edus={ex_eduArea} ></EducationArea>
      <SkillArea skills={ex_skillArea} id = "skills"></SkillArea>
      <ExpArea exps={ex_expArea} id = "experience"></ExpArea>
      <LeadershipArea leaderships={ex_leadershipArea} ></LeadershipArea>
      <HonorArea honors={ex_honorArea} ></HonorArea>
      </div>
      </div>
      
    );
  }
}
/*
Site.propTypes = {
  sites: PropTypes.array.isRequired,
};

export default createContainer(() => {
  Meteor.subscribe('sites');
  return {
    sites: Sites.find({}).fetch()
  };
}, Site);*/