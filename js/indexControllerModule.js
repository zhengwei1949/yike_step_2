;(function(angular){
    var indexControllerModule = angular.module('indexControllerModule',[]);
    indexControllerModule.controller('indexController',function($scope,$http){
        $scope.$parent.active = '/';
        jQuery.getJSON("http://localhost:3000?callback=?",function(data){
            console.log(data);
        });
        $http.jsonp('http://localhost:3000?callback=JSON_CALLBACK')
             .success(function(data, status, header, config){
                $scope.data = data;
             })
             .error(function(){

             });
    });
})(angular);