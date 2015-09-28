'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);
var url = "http://baobab.wandoujia.com/api/v1/feed?callback=JSON_CALLBACK";



phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
  function($scope, $http) {

    $http.get(url)
      .success(function(data) {
        $scope.totalData =  data.dailyList;
        $scope.nextUrl = data.nextPageUrl;
        url = $scope.nextUrl;

        $scope.loadMore = function(){
            $http.get(url)
                .success(function(data) {
                  //alert(url);
                  $scope.nextUrl = data.nextPageUrl;
                  url = $scope.nextUrl;
                  $scope.totalData.push(data.dailyList[0]);
                });
                
        }
      })
      .error(function(data){
            alert("error");
      });

  }]);



phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http', '$sce',
  function($scope, $routeParams, $http, $sce) {
    $http.get("http://baobab.wandoujia.com/api/v1/video/" + $routeParams.detailId)
      .success(function(data){
        $scope.id = data.id;
        $scope.title = data.title;
        $scope.coverForDetail = data.coverForDetail;
        $scope.blurredCover = data.coverBlurred;
        $scope.description = data.description;
        $scope.duration = data.duration;
        $scope.category = data.category;
        $scope.playUrl_1 = $sce.trustAsResourceUrl('http://61.134.46.44/m.wdjcdn.com/baobab/' + data.playUrl.slice(32,data.playUrl.length));
        $scope.playUrl_2 = $sce.trustAsResourceUrl('http://117.23.2.79/m.wdjcdn.com/baobab/' + data.playUrl.slice(32,data.playUrl.length));
      });
      $scope.v = true;
    $scope.playVideo = function(){
      $scope.v = false;
      var myVideo=document.getElementById("video1");
      myVideo.webkitRequestFullScreen();
      myVideo.play();
    }
  }]);

