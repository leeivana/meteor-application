import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';

import PersonalDetailScreen from './PersonalDetailScreen';
import EditScreen from './EditScreen'; 
import TeamScreen from './TeamScreen';
import TeamEditScreen from './TeamEditScreen';
import AllTeams from './AllTeams';

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
          <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                <a className="navbar-brand" href="#">
                <i className="fab fa-connectdevelop fa-2x"></i>Team Interface
                </a>
                  <p className="navbar-text">Signed in as {Meteor.user().username}</p>
                  </div>
                  <ul className="nav navbar-nav navbar-right">
                    <li><a href="#" onClick={this.handleClick}>Logout</a></li>
                  </ul>
              </div>
            </nav>
            <div className="jumbotron">
              <div className="container">
              <h1>Hello, {Meteor.user().username}!</h1>
                <p>Welcome to Team Interface, where Team Building is made Easy</p>
              </div>
            </div>
          {(!this.state.screen || this.state.screen === 'HomeScreen') ? 
            <div>
              <PersonalDetailScreen 
              navigateToPage={this.navigateToPage}
              />
              {this.state.teamScreen === 'display' || !this.state.teamScreen ? 
              <div>
                <TeamScreen 
                navigateToPage={this.navigateToPage}
                />
                <AllTeams />
              </div>
              : 
              <div>
                <TeamEditScreen 
                navigateToPage={this.navigateToPage}
                />
                <AllTeams />
              </div>
                
              }
            </div>
            : (this.state.screen === 'EditScreen') ? 
            <div>
                <EditScreen 
                navigateToPage={this.navigateToPage}
                />
                {this.state.teamScreen === 'display' || !this.state.teamScreen ? 
                <div>
                  <TeamScreen 
                  navigateToPage={this.navigateToPage}
                  />
                  <AllTeams />
                </div>
                :
                <div>
                  <TeamEditScreen 
                  navigateToPage={this.navigateToPage}
                  />
                  <AllTeams />
                </div>
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