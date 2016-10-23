import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Tasks = new Mongo.Collection('tasks');


export const Campaigns = new Mongo.Collection('campaigns');
export const Addresses = new Mongo.Collection('addresses');
export const Sites = new Mongo.Collection('sites');


 
if (Meteor.isServer) {
  // This code only runs on the server
   // Only publish tasks that are public or belong to the current user
  Meteor.publish('campaigns', function campaignsPublication() {
    return Campaigns.find({});
  });


  Meteor.publish('sites', function userDataPublication() {
    return Sites.find({userId: this.userId});
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

    var newCampaign = {id: Random.id(6), name: name, cover: cover, timestamp: new Date(), hits: 0};

    Meteor.users.update({userId: this.userId}, {$set: {'campaigns.-1': newCampaign}});
    
  }
  },

  'campaigns.delete'(id) {

 
    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Meteor.users.update({userId: this.userId}, {$pull: {campaigns: {id: id}}});
    Campaigns.remove({id: id});
  },

  'campaigns.checkIP'(id) {
    if(Meteor.isServer){
    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }
 
    clientIP = this.connection.clientAddress;
    console.log("client IP: " + clientIP);

    HTTP.call( 'GET', "http://ip-api.com/json/", {}, function( error, response ) {
      if ( error ) {
        console.log( error );
      } else {
        var org = response.data.org;
        if(org){
          Addresses.insert({IP: clientIP, org: org});
        }else{
          Addresses.insert({IP: clientIP, org: ""});
        }
        
        //console.log(response);
        console.log("org: " + org);
        if(org.toUpperCase().includes("harvard".toUpperCase())){
          console.log("contains");
          console.log( org );
        }
        else{
          console.log("doesn't contain");
          console.log(org);
        }
      }
    });
  }
  },

});