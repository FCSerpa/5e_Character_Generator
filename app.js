app = angular.module('dndApp', []);

app.controller("CharacterCtrl", function($scope){
	$scope.Math = window.Math;

	$scope.character = {
		name: "",
		characterClass: "",
		level: 1,
		race: "",
		background: "",
		trait: "",
		ideal: "",
		bond: "",
		flaw: "",
		alignment: "",
		player: "",
		xp: 0,
		str: 18,
		dex: 12,
		con: 17,
		intel: 8,
		wis: 11,
		cha: 5,
		gold: 0,
		equipment: []
	}

	// $scope.abilityBonus(ability)
});