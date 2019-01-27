import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

class EditScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: Meteor.user().profile.firstname,
      lastName: Meteor.user().profile.lastname,
      emailAddress: Meteor.user().emails[0].address,
    }
  }
  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
    console.log(this.state);
    console.log(Meteor.user());
  }

  handleSubmit = (event) => {
    event.preventDefault();
    Meteor.users.update({_id:Meteor.user()._id}, { $set: {'emails.0.address': this.state.emailAddress, 'profile.firstname': this.state.firstName, 'profile.lastname': this.state.lastName}});
    console.log(Meteor.user());
    this.props.navigateToPage('HomeScreen');
  }
  render(){
    return (
      <div className="content content-boxed">
      <form onSubmit={this.handleSubmit}>
      <div className="row">
          <div className="block">
            <div className="block-header bg-gray-lighter">
              <ul className="block-options">
                <li>
                  <button onClick={() => {this.props.navigateToPage('HomeScreen')}} type="button"><i className="far fa-user-circle"></i> BACK TO PROFILE</button>
                </li>
              </ul>
              <h3 className="block-title"><i className="fas fa-user-circle"></i> Personal Details</h3>
            </div>
            <div className="block-content">
              <ul className="list list-timeline pull-t">                                        
                <li>
                  <div className="list-timeline-time">First Name</div>
                  <div className="list-timeline-content">
                    <input name="firstName" onChange={this.handleInputChange} type="text" value={this.state.firstName}/>
                  </div>
                </li>
                <li>
                  <div className="list-timeline-time">Last Name</div>
                  <div className="list-timeline-content">
                  <input name="lastName" onChange={this.handleInputChange} type="text" value={this.state.lastName}/>
                  </div>
                </li>
                <li>
                  <div className="list-timeline-time">Email Address</div>
                  <div className="list-timeline-content">
                    <input name="emailAddress" onChange={this.handleInputChange} type="email" value={this.state.emailAddress} />
                  </div>
                </li>
              </ul>
          </div>
          <input type="submit" value="Submit" />
        </div>
        <div className="col-sm-5 col-lg-4">
        </div>
      </div>
      </form>
      </div>
    )
  }
}

export default EditScreen; 