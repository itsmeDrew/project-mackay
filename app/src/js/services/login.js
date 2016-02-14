'use strict';

var app = angular.module('App.Service.Login', []);

app.service('loginService', loginCtrl);

function loginCtrl () {
  var vm = this;

  vm.checkAuth = checkAuth;
  vm.loginWithFacebook = loginWithFacebook;

  function loginWithFacebook(auth, ref, callback) {
    auth.$authWithOAuthPopup("facebook").then(function(authData) {
      if (authData) {
        callback();
      }
    }).catch(function(error) {
      console.log("Authentication failed:", error);
    });
  }

  function checkAuth(ref) {
    var authData = ref.getAuth();

    if (authData) {
      return authData;
    } else {
      return false;
    }
  }

};

module.exports = loginCtrl;
