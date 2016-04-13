(function (){

	angular.module('pokedex').directive('pokemonData', pokemonData);

	function pokemonData(){
		
		return {
			restrict : 'E',
			templateUrl: 'partials/pokemon-data.html'
		};
		
	}


})();