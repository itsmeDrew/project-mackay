'use strict';

require('angular');
require('angularfire');
require('firebase');
require('angular-ui-router');
require('./templates');

require('./controllers/HomeCtrl');

require('./services/users');

var app = angular.module('App', [
  'ui.router',
  'firebase',
  'templates',
  'App.Controller.Home',
  'App.Service.Users'
]);

app.controller('AppCtrl', require('./controllers/AppCtrl'));

app.constant('App.Config', window.config);

app.config(require('./on_config'));