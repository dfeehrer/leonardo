import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Tasks = new Mongo.Collection('tasks');


export const Campaigns = new Mongo.Collection('campaigns');
 
if (Meteor.isServer) {
  // This code only runs on the server
   // Only publish tasks that are public or belong to the current user
  Meteor.publish('campaigns', function campaignsPublication() {
    return Campaigns.find({});
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

    Campaigns.insert({id: Random.id(6), name: name, cover: cover, timestamp: new Date()});
  }
  },

  'campaigns.delete'(id) {

 
    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Campaigns.remove({id: id});
  },

});