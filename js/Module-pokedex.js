(function (){

	angular.module('pokedex',[]);

	angular.module('pokedex', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {

		$routeProvider
			.when('/', {
		        templateUrl: 'vistas/pokedex.html',
		        controller: 'PokedexController'
		    })
			.when('/pokemon/:name', {
				templateUrl: 'vistas/pokemon.html',
				controller: 'PokemonController',
				controllerAs: 'pkmCtrl'
			})
			.otherwise({ // redireccion a la pagina principal como un 404 pero redireccionando
				redirectTo: '/'

			})

	}]);
	
})();	