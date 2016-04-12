(function (){

	angular.module('pokedex').controller('CommentsController', CommentsController);

	function CommentsController(){
		
		this.comments = [];
		this.show = false;

		this.toggle = function(){
			this.show = !this.show;
		};
	}


})();