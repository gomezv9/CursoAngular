(function (){

	angular.module('pokedex').controller('PokedexController',['$scope','pokemonService',function ($scope, pokemonService) {

		pokemonService.all().then(function (data){
			$scope.pokemons = data;
		});

      /*$scope.pokemons = [];

      	$http.get('/CursoAngular/pokemons.json').success(function (data) {
          	$scope.pokemons = data;
       	});*/
    }])


})();