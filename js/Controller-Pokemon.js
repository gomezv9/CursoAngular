(function (){

	angular.module('pokedex').controller('PokemonController', ['$scope', 'pokemonService', '$routeParams' ,function ($scope, pokemonService, $routeParams){
		var name = $routeParams.name; // nombre de la ruta que se pasa routeProvider 
		$scope.pokemon = {};

		pokemonService.byName(name)
			.then(function (data){
				$scope.pokemon = data;
			});
		
		/*$scope.pokemon = {
			id: 001,
			name: 'Bulbasaur',
			species: 'Seed Pokemon',
			type: ['Grass', 'Poison'],
			height:  "2'4",
			weight: '15.2 lbs',
			abilities: ['Overgrow','Cholorophyll'],
			stats: {
				hp:45,
				attack: 49,
				defense: 49,
				"sp.atk": 65,
				"sp.def": 65,
				speed: 50,
				total: 318
			},
			evolution: [ "Bulbasaur", "Ivysaur", "Venusaur" ]
		};*/

	}])


})();