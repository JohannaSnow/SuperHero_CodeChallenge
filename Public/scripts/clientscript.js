console.log('sourced clientapp.js');

var myApp = angular.module( 'myApp', ['ngRoute'] );

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
      when("/about", {
        templateUrl: "/views/partials/about.html",
        controller: "aboutHeroController"
      }).
      when("/add", {
        templateUrl: "/views/partials/add.html",
        controller: "addHeroController"
      }).
      when("/view", {
        templateUrl: "/views/partials/view.html",
        controller: "viewHeroController"
      }).
      otherwise({
        redirectTo: "/about"
      });
}]);
