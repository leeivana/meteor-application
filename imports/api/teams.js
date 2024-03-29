import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Teams = new Mongo.Collection('teams');

if (Meteor.isServer) {
  Meteor.publish('teams',  teamsPublication = () => {
    return Teams.find();
  });
  Meteor.publish('allUsers', userPublication = () => {
    return Meteor.users.find({});
  })
}

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
    })
  }
});


