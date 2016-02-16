'use strict';

var app = angular.module('App.Service.Guests', []);

app.service('guestsService', guestsCtrl);

function guestsCtrl () {
  var vm = this;

  vm.addGuest = addGuest;

  function addGuest(ref, first, last, drink, song) {
    var _newGuestRef = ref.push();

    _newGuestRef.set({
      firstName: first,
      lastName: last,
      drink: drink || null,
      song: song
    });
  }

};

module.exports = guestsCtrl;