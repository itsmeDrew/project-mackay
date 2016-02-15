'use strict';

function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $stateProvider
    .state('app', {
      url: '/',
      views: {
        'content': {
          templateUrl: 'templates/form.tpl.html'
        }
      }
    })
    .state('app.submitted', {
      url: 'submitted',
      views: {
        'content@': {
          templateUrl: 'templates/submitted.tpl.html'
        }
      }
    })

  $urlRouterProvider.otherwise('/');

}

module.exports = OnConfig;
