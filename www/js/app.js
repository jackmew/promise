(function() {

var app = angular.module('starter', ['ionic'])

app.controller("PromiseCtrl", function($q, $scope) {

  function add(x, y) {
    // for creating promise
    var q = $q.defer();
    setTimeout(function() {
       var result = x + y ;
       if(result >= 0) {
         q.resolve(x + y);
       } else {
         q.reject('negative value: ' + result);
       }
    }, 100);
    return q.promise;
  }

  var startTime = Date.now();
  add(5, 2)
    .then(function(result) {
      return add(result, 3);
    })
    .then(function(result) {
      return add(result, -20);
    })
    .then(function(result) {
      $scope.result = result ;
      $scope.elapseTime = Date.now() - startTime;
    })
    .catch(function(failure) {
      $scope.failure = failure ;
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
