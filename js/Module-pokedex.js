(function (){

	angular.module('pokedex',[]);

	angular.module('pokedex', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {

		$routeProvider
			.when('/', {
				templateUrl: 'vistas/pokemon.html',
				controller: 'PokemonController',
				controllerAs: 'pkmCtrl'
			})

	}]);
	
})();	