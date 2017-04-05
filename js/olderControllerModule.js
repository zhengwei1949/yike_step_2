;(function(angular){
    var olderControllerModule = angular.module('olderControllerModule',[]);
    olderControllerModule.controller('olderController',function($scope){
        $scope.$parent.active = '/older';
    });
})(angular);