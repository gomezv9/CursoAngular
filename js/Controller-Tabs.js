(function (){

	angular.module('pokedex').controller('TabsController', TabsController);

	function TabsController(){
		
		this.tab = 1;

		this.selectTab = function (tab){
			this.tab = tab;
		}
	}


})();