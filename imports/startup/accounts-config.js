// import { Accounts } from 'meteor/accounts-base';

// // Accounts.config({
// //   passwordSignupFields: 'USERNAME_ONLY'
// // });

// Accounts.validateNewUser((user) => {
//   new SimpleSchema({
//     _id: { type: String },
//     emails: { type: Array },
//     'emails.$': { type: Object },
//     'emails.$.address': { type: String },
//     'emails.$.verified': { type: Boolean },
//     createdAt: { type: Date },
//     services: { type: Object, blackbox: true }
//   }).validate(user);

//   // Return true to allow user creation to proceed
//   return true;
// });