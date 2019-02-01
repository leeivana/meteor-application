import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';

const PersonalDetailScreen = (props) => {
  return(
    <div className="content content-boxed">
    <div className="row">
        <div className="block">
          <div className="block-header bg-gray-lighter">
            <ul className="block-options">
              <li>
                <button className="change-content" onClick={() => {props.navigateToPage('screen', 'EditScreen')}} type="button"><i className="far fa-edit"></i> EDIT PERSONAL DETAILS</button>
              </li>
            </ul>
            <h3 className="block-title"><i className="fas fa-user-circle"></i> Personal Details</h3>
          </div>
          <div className="block-content">
            <ul className="list list-timeline pull-t">                                        
              <li>
                <div className="list-timeline-time">First Name</div>
                <div className="list-timeline-content">
                {Meteor.user().profile.firstname ? 
                  <p className="font-w600">{Meteor.user().profile.firstname}</p>
                  :
                  <p className="font-w600">Not inputted yet</p>
                }
                </div>
              </li>
              <li>
                <div className="list-timeline-time">Last Name</div>
                <div className="list-timeline-content">
                {Meteor.user().profile.lastname ? 
                  <p className="font-w600">{Meteor.user().profile.lastname}</p>
                  :
                  <p className="font-w600">Not inputted yet</p>
                }
                </div>
              </li>
              <li>
                <div className="list-timeline-time">Email Address</div>
                <div className="list-timeline-content">
                  <p className="font-w600">{Meteor.user().emails[0].address}</p>
                </div>
              </li>
            </ul>
        </div>
      </div>
      <div className="col-sm-5 col-lg-4">
      </div>
    </div>
  </div>
  )
}

export default PersonalDetailScreen;