import { Meteor } from 'meteor/meteor';
import config from '../config';

Meteor.startup(() => {
  ServiceConfiguration.configurations.remove({
    service: "facebook"
});

ServiceConfiguration.configurations.insert({
    service: "facebook",
    appId: config.APP_ID,
    secret: config.APP_SECRET,
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
