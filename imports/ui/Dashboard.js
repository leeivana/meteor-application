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
      <button className="btn-default" onClick={this.handleClick}>Logout</button>

      <main id="main-container">
        {/* Page Header */}
        <div className="content bg-image" style={{backgroundColor: '#d2d7d3'}}>
          <div className="clearfix">
            <div className="animated fadeIn">
              <i className="fas fa-user-astronaut fa-4x"></i>
            </div>
            <h1 className="h2 push-5-t animated zoomIn">{Meteor.user().username}</h1>
          </div>
        </div>
        <div className="content content-boxed">
          <div className="row">
              <div className="block">
                <div className="block-header bg-gray-lighter">
                  <ul className="block-options">
                    <li>
                      <button type="button" data-toggle="block-option" data-action="fullscreen_toggle" />
                    </li>
                    <li>
                      <button type="button" data-toggle="block-option" data-action="refresh_toggle" data-action-mode="demo"><i className="si si-refresh" /></button>
                    </li>
                  </ul>
                  <h3 className="block-title"><i className="fas fa-user-circle"></i> Personal Details</h3>
                </div>
                <div className="block-content">
                  <ul className="list list-timeline pull-t">                                        
                    <li>
                      <div className="list-timeline-time">First Name</div>
                      <div className="list-timeline-content">
                        <p className="font-w600">{Meteor.user().profile.firstname}</p>
                      </div>
                    </li>
                    <li>
                      <div className="list-timeline-time">Last Name</div>
                      <div className="list-timeline-content">
                        <p className="font-w600">{Meteor.user().profile.lastname}</p>

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
              {/* END Timeline */}
            </div>
            <div className="col-sm-5 col-lg-4">
            </div>
          </div>
        </div>
        {/* END Page Content */}
      </main>
    </div>


  )
}

export default Dashboard;