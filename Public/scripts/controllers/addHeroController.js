myApp.controller('addHeroController', ['$scope', '$http', function($scope, $http) {
  $scope.addHero = function(alias, first_name,last_name, city, power_name) {
    var dataToSend ={
      alias: $scope.alias,
      first_name: $scope.first_name,
      last_name: $scope.last_name,
      city: $scope.city,
      power_name: $scope.power_name
    };


    console.log('data to send =', dataToSend);

    //ajax call
    $http({
      method: 'POST',
      url: '/heroes',
      data: dataToSend
    }).then(function successCallback(response) {
      console.log('post resp =', response);
    }, function errorCallback(response) {
      console.log('err');
    }); //end http call
  };//end hero function
}]); //end controller
