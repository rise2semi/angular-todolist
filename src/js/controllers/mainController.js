// Define the `MainController` controller on the `todolisttApp` module
todolistApp.controller('MainController', [function(){
  this.todos = [
  	{
  		title: 'first todo'
  	}, 
  	{
  		title: 'second todo'
  	},
  	{
  		title: 'third todo'
  	}	
  ];
}]);
