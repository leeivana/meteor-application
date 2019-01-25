import React from 'react';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';

const Dashboard = () => {
  handleClick = (event) => {
    Meteor.logout();
    FlowRouter.go('Home');
  }
  return(
    <div>
      Dashboard
      <p>LOGGED IN AS: {Meteor.user().username}</p>
      <button className="btn-default" onClick={this.handleClick}>Logout</button>
    </div>
  )
}

export default Dashboard;