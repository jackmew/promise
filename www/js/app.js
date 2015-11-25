(function() {

var app = angular.module('starter', ['ionic'])

app.controller("PromiseCtrl", function($scope) {

  function add(x, y, callback) {
    callback(x + y);
  }
  add(5, 2, function(result) {
    $scope.result = result ;
  });
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
