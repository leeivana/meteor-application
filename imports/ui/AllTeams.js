import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Teams } from '../api/teams.js';
import { Meteor } from 'meteor/meteor';

const AllTeams = props => {
  renderTeams = () => {
    return props.teams.map(team => {
      return (<li key={`${team._id}, general`}>
        <div className="list-timeline-time">{team.teamName}</div>
        <div className="list-timeline-content">
          {team.teamMembers.map((member) => {
            return (
              <p key={`${member._id}, general`} className="font-w600">{member.username}</p>
            )
          })}
        </div>
      </li>
      )})
  }
  return (
    <div className="content content-boxed">
      <div className="row">
          <div className="block">
            <div className="block-header bg-gray-lighter">
              <h3 className="block-title"><i className="fas fa-users"></i> All Teams</h3>
            </div>
            <div className="block-content">
              <ul className="list list-timeline pull-t">                                        
                {props.teams.length === 0 ? 
                <li>
                  <div className="list-timeline-content">
                    <p className="font-w600">No Teams to Display</p>
                  </div>
                </li>
                :
                renderTeams()
                }
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
})(AllTeams);