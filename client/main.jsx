import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import App from '../imports/ui/components/App.jsx';
import App from '../imports/ui/components/Map.jsx';
import App from '../imports/ui/components/Login.jsx';


 
Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
