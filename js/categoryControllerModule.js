;(function(angular){
    var categoryControllerModule = angular.module('categoryControllerModule',[]);
    categoryControllerModule.controller('categoryController',function($scope){
        $scope.$parent.active = '/category';
    });
})(angular);