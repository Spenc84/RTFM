angular.module('forumApp')
.controller('threadsCtrl', function($scope, threadsRef, $firebaseArray){

  $scope.threads = $firebaseArray(threadsRef);
  console.log ($scope.threads);
  $scope.createThread = function(name, title){
    $scope.threads.$add({username: name, title: title});
    $scope.newThreadTitle = "";
    $scope.username = "";
  };

});
