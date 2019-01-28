import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';

import PersonalDetailScreen from './PersonalDetailScreen';
import EditScreen from './EditScreen'; 
import TeamScreen from './TeamScreen';
import TeamEditScreen from './TeamEditScreen';
class Dashboard extends Component {
  constructor(){
    super();
    this.state = {
      screen: '',
      teamScreen: '',
    }
  }
  handleClick = (event) => {
    Meteor.logout();
    FlowRouter.go('Home');
  }

  navigateToPage = (type, screen) => {
    this.setState({[type]: screen});
  }
  render(){
    return(
      <div>
        <main id="main-container">
        <button style={{float: 'right'}} className="btn btn-default" onClick={this.handleClick}>Logout</button>

          <div className="content bg-image" style={{backgroundColor: '#d2d7d3'}}>
            <div className="clearfix">
              <div className="animated fadeIn">
                <i className="fas fa-user-astronaut fa-4x"></i>
              </div>
              <h1 className="h2 push-5-t animated zoomIn">{Meteor.user().username}</h1>
            </div>
          </div>
          {(!this.state.screen || this.state.screen === 'HomeScreen') ? 
            <div>
              <PersonalDetailScreen 
              navigateToPage={this.navigateToPage}
              />
              {this.state.teamScreen === 'display' || !this.state.teamScreen ? 
              <TeamScreen 
              navigateToPage={this.navigateToPage}
              />
              : 
              <TeamEditScreen 
              navigateToPage={this.navigateToPage}
              />
              }
            </div>
            : (this.state.screen === 'EditScreen') ? 
            <div>
                <EditScreen 
                navigateToPage={this.navigateToPage}
                />
                {this.state.teamScreen === 'display' || !this.state.teamScreen ? 
                <TeamScreen 
                navigateToPage={this.navigateToPage}
                />
                :
                <TeamEditScreen 
                navigateToPage={this.navigateToPage}
                />
                }
            </div>
            : 
            <p>Page Not Found</p>
          }
        </main>
      </div>
    )
  }
}

export default Dashboard;