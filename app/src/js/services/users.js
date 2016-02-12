'use strict';

var app = angular.module('App.Service.Users', []);

app.service('users', UsersCtrl);

function UsersCtrl () {
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

  // function setNewUser(list, userId, authData) {
  //   list.child(userId).set({
  //     provider: authData.provider,
  //     name: getName(authData),
  //     userID: userId
  //   });
  // }

  function checkAuth(ref) {
    var authData = ref.getAuth();

    if (authData) {
      return authData;
    } else {
      return false;
    }
  }

};

module.exports = UsersCtrl;
