'use strict';

function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $stateProvider
    .state('app', {
      url: '/',
      views: {
        'content': {
          templateUrl: 'templates/home.tpl.html',
          controller: 'HomeCtrl',
          controllerAs: 'home'
        }
      }
    })

  $urlRouterProvider.otherwise('/');

}

module.exports = OnConfig;
