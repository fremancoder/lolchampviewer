(function(){
	
	var app = angular.module("lolChampViewer");
	
	var MyMenuController = function($location, $scope, $rootScope, $route) {
		
		$scope.isMenu = function(menu){
			if($rootScope.menuOption == menu) {
				return true;
			} else {
				return false;
			}
		}
		
		$scope.reloadRoute = function() {
			   $route.reload();
		}
		
	}	
	
	app.controller("MyMenuController", ["$location", "$scope", "$rootScope", "$route", MyMenuController]);
	
}());