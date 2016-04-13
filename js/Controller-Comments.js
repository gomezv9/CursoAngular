(function (){

	angular.module('pokedex').controller('CommentsController', CommentsController);

	function CommentsController(){
		
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
	}


})();