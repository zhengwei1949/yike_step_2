;(function(angular){
    var authorControllerModule = angular.module('authorControllerModule',[]);
    authorControllerModule.controller('authorController',function($scope){
        $scope.$parent.active = '/author';
    });
})(angular);