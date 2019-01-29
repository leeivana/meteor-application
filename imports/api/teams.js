import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Teams = new Mongo.Collection('teams');

Meteor.methods({
  'create.team'(teamName, teamMembers) {
    check(teamName, String);
    check(teamMembers, Array);
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    Teams.insert({
      teamName,
      teamMembers,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
    })
  }
});
// Teams.allow({
//   insert: function(userId, doc){
//     //allow only if userId exists.
//     return !!userId;
//   }
// });


