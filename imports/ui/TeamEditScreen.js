import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Teams } from '../api/teams.js';

class TeamEditScreen extends Component {
  constructor(){
    super();
    this.state = {
      teamName: '',
      searchUser: '',
    }
  }
  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });

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
                          <input type="text" className="form-control" id="searchUser" placeholder="Search for Users" value={this.state.searchUser} onChange={this.handleInputChange} />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-10">
                          <button type="submit" className="btn btn-primary">Create Team</button>
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
  };
})(TeamEditScreen);