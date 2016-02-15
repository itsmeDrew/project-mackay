'use strict'; module.exports = angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("templates/form.tpl.html","<div class=\"form\">\n  <img src=\"assets/img/logo.png\" alt=\"Kristal & Drew Are Getting Married!\" class=\"logo\">\n  <div class=\"login__content\">\n    <button class=\"login__btn btn-solid--login\" ng-click=\"app.login()\" ng-if=\"!user.authenticated\">login with facebook</button>\n    <button class=\"login__btn btn-solid--login\" ng-click=\"app.logout()\" ng-if=\"user.authenticated\">logout</button>\n  </div>\n  <div class=\"guest-form\">\n    <img ng-if=\"user.authenticated\" ng-src=\"{{ user.profileImageURL }}\" alt=\"profile pic\">\n    <form class=\"guest-form__form\">\n\n      <input class=\"guest-form__input\" type=\"text\" placeholder=\"first name\" ng-value=\"user.cachedUserProfile.first_name || null\" ng-model=\"user.cachedUserProfile.first_name\" ng-disabled=\"user.authenticated\">\n\n      <input class=\"guest-form__input\" type=\"text\" placeholder=\"last name\" ng-value=\"user.cachedUserProfile.last_name || null\" ng-model=\"user.cachedUserProfile.last_name\" ng-disabled=\"user.authenticated\">\n\n      <input class=\"guest-form__input\" type=\"text\" placeholder=\"age\" ng-show=\"!user.authenticated\" ng-model=\"user.cachedUserProfile.age_range.min\">\n\n      <input class=\"guest-form__input\" type=\"text\" ng-model=\"user.drink\" placeholder=\"alcohol of choice\" ng-show=\"user.cachedUserProfile.age_range.min >= 21\">\n\n      <input class=\"guest-form__input\" type=\"text\" placeholder=\"request a song\" ng-model=\"user.songRequest\">\n\n      <input\n        type=\"submit\"\n        ng-click=\"app.addGuest(\n          user.cachedUserProfile.first_name,\n          user.cachedUserProfile.last_name,\n          user.drink,\n          user.songRequest\n        )\"\n      >\n    </form>\n  </div>\n</div>\n");
$templateCache.put("templates/submitted.tpl.html","<h2>thank you</h2>\n");}]);