import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  ServiceConfiguration.configurations.remove({
    service: "facebook"
});

ServiceConfiguration.configurations.insert({
    service: "facebook",
    appId: '2279994252077433',
    secret: '47e04a33c07bea849377623553a96ff2'
});
Accounts.onCreateUser(function (options, user) {

  if (!user.services.facebook) {
      return user;
  }
  user.username = user.services.facebook.name;
  user.emails = [{address: user.services.facebook.email}];

  return user;
});
});
