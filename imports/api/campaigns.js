import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Tasks = new Mongo.Collection('tasks');
export const Settings = new Mongo.Collection('settings');
export const Addresses = new Mongo.Collection('addresses');
export const Sites = new Mongo.Collection('sites');


 
if (Meteor.isServer) {
  // This code only runs on the server
   // Only publish tasks that are public or belong to the current user
  Meteor.publish('settings', function settingsPublication() {
    return Settings.find({userId: this.userId});
  });


  Meteor.publish('sites', function sitesPublication(fullname) {
    return Sites.find({fullname: fullname});
  });
}

Meteor.methods({
  
  'campaigns.insert'(name, cover) {
    if(Meteor.isServer){
    check(name, String);
    check(cover, String);

  
    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    var newCampaign = {
      id: Random.id(6), 
      userId: this.userId,
      name: name,
      cover: cover,
      timestamp: new Date(),
       hits: 0
     };

    Settings.update({userId: this.userId}, {$push: {campaigns: newCampaign}}, {upsert: true});
  }
  },

  'campaigns.delete'(id) {

 
    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Settings.update({userId: this.userId}, {$pull: {campaigns: {id: id}}});
  },

  'campaigns.checkIP'(id) {
    if(Meteor.isServer){
    // Make sure the user is logged in before inserting a task
 
    clientIP = this.connection.clientAddress;
    console.log("client IP: " + clientIP);
    this.unblock();
    try {
      var result = HTTP.call( 'GET', "http://ip-api.com/json/131.107.0.89", {});
      var org = result.data.org;
      //return true;
      //console.log("org: " + org );
      var activeCampaigns = Settings.findOne({}).campaigns;
        for (let campaign of activeCampaigns){
          console.log("trying to match : " + campaign.name + " with : " + org);
          
          //console.log("org: " + org);

          if(org.toUpperCase().includes(campaign.name.toUpperCase())){
            console.log("contains");
            //console.log( org );
            console.log("passing this to client: " + campaign.name.replace(/\s+/g, ''));
            return campaign.name.replace(/\s+/g, '');
          }
          else{
            //console.log("doesn't contain");
            //console.log(org);
          }

        }
        return "/";

    } catch (e) {
      // Got a network error, time-out or HTTP error in the 400 or 500 range.
      return "/";
    }
    /*
    HTTP.call( 'GET', "http://ip-api.com/json/", {}, function( error, response ) {
      if ( error ) {
        console.log( error );
      } else {
        var org = response.data.org;
        if(org){
          //Addresses.insert({IP: clientIP, org: org});
          //Addresses.insert{}
        }else{
          //Addresses.insert({IP: clientIP, org: ""});
        }
        */
        
       // return null;
        //console.log(response);
        

        
      //}
    //});
  }
  },

});