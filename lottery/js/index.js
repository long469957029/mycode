/*控制器*/
var app=angular.module('myApp',['ng','ngRoute','ngAnimate']);
/*父级控制器*/
app.controller('parentCtrl',['$scope','$location',
    function($scope,$location){
        $scope.jump=function(url){
            $location.path(url);
        };
    }]);
/*主页控制器*/
app.controller('mainCtrl',['$scope',"$http",function($scope,$http){
  $http.get('data/lottery.json').success(function(data){
      console.log(data)
      $scope.numberList = data;
      $scope.openNum=data.data[0].opencode.split(',');
  });
}]);
/*配置词典*/
app.config(function($routeProvider){
    $routeProvider
     .when('/main',{
            templateUrl:'main.html',
            controller:'mainCtrl'
        })
        .when('/404',{
            templateUrl:'404.html'
        })
        .otherwise({redirectTo:'/main'});
});

/*carousel*/
$('.carousel').carousel('cycle');
$('#carousel').hover(function () {
    $(this).carousel('pause');
});


