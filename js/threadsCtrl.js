angular.module('forumApp')
.controller('threadsCtrl', function($scope, threadsRef, $firebaseArray){
  $scope.threads = $firebaseArray(threadsRef);
});
