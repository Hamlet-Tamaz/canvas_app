import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import {AppRoutes} from '/imports/startup/client/router.jsx'


Meteor.startup(() => {
  render(AppRoutes(), document.getElementById('app'));
});
 