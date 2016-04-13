(function (){

	angular.module('pokedex').directive('pokemonComments', pokemonComments);

	function pokemonComments(){
		
		return {
			restrict : 'E',
			templateUrl: 'partials/pokemon-comments.html',
			controller: function (){
				this.comments = [];
				this.comment = {};
				this.show = false;

				this.toggle = function(){
					this.show = !this.show;
				};

				this.anonymousChange = function (){
					if ( this.comment.anonymous ){
						this.comment.email = "";
					}
				};

				this.addComment = function (){
					this.comment.date = Date.now();
					this.comments.push(this.comment);
					this.comment = {};
				};
			}, controllerAs : 'cmtsCtrl'
		};
		
	}


})();