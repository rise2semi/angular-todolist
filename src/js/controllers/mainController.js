// Define the `MainController` controller on the `todolisttApp` module
todolistApp.controller('MainController', ['$scope', function($scope){
  var self = this;
 	console.log(self);
  self.title = 'Angular TODO-list';

}]);
