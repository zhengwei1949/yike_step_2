;(function(angular){
    var favouriteControllerModule = angular.module('favouriteControllerModule',[]);
    favouriteControllerModule.controller('favouriteController',function($scope){
        $scope.$parent.active = '/favourite';
    });
})(angular);