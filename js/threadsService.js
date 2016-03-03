angular.module('forumApp')
.service('threadsService', function(fb){

  this.getThreads = function(){
    return new Firebase(fb.url + 'threads/');
  };
  this.getThread = function(id){
    console.log(id);
    return new Firebase(fb.url + 'threads/' + id);
  };
  this.getComments = function(id){
    console.log(id);
    return new Firebase(fb.url + 'threads/' + id + '/comments');
  };
});
