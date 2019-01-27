import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';

import MainScreen from './MainScreen';
import EditScreen from './EditScreen'; 
class Dashboard extends Component {
  constructor(){
    super();
    this.state = {
      screen: '',
    }
  }
  handleClick = (event) => {
    Meteor.logout();
    FlowRouter.go('Home');
  }

  navigateToPage = (screen) => {
    this.setState({screen});
  }
  render(){
    return(
      <div>
        <button className="btn-default" onClick={this.handleClick}>Logout</button>
        <main id="main-container">
          <div className="content bg-image" style={{backgroundColor: '#d2d7d3'}}>
            <div className="clearfix">
              <div className="animated fadeIn">
                <i className="fas fa-user-astronaut fa-4x"></i>
              </div>
              <h1 className="h2 push-5-t animated zoomIn">{Meteor.user().username}</h1>
            </div>
          </div>
          {(!this.state.screen || this.state.screen === 'HomeScreen') ? 
            <MainScreen 
            navigateToPage={this.navigateToPage}
            />
            : (this.state.screen === 'EditScreen') ? 
                <EditScreen 
                navigateToPage={this.navigateToPage}
                />
            : 
            <p>Page Not Found</p>
          }
        </main>
      </div>
    )
  }
}

export default Dashboard;