'use strict'; module.exports = angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("templates/home.tpl.html","<div class=\"login__content\">\n  <button class=\"login__btn btn-solid--login\" ng-click=\"app.login()\" ng-if=\"!user\">login with facebook</button>\n  <button class=\"login__btn btn-solid--login\" ng-click=\"app.logout()\" ng-if=\"user\">logout</button>\n</div>\n<div class=\"guest-form\">\n  <img ng-src=\"{{ user.profileImageURL }}\" alt=\"profile pic\">\n  <form class=\"guest-form__form\">\n    <input type=\"text\" placeholder=\"first name\" ng-value=\"user.cachedUserProfile.first_name || null\">\n    <input type=\"text\" placeholder=\"last name\" ng-value=\"user.cachedUserProfile.last_name || null\">\n    <input type=\"text\" placeholder=\"last name\" ng-value=\"user.cachedUserProfile.last_name || null\">\n  </form>\n</div>\n");}]);