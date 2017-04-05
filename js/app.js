var myApp = angular.module('myApp',['ngRoute',
                                    'ngSanitize',
                                    'indexControllerModule',
                                    'olderControllerModule',
                                    'authorControllerModule',
                                    'categoryControllerModule',
                                    'favouriteControllerModule',
                                    'settingsControllerModule'
                                    ]);
myApp.config(['$routeProvider',function($routeProvider){
    $routeProvider
        .when('/',{
            'templateUrl':'views/index.html',
            'controller':'indexController'
        })
        .when('/older',{
            'templateUrl':'views/older.html',
            'controller':'olderController'
        })
        .when('/author',{
            'templateUrl':'views/author.html',
            'controller':'authorController'
        })
        .when('/category',{
            'templateUrl':'views/category.html',
            'controller':'categoryController'
        })
        .when('/favourite',{
            'templateUrl':'views/favourite.html',
            'controller':'favouriteController'
        })
        .when('/settings',{
            'templateUrl':'views/settings.html',
            'controller':'settingsController'
        });
}]);
myApp.controller('myController',function($scope,$location){

});
myApp.directive('toggleSlide',function(){
    return {
        link:function(scope,element,attributes){
            // console.log(element.find('.menu'))
            var $menu = element.find('.menu');
            var $header = element.find('.header');
            var $body = element.find('.body');
            var $navs = element.find('.navs');
            var $dd = element.find('dd');
            // console.log($header,$navs,$dd)
            $menu.click(function(){
                $header.toggleClass('collapse');
                $body.toggleClass('collapse');
                $navs.toggleClass('collapse');
                if($menu.is('.collapsed')){
                    //console.log(1)
                    for(var i=0; i<$dd.length; i++) {
                        $dd[i].style.transitionDuration = (i + 1) * 0.15 + 's';
                        $dd[i].style.transitionProperty = 'all';
                        $dd[i].style.transitionDelay = '0.2s';
                        $dd[i].style.transitionTimingFunction = 'ease-out';
                        $dd[i].style.transform = 'translate(0)';
                    }
                }else{
                    // console.log(2)
                    for(var i=$dd.length - 1; i>=0; i--) {
                        // console.log(4)
                        // console.log($dd[i])
                        $dd[i].style.transitionDuration = ($dd.length - i + 1) * 0.05 + 's';
                        $dd[i].style.transitionProperty = 'all';
                        $dd[i].style.transitionDelay = '';
                        $dd[i].style.transitionTimingFunction = 'ease-out';
                        $dd[i].style.transform = 'translate(0%)';
                    }
                }
                $(this).toggleClass('collapsed');
            });
        }
    }
});