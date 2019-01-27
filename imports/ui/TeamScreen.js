import React from 'react';

const TeamScreen = () => {
  return (
<div className="content content-boxed">
    <div className="row">
        <div className="block">
          <div className="block-header bg-gray-lighter">
            <ul className="block-options">
              <li>
                <button onClick={() => {console.log('clicked')}} type="button"><i className="far fa-plus-square"></i> CREATE A TEAM</button>
              </li>
            </ul>
            <h3 className="block-title"><i className="fas fa-laugh-beam"></i> Teams</h3>
          </div>
          <div className="block-content">
            <ul className="list list-timeline pull-t">                                        
              <li>
                <div className="list-timeline-time">TEAM NAME</div>
                <div className="list-timeline-content">
                  <p className="font-w600">TEAM MEMBERS</p>
                </div>
              </li>
            </ul>
        </div>
      </div>
      <div className="col-sm-5 col-lg-4">
      </div>
    </div>
  </div>
  );
}

export default TeamScreen; 