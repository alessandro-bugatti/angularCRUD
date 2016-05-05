/**
 * Created by Alessandro Bugatti.
 */

angular.module('articleApp.services',[]).factory('Article',function($resource){
    return $resource('http://localhost/blog/articles/:id',{id:'@id'},{
        update: {
            method: 'PUT'
        }
    });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});
