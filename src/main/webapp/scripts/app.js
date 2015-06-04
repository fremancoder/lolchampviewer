(function (){
	
	var app = angular.module("lolChampViewer", ["ngRoute"]);
	
	app.config(function($routeProvider){
		console.log($routeProvider);
		
		$routeProvider
			.when("/champs", 
					{
						templateUrl: "views/champs.html",
						controller: "lolChampListController"
					})
			.when("/champ/:id", 
					{
						templateUrl: "views/champ.html",
						controller: "lolChampController"
					})
			.when("/seasonStats", 
					{
						templateUrl: "views/seasonStats.html",
						controller: "seasonStatsController"
					})
			.otherwise({redirectTo:"/champs"});
	});
	
	app.filter('array', function() {
		  return function(items) {
		    var filtered = [];
		    angular.forEach(items, function(item) {
		      filtered.push(item);
		    });
		   return filtered;
		  };
	});	
	
	app.filter('to_trusted', ['$sce', function($sce){
	    return function(text) {
	        return $sce.trustAsHtml(text);
	    };
	}]);	
}());