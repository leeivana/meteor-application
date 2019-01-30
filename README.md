Metor Team-Building Application 
=================
This document contains general information regarding this application. 

# Table of Contents
* [How does the application work?](#how-does-the-application-work)
  * [User Details](#user-details)
  * [User Teams](#user-teams)
  * [All Teams](#all-teams)
* [Data Structure](#data-structure)
* [Difficulties](#difficulties)
* [Future Implementations](#future-implementations)
  
## How does the application work?
This application is made with MeteorJS, ReactJS and MongoDB as the database. This application is a single-page application made for the purpose of team building. 
In order to use the application, the user must have an account. There are two methods to create an account: 
1. Registering through the registration page
   - When creating an account, the user is prompted to enter a username, email address, and password
2. Utilizing an existing Facebook account (O'Auth)
   - When registering through a 3rd party application (e.x. Facebook), the user will be redirected an will be asked for permission to provide the data present in their account (first name, last name, email address)

Once a user creates an account utilizing the two beforementioned methods, when accessing the application again, the user can use the login page and enter the previously implemented username and password. 

Inside the application, which is created as a single-page application, there are three main components: user details, user teams and all teams. 

### User Details
The `user details` component is the first component on the screen and shows the user's first name, last name, and email address present in the database. By clicking the `Edit Personal Details` button on the top-right corner, the user will be able to change their personal information within the database (first name, last name, email address). The user profile is updated when the `Submit` button is clicked. 

INSERT GIF? 

*Users who register through the registration page will not have a first, last name set up, but are able to input this information in the edit page*

### User Teams
The `user teams` component is the second component on the screen. This component shows all the teams that the user has created and/or the user is part of. The team data is presented on the webpage where the team name is on the left and a list of members is on the right. By clicking the `Create a Team` button on the top-right corner of the component, the user is able to create their own team. This component is composed of a form that contains two types of input: Team Name and Members. Through the search bar from Members, the user is able to search through all users in the database, by username, and are able to add them to their team. When the user completes the form, the team data is inserted into the database upon hitting the `Create Team` button. 

### All Teams
The `all teams` component is the last major component in the applciation. This component follows the same display structure as the `user teams` component. However, rather than only displaying teams associated to the current user, the component renders all the teams in the database. 

## Data Structure
There are two types of data for the application: user data and team data.  

### User Data
The user data follows the same structure as all user accounts created with the MeteorJS API, which includes an id, username and array of email addresses. However, in order to include a first and last name, on account creation, a profile object is created upon account creation. 

```
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
```
As first and last name information is available when using a third party service for authentication (i.e. Facebook), the first and last name key value pairs are set to the information provided. However, as account creation via the registration form does not offer fields to input a user's first and last name, it is set to an empty string. 

### Team Data
Team data consists of 4 properties: teamName (string), an array of user objects for teamMembers, a creation date and the id of the signed in user, which is set as the owner. 

```
Teams.insert({
      teamName,
      teamMembers,
      createdAt: new Date(),
      owner: Meteor.userId(),
})
```
## Difficulties
While developing this application, there were a couple things I found challenging. 
1. Learning MeteorJS 
    - 

## Future Implementations

