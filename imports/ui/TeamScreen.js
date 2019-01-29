import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Teams } from '../api/teams.js';
import { Meteor } from 'meteor/meteor';

const TeamScreen = props => {
  renderTeams = () => {
    const arrayOfTeams = props.teams.filter((team) => {
      return team.owner === Meteor.userId() || team.teamMembers.some((member) => {
        return Meteor.userId().indexOf(member._id) > -1;
      })
    })
    if(arrayOfTeams.length > 0) {
      return arrayOfTeams.map(team => (
        <li key={`${team._id}, join`}>
          <div className="list-timeline-time">{team.teamName}</div>
          <div className="list-timeline-content">
            {team.teamMembers.map((member) => {
              return (
                <p key={`${member._id}, join`} className="font-w600">{member.username}</p>
              )
            })}
          </div>
        </li>
      ))
    } else {
      return (
        <div className="list-timeline-content">
        <p className="font-w600">No Teams to Display</p>
      </div>
      )
    }
  }
  return (
    <div className="content content-boxed">
      <div className="row">
          <div className="block">
            <div className="block-header bg-gray-lighter">
              <ul className="block-options">
                <li>
                  <button onClick={() => {props.navigateToPage('teamScreen', 'EditTeam')}} type="button"><i className="far fa-plus-square"></i> CREATE A TEAM</button>
                </li>
              </ul>
              <h3 className="block-title"><i className="fas fa-laugh-beam"></i> Your Teams</h3>
            </div>
            <div className="block-content">
              <ul className="list list-timeline pull-t">                                        
                {renderTeams()}
              </ul>
          </div>
        </div>
        <div className="col-sm-5 col-lg-4">
        </div>
      </div>
    </div>
  );
}

export default withTracker(() => {
  Meteor.subscribe('teams');
  return {
    teams: Teams.find({}, { sort: {createdAt: -1 }}).fetch(),
  };
})(TeamScreen);