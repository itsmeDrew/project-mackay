'use strict';

var app = angular.module('App.Controller.App', []);

app.controller('AppCtrl', AppCtrl);

function AppCtrl ($scope, $state, $firebaseObject, $firebaseAuth, loginService, guestsService) {
  var vm = this;
  var baseDataURL = 'https://project-mackay.firebaseio.com/';
  var ref = new Firebase(baseDataURL);
  var guestsURL = new Firebase(baseDataURL + 'guests/');
  var auth = $firebaseAuth(ref);

  vm.login = login;
  vm.logout = logout;
  vm.addGuest = addGuest;
  $scope.formSubmitted = false;

  setUser();

  ref.onAuth(function(authData) {
    setUser(authData);
  });

  function login() {
    loginService.loginWithFacebook(auth, ref, reloadState);
  }

  function logout() {
    ref.unauth();
    $scope.user = '';
    $state.go("app", {}, {reload: true});
  }

  function reloadState() {
    $state.go($state.current, {}, {reload: true});
  }

  function setUser(authData) {
    if (authData) {
      var _userData = authData.facebook;

      $scope.user = _userData;
      _userData.authenticated = true;
    } else {
      $scope.user = '';
    }
  }

  function addGuest(firstName, lastName, drink, song) {
    guestsService.addGuest(guestsURL, firstName, lastName, drink, song);
    $state.go('app.submitted');
    $scope.formSubmitted = true;

    if (!$scope.user) {
      $scope.user = {
        firstName: firstName
      }
    }
  }


};

module.exports = AppCtrl;
