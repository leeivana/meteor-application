import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Teams = new Mongo.Collection('teams');

// Meteor.methods({
//   'find_by_username': function(username){
//     let user = Accounts.findUserByUsername(username);
//     return user;
//   } 
// });
Teams.allow({
  insert: function(userId, doc){
    //allow only if userId exists.
    return !!userId;
  }
});