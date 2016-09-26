myApp.controller('addPetController', ['$scope', '$http', function($scope, $http) {
  $scope.addHero = function(alias, first_name,last_name, city, power_name) {
    var dataToSend ={
      alias: alias,
      first_name: first_name.name,
      last_name: last_name.name,
      city: city,
      power_name: power_name.name,
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
    });
  };
}]);
