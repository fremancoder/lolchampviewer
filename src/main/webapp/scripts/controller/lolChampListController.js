(function (){
	
	var app = angular.module("lolChampViewer");
	
	var lolChampListController = function($scope, $http, $log, $location, $rootScope) {
		
		var onComplete = function(response){
			$scope.champs = response.data.data;
		}; 
		
		var onError = function(reason){
			$scope.error = "No photos in your collection, or something went wrong when getting the list: " ; 
		}; 

		var search = function() {
			$rootScope.menuOption = 'champs';
			$http.get("https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion?api_key=putyourkeyhere")
				.then(onComplete, onError);
		};
		
		$scope.showDetails = function(id){
			$location.path("/champ/" + id);
		};
		
		search();
	}
	
	app.controller("lolChampListController", ["$scope", "$http", "$log", "$location", "$rootScope", lolChampListController]);
	
}());
