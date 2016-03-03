angular.module('forumApp', ['ui.router', 'firebase'])
.constant('fb', {'url': 'https://chatroomnv.firebaseio.com/'})
.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/threads');
    $stateProvider
    .state('threads', {
        url: '/threads',
        templateUrl: './views/threads.html',
        controller: 'threadsCtrl',
        resolve: {
          threadsRef: function(threadsService){
            return threadsService.getThreads();
          }
        }
    })
    .state('thread', {
        url: '/threads/:threadId',
        templateUrl: './views/thread.html',
        controller: 'threadCtrl',
        resolve: {
          threadRef: function(threadsService, $stateParams){
            console.log($stateParams)
            return threadsService.getThread($stateParams.threadId);
          },
          commentsRef: function(threadsService, $stateParams){
            return threadsService.getComments($stateParams.threadId);
          }
        }
    });
});
