import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import './routing.jsx';

import App from '../imports/ui/App.js';
import '../imports/api/teams';

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});