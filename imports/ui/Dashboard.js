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

      <main id="main-container">
        {/* Page Header */}
        <div className="content bg-image" style={{backgroundImage: 'url("../ui/assets/img/photos/photo8@2x.jpg")'}}>
          <div className="push-50-t push-15 clearfix">
            <div className="push-15-r pull-left animated fadeIn">
              <i className="fas fa-user-astronaut fa-4x"></i>
            </div>
            <h1 className="h2 text-white push-5-t animated zoomIn">{Meteor.user().username}</h1>
          </div>
        </div>
        {/* END Page Header */}
        {/* Page Content */}
        <div className="content content-boxed">
          <div className="row">
            <div className="col-sm-7 col-lg-8">
              {/* Timeline */}
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
                  <h3 className="block-title"><i className="fa fa-newspaper-o" /> Personal Details</h3>
                </div>
                <div className="block-content">
                  <ul className="list list-timeline pull-t">
                    {/* Facebook Notification */}
                    <li>
                      <div className="list-timeline-time">3 hrs ago</div>
                      <i className="fa fa-facebook list-timeline-icon bg-default" />
                      <div className="list-timeline-content">
                        <p className="font-w600">+ 290 Page Likes</p>
                        <p className="font-s13">This is great, keep it up!</p>
                      </div>
                    </li>
                    {/* END Facebook Notification */}
                    {/* Generic Notification */}
                    <li>
                      <div className="list-timeline-time">4 hrs ago</div>
                      <i className="fa fa-briefcase list-timeline-icon bg-modern" />
                      <div className="list-timeline-content">
                        <p className="font-w600">3 New Products were added!</p>
                        <div className="push-10-t">
                          <a className="item item-rounded push-10-r bg-info" data-toggle="tooltip" title="MyPanel" href="javascript:void(0)">
                            <i className="si si-rocket text-white-op" />
                          </a>
                          <a className="item item-rounded push-10-r bg-amethyst" data-toggle="tooltip" title="Project Time" href="javascript:void(0)">
                            <i className="si si-calendar text-white-op" />
                          </a>
                          <a className="item item-rounded push-10-r bg-city" data-toggle="tooltip" title="iDashboard" href="javascript:void(0)">
                            <i className="si si-speedometer text-white-op" />
                          </a>
                        </div>
                      </div>
                    </li>
                    {/* END Generic Notification */}
                    {/* System Notification */}
                    <li>
                      <div className="list-timeline-time">1 day ago</div>
                      <i className="fa fa-database list-timeline-icon bg-smooth" />
                      <div className="list-timeline-content">
                        <p className="font-w600">Database backup completed!</p>
                        <p className="font-s13">Download the <a href="javascript:void(0)">latest backup</a>.</p>
                      </div>
                    </li>
                    {/* END System Notification */}
                    
                    {/* System Notification */}
                    <li>
                      <div className="list-timeline-time">1 week ago</div>
                      <i className="fa fa-cog list-timeline-icon bg-primary-dark" />
                      <div className="list-timeline-content">
                        <p className="font-w600">System updated to v2.02</p>
                        <p className="font-s13">Check the complete changelog at the <a href="javascript:void(0)">activity page</a>.</p>
                      </div>
                    </li>
                    {/* END System Notification */}
                    {/* Generic Notification */}
                    <li>
                      <div className="list-timeline-time">2 weeks ago</div>
                      <i className="fa fa-briefcase list-timeline-icon bg-modern" />
                      <div className="list-timeline-content">
                        <p className="font-w600">1 New Product was added!</p>
                        <div className="push-10-t">
                          <a className="item item-rounded push-10-r bg-modern" data-toggle="tooltip" title="eSettings" href="javascript:void(0)">
                            <i className="si si-settings text-white-op" />
                          </a>
                        </div>
                      </div>
                    </li>
                    {/* END Generic Notification */}
                    {/* System Notification */}
                    <li>
                      <div className="list-timeline-time">2 months ago</div>
                      <i className="fa fa-cog list-timeline-icon bg-primary-dark" />
                      <div className="list-timeline-content">
                        <p className="font-w600">System updated to v2.01</p>
                        <p className="font-s13">Check the complete changelog at the <a href="javascript:void(0)">activity page</a>.</p>
                      </div>
                    </li>
                    {/* END System Notification */}
                  </ul>
                </div>
              </div>
              {/* END Timeline */}
            </div>
            <div className="col-sm-5 col-lg-4">
              {/* Products */}
              <div className="block">
                <div className="block-header bg-gray-lighter">
                  <ul className="block-options">
                    <li>
                      <button type="button" data-toggle="block-option" data-action="refresh_toggle" data-action-mode="demo"><i className="si si-refresh" /></button>
                    </li>
                  </ul>
                  <h3 className="block-title"><i className="fa fa-fw fa-briefcase" /> Products</h3>
                </div>
                <div className="block-content">
                  <ul className="list list-simple list-li-clearfix">
                    <li>
                      <a className="item item-rounded pull-left push-10-r bg-info" href="javascript:void(0)">
                        <i className="si si-rocket text-white-op" />
                      </a>
                      <h5 className="push-10-t">MyPanel</h5>
                      <div className="font-s13">Responsive App Template</div>
                    </li>
                    <li>
                      <a className="item item-rounded pull-left push-10-r bg-amethyst" href="javascript:void(0)">
                        <i className="si si-calendar text-white-op" />
                      </a>
                      <h5 className="push-10-t">Project Time</h5>
                      <div className="font-s13">Web application</div>
                    </li>
                    <li>
                      <a className="item item-rounded pull-left push-10-r bg-danger" href="javascript:void(0)">
                        <i className="si si-speedometer text-white-op" />
                      </a>
                      <h5 className="push-10-t">iDashboard</h5>
                      <div className="font-s13">Bootstrap Admin Template</div>
                    </li>
                  </ul>
                  <div className="text-center push">
                    <small><a href="javascript:void(0)">View More..</a></small>
                  </div>
                </div>
              </div>
              {/* END Products */}
            </div>
          </div>
        </div>
        {/* END Page Content */}
      </main>
    </div>


  )
}

export default Dashboard;