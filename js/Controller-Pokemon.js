(function (){

	angular.module('pokedex').controller('PokemonController', PokemonController);

	function PokemonController(){
		
		this.pokemon = {
			id: 001,
			name: 'Bulbasaur',
			species: 'Seed Pokemon',
			type: ['Grass', 'Poison'],
			height:  "2'4",
			weight: '15.2 lbs',
			abilities: ['Overgrow','Cholorophyll']
		};
	}


})();