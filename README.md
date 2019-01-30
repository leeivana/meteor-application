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
This application is made with MeteorJS, ReactJS and MongoDB as the database. This application is made for the purpose of team building. 
In order to use the application, the user must have an account. There are two methods to create an account: 
1. Registering through the registration page
   - When creating an account, the user is prompted to enter a username, email address, and password
2. Utilizing an existing Facebook account (O'Auth)
   - When registering through a 3rd party application (e.x. Facebook), the user will be redirected an will be asked for permission to provide the data present in their account (first name, last name, email address)

Once a user creates an account utilizing the two beforementioned methods, when accessing the application again, the user can use the login page and enter the previously implemented username and password. 

Inside the application, which is created as a single-page application, there are three main components: user details, user teams and all teams. 

### User Details
The user details component is the first component on the screen and shows the user's first name, last name, and email address present in the database. By clicking the `Edit Personal Details` button on the top-right corner, the user will be able to change their personal information within the database (first name, last name, email address). The user profile is updated when the `Submit` button is clicked. 

INSERT GIF? 

*Users who register through the registration page will not have a first, last name set up, but are able to input this information in the edit page*

### User Teams
The user teams component is the second component on the screen. This component shows all the teams that the user has created and/or the user is part of. The team data is presented on the webpage where the team name is on the left and a list of members is on the right. By clicking the `Create a Team` button on the top-right corner of the component, the user is able to create their own team. This component is composed of a form that takes in two types of input: Team Name and Members. 



### All Teams

## Data Structure
Two sets of data - user data & team data 
user data -> username, email address, id, 

## Difficulties

## Future Implementations

