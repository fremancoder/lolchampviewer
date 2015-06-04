(function (){
	
	var app = angular.module("lolChampViewer");
	
	var seasonStatsController = function($scope, $http, $rootScope) {
		
		var onComplete2015 = function(response){
			var season2015Stats = getAverageSeasonStats(response);
			addToSeasonStats({"season": "SEASON2015", "stats": season2015Stats});
		}; 
		
		var onComplete2014 = function(response){
			var season2014Stats = getAverageSeasonStats(response);
			addToSeasonStats({"season": "SEASON2014", "stats": season2014Stats});
		}; 

		var onComplete3 = function(response){
			var season3Stats = getAverageSeasonStats(response);
			addToSeasonStats({"season": "SEASON3", "stats": season3Stats});
		}; 
		
		var addToSeasonStats = function(seasonStat){
			if(!$scope.seasonStats){
				$scope.seasonStats = [];
			}
			$scope.seasonStats.push(seasonStat);
		}
		
		var getAverageSeasonStats = function(response) {
			for(var i = 0; i < response.data.champions.length; i += 1){
			    var champStat = response.data.champions[i];
			    if(champStat.id === 0){
			        return champStat.stats;
			    }
			}
		}
		
		var onError = function(reason){
			$scope.error = "No photos in your collection, or something went wrong when getting the list: " ; 
		}; 
		
		var getSeasonStats = function(season, summonerId, onComplete) {
			$http.get("https://euw.api.pvp.net/api/lol/euw/v1.3/stats/by-summoner/"+summonerId+"/ranked?season="+season+"&api_key=putyourkeyhere")
				.then(onComplete, onError);
		};

		var oncomplete = function(response){
			var summonerKey;
			for (var key in response.data) {
				var summonerKey = key;
	        }
			var summonerId = response.data[key].id;
			getSeasonStats('SEASON2015', summonerId, onComplete2015);
			getSeasonStats('SEASON2014', summonerId, onComplete2014);
			getSeasonStats('SEASON3', summonerId, onComplete3);
		}; 
		
		var getSummoner = function(summoner) {
			$http.get("https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/"+summoner+"?api_key=putyourkeyhere")
				.then(oncomplete, onError);
		};

		$scope.getStats = function(summoner) {
			getSummoner(summoner);
		}
		
		var setMenu = function(){
			$rootScope.menuOption = 'seasonStats';
		}
		
		setMenu();
	}
	
	app.controller("seasonStatsController", ["$scope", "$http", "$rootScope", seasonStatsController]);
	
}());
