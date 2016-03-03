angular.module('forumApp')
.controller('threadCtrl', function($scope, threadRef, commentsRef, $firebaseObject, $firebaseArray){

  var thread = $firebaseObject(threadRef);
  thread.$bindTo($scope, 'thread');

  $scope.comments = $firebaseArray(commentsRef);

  $scope.createComment = function(name, comment){
    $scope.comments.$add({username: name, text: comment});
    $scope.newCommentText = "";
    $scope.username = "";
  };

});
