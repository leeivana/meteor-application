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
      user['profile'] = {};
      user.profile['firstname'] = '';
      user.profile['lastname'] = '';
      return user; 
    }
    user['profile'] = {};
    user.profile['firstname'] = user.services.facebook.first_name;
    user.profile['lastname'] = user.services.facebook.last_name;
    user.username = user.services.facebook.name;
    user.emails = [{address: user.services.facebook.email}];
    return user;
  });
  
  Meteor.users.allow({
  	update: function (userId, doc, fields, modifier) {
		console.log('UPDATE USER');
		return true; 
	}
});
});
