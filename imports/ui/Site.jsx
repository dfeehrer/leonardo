
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Sites } from '../api/campaigns.js';
import { Settings } from '../api/campaigns.js';


import SkillArea from './SkillArea.jsx';
import ExpArea from './ExpArea.jsx';
import EducationArea from './EducationArea.jsx';
import LeadershipArea from './LeadershipArea.jsx';
import HonorArea from './HonorArea.jsx';

import Nav from './Nav.jsx';
import Jumbo from './Jumbo.jsx';
import CustomJumbo from './CustomJumbo.jsx';
import App from './App.jsx';
import About from './About.jsx';
import CoverLetter from './CoverLetter.jsx';
import Campaign from './Campaign.jsx';
import BlankCampaign from './BlankCampaign.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';


// App component - represents the whole app
class Site extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }


    findCover(){
      if(this.props.settings[0]){
        for (let campaign of this.props.settings[0].campaigns){
        if(campaign.concName == Session.get('organization')){
          return campaign.cover;
        }
      }
      return "";
      }else{
        return "";
      }
      
    }

    findCampaign(){
      if(this.props.settings[0]){
        for (let campaign of this.props.settings[0].campaigns){
        if(campaign.concName == Session.get('organization')){
          return campaign
        }
      }
      return "";
      }else{
        return "";
      }
      
    }

  render() {

var ex_skill1 = {
      skillName: "React JS",
      percentage: "45",
      color: "progress-bar-info"
    }
    var ex_skill2 = {
      skillName: "MongoDB",
      percentage: "60",
      color: "progress-bar-warning"
    }
    var ex_skill3 = {
      skillName: "Meteor JS",
      percentage: "70",
      color: "progress-bar-success"
    }
    var ex_skill4 = {
      skillName: "Bootstrap",
      percentage: "90",
      color: "progress-bar-danger"
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
      eduDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "wpi_seal.jpg"
    }

    var ex_edu2 = {
      eduName: "Westford Academy",
      eduDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "wa_seal.png"
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

    var jumbo;
    if(Session.get('organization')){
      jumbo = <CustomJumbo campaign={this.findCampaign()} />;
    }else{
      jumbo = <Jumbo/>;
    }
    

    return (
      <div>
      
      {jumbo}
      <CoverLetter coverText={this.findCover()} />
      <div className="container">
      <section id="education">
      <EducationArea edus={ex_eduArea} ></EducationArea>
      </section>
      <SkillArea skills={ex_skillArea} id = "skills"></SkillArea>
      <ExpArea exps={ex_expArea} id = "experience"></ExpArea>
      <LeadershipArea leaderships={ex_leadershipArea} ></LeadershipArea>
      <HonorArea honors={ex_honorArea} ></HonorArea>
      <div className="bottom">
        <button className="btn btn-primary btn-lg">Hire Me</button>
      </div>
      </div>
      </div>
      
    );
  }
}

Site.propTypes = {
  settings: PropTypes.array.isRequired
};

export default createContainer(() => {
  Meteor.subscribe('campaigns');
  return {
    settings: Settings.find({}).fetch()
  };
}, Site);