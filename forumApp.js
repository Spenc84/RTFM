angular.module('forumApp', ['ui.router', 'firebase'])
.constant('fb', {'url': 'https://chatroomnv.firebaseio.com/'})
.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
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
        url: '/threads/:thredId',
        templateUrl: '../views/thread.html',
        controller: 'baseCtrl',
        // resolve: {
        //   threadsRef: function(threadsService, $stateParams){
        //     return threadsService.getThreads();
        //   }
        // }
    });
});
