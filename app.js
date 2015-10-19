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
		str: 8,
		dex: 8,
		con: 8,
		intel: 8,
		wis: 8,
		cha: 8,
		gold: 0,
		equipment: []
	}

	// $scope.abilityBonus(ability)
});