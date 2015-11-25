(function() {

var app = angular.module('starter', ['ionic'])

app.controller("PromiseCtrl", function($scope, $timeout) {

  function add(x, y) {
    // $timeout is a promise object
    return $timeout(function() {
       // contains the value of x + y
       return x + y;
    }, 100);
  }

  var startTime = Date.now();
  // get promise object
  var promise = add(5, 2);
  // get result then ...
  promise.then(function(result) {
    $scope.result = result ;
    $scope.elapseTime = Date.now() - startTime;
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
