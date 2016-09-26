myApp.controller('viewHeroController', ['$scope', '$http', function($scope, $http) {
  console.log('view heroes');
  //need a heroes Array
  $scope.getHeroes = [];

  //make the http (ajax) call

  $scope.getHeroes = function() {
    $http({
      method: 'GET',
      url: '/heroes'
    }).then(function successCallback(response) {
      $scope.heroes = response.data;
      console.log('get em =', response);
    }, function errorCallback(response) {
      console.log('err');
    });
  };

  $scope.deleteHero = function(id) {
    console.log('clicked delete', id );
    $http({
      method: 'DELETE',
      url: '/heroes/' + id
    }).then(function successCallback(response) {
      console.log('delete res =', response);
    }, function errorCallback(response) {
      console.log('err');
    });
  };
}]);
