'use strict'; module.exports = angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("templates/form.tpl.html","<img src=\"assets/img/logo.png\" alt=\"Kristal & Drew Are Getting Married!\" class=\"logo\">\n<div class=\"information\">\n  <p>MacKay Gardens. Lakeland, FL.</p>\n  <p>June 11, 2016. 3-11pm</p>\n</div>\n<div class=\"guest-form--wrapper\">\n  <div class=\"login__content\">\n    <a class=\"login__link\" ng-click=\"app.login()\" ng-if=\"!user.authenticated\">login with facebook</a>\n    <a class=\"login__link\" ng-click=\"app.logout()\" ng-if=\"user.authenticated\">logout</a>\n  </div>\n  <div class=\"guest-form\">\n    <!-- <img ng-if=\"user.authenticated\" ng-src=\"{{ user.profileImageURL }}\" alt=\"profile pic\"> -->\n    <form class=\"guest-form__form\">\n      <div role=\"alert\">\n        <span class=\"error\" ng-show=\"guest-form.user.cachedUserProfile.first_name.$error.required\">\n         Required!</span>\n      </div>\n      <fieldset>\n        <div class=\"form-group\">\n          <label class=\"guest-form__label--icon\" for=\"first_name\"><i class=\"guest-form__icon fa fa-user\"></i></label>\n          <input class=\"guest-form__input\" id=\"first_name\" type=\"text\" placeholder=\"first name\" ng-value=\"user.cachedUserProfile.first_name || null\" ng-model=\"user.cachedUserProfile.first_name\" ng-disabled=\"user.authenticated\" required>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"guest-form__label--icon\" for=\"last_name\"><i class=\"guest-form__icon fa fa-user\"></i></label>\n          <input class=\"guest-form__input\" id=\"last_name\" type=\"text\" placeholder=\"last name\" ng-value=\"user.cachedUserProfile.last_name || null\" ng-model=\"user.cachedUserProfile.last_name\" ng-disabled=\"user.authenticated\" required>\n        </div>\n        <div class=\"form-group\" ng-show=\"!user.authenticated\">\n          <label class=\"guest-form__label--icon\" for=\"age\" ng-if=\"!user.cachedUserProfile.age_range.min\"><i class=\"guest-form__icon fa fa-birthday-cake\"></i></label>\n          <label class=\"guest-form__label--icon\" for=\"age\" ng-if=\"user.cachedUserProfile.age_range.min < 21 \"><i class=\"guest-form__icon fa fa-child\"></i></label>\n          <label class=\"guest-form__label--icon\" for=\"age\" ng-if=\"user.cachedUserProfile.age_range.min >= 21 && user.cachedUserProfile.age_range.min < 40\"><i class=\"guest-form__icon fa fa-graduation-cap\"></i></label>\n          <label class=\"guest-form__label--icon\" for=\"age\" ng-if=\"user.cachedUserProfile.age_range.min >= 40\"><i class=\"guest-form__icon fa fa-wheelchair\"></i></label>\n          <input class=\"guest-form__input\" id=\"age\" type=\"number\" placeholder=\"age\" ng-model=\"user.cachedUserProfile.age_range.min\" required integer>\n        </div>\n        <div class=\"form-group\" ng-show=\"user.cachedUserProfile.age_range.min >= 21\">\n          <label class=\"guest-form__label--icon\" for=\"alcohol\"><i class=\"guest-form__icon fa fa-beer\"></i></label>\n          <input class=\"guest-form__input\" id=\"alcohol\" type=\"text\" ng-model=\"user.drink\" placeholder=\"alcohol of choice\">\n        </div>\n        <div class=\"form-group\">\n          <label class=\"guest-form__label--icon\" for=\"song\"><i class=\"guest-form__icon fa fa-music\"></i></label>\n          <input class=\"guest-form__input\" id=\"song\" type=\"text\" placeholder=\"request a song\" ng-model=\"user.songRequest\" required>\n        </div>\n        <div class=\"form-group guest-form__verification\">\n          <input class=\"guest-form__input\" type=\"checkbox\" id=\"c1\" name=\"cc\" required>\n          <label class=\"guest-form__label\" for=\"c1\"><span></span>I am definitely coming. We will bill no shows. </label>\n        </div>\n        <button\n          class=\"btn btn-primary guest-form__submit\"\n          type=\"submit\"\n          ng-click=\"app.addGuest(\n            user.cachedUserProfile.first_name,\n            user.cachedUserProfile.last_name,\n            user.drink,\n            user.songRequest\n          )\"\n        >\n          attend our wedding\n        </button>\n      </fieldset>\n    </form>\n  </div>\n</div>\n");
$templateCache.put("templates/submitted.tpl.html","<h2 class=\"guest-form__message--success\">thank you {{ user.firstName || user.cachedUserProfile.first_name }}</h2>\n<h4>now the moment you wanted to see...</h4>\n");}]);