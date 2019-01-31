import { Meteor } from 'meteor/meteor';
// import config from '../config'; 
import '../imports/api/teams';

Meteor.startup(() => {
  ServiceConfiguration.configurations.remove({
    service: "facebook"
  });

  ServiceConfiguration.configurations.insert({
      service: "facebook",
      appId: process.env.APP_ID,
      secret: process.env.APP_SECRET,
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
