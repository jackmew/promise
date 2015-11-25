(function() {

var app = angular.module('starter', ['ionic'])

app.controller("PromiseCtrl", function($scope) {

  function add(x, y) {
    return x + y ;
  }

  $scope.result = add(5, 2) ;
});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

}());
