import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Teams } from '../api/teams.js';

class TeamEditScreen extends Component {
  constructor(){
    super();
    this.state = {
      teamName: '',
      searchUser: '',
      results: '',
      team: [],
    }
  }
  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
    if(this.state.searchUser) {
      this.setState({
        results: this.props.users.filter(user =>  {
          return user.username.includes(this.state.searchUser) || user.username.search(this.state.searchUser)
        })
      })
    };
    console.log(this.state);
  }

  handleSubmit = event => {
    event.preventDefault();
    // Teams.insert({

    // })
  }

  addUser = user => {
    event.preventDefault();
    console.log(user);
    const updatedTeam = this.state.team.concat(user);
    this.setState({
      team: updatedTeam,
    })
  }

  removeUser = user => {
    event.preventDefault();
    this.setState((currentState) => {
      return {
        team: currentState.team.filter((member) => member._id !== user._id)
      }
    })
  }

  doesExist = (userId) => {
    const elementPos = this.state.team.map(x =>  x._id).indexOf(userId);
    if(elementPos !== -1) {
      return true;
    }
    return false;
  }

  renderUsers = () => {
    return this.state.results.map(user => {
      if(this.doesExist(user._id)){
        return <button onClick={()=>{this.removeUser(user)}} key={user._id} className="btn"><i className="fas fa-minus"></i> {user.username}</button>
      }
      else {
        return <button onClick={()=>{this.addUser(user)}} key={user._id} className="btn"><i className='fas fa-plus'></i> {user.username}</button>
      }
    })
  }

  render(){
    return (
      <div className="content content-boxed">
        <div className="row">
            <div className="block">
              <div className="block-header bg-gray-lighter">
                <ul className="block-options">
                  <li>
                    <button onClick={() => {this.props.navigateToPage('teamScreen', 'display')}} type="button"><i className="far fa-eye"></i> DISPLAY TEAMS</button>
                  </li>
                </ul>
                <h3 className="block-title"><i className="fas fa-laugh-beam"></i> Teams</h3>
              </div>
              <div className="block-content">
                <ul className="list list-timeline pull-t">                                        
                  <li>
                    <div className="list-timeline-time">SEARCH</div>
                    <div className="list-timeline-content">
    
                    <form>
                      <div className="form-group row">
                        <label htmlFor="teamName" className="col-sm-2 col-form-label">Team Name</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="teamName" name="teamName" placeholder="Team Name" value={this.state.teamName} onChange={this.handleInputChange}/>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="searchUser" className="col-sm-2 col-form-label">Search By Username</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="searchUser" placeholder="Search for Users" value={this.state.searchUser} name="searchUser" onChange={this.handleInputChange} />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Search Results</label>
                        <div className="col-sm-10">
                      {this.state.results ? 
                        this.renderUsers()
                        :
                          <p>No Results to Show</p>
                        
                      }
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-10">
                          <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Create Team</button>
                        </div>
                      </div>
                    </form>
    
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
}

export default withTracker(() => {
  return {
    teams: Teams.find({}).fetch(),
    users: Meteor.users.find({}).fetch(),
  };
})(TeamEditScreen);