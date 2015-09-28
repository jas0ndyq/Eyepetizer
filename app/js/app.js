'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatControllers',
  'phonecatFilters',
  'angular.backtop'
]);


phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/index', {
        templateUrl: 'partials/video-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/detail/:detailId', {
        templateUrl: 'partials/video-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/index'
      });
  }]);

if(window.screen.width < 768){
  alert('检测到移动设备，进入官网下载App');
  window.location = "http://www.wandoujia.com/eyepetizer";
}