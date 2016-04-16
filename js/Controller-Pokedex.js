(function (){

	angular.module('pokedex').controller('PokedexController',['$scope','$http',function ($scope, $http) {
      $scope.pokemons = [];

      	$http.get('/CursoAngular/pokemons.json').success(function (data) {
          	$scope.pokemons = data;
       	});
    }])


})();