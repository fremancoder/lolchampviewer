(function (){
	
	var app = angular.module("lolChampViewer");
	
	var lolChampController = function($scope, $http, $log, $location, $routeParams) {
		
		var onComplete = function(response){
			$scope.champ = response.data;
		}; 
		
		var onError = function(reason){
			$scope.error = "No photos in your collection, or something went wrong when getting the list: " ; 
		}; 

		var getChamp = function(page) {
			console.log('in the getChamp')
			$http.get("https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion/"+$routeParams.id+"?champData=all&api_key=putyourkeyhere")
				.then(onComplete, onError);
		};
		
		getChamp();
	}
	
	app.controller("lolChampController", ["$scope", "$http", "$log", "$location", "$routeParams", lolChampController]);
	
}());
