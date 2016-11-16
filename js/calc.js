 var app = angular.module("Calculator", []);
 // Const
 var wood_for_frag = 5;
 var wood_for_sulfur = 2.5;
 var wood_for_hqm = 10;
 app.controller("calc", function($scope) {
     // Default values for selects and inputs
     $scope.frags = $scope.sulfur = $scope.hqm = 1
     $scope.frags_wood = 5;
     $scope.sulfur_wood = 2.5;
     $scope.hqm_wood = 10;
     $scope.slots = 1;
     // Listeners
     $scope.slotsChange = function() {
         $scope.fragsChange();
         $scope.sulfurChange();
         $scope.hqmChange();
     };
     $scope.fragsChange = function() {
         $scope.frags_wood = (wood_for_frag * $scope.frags) / $scope.slots;
     };
     $scope.fragsWoodChange = function() {
         $scope.frags = ($scope.slots * $scope.frags_wood) / wood_for_frag;
     };
     $scope.sulfurChange = function() {
         $scope.sulfur_wood = (wood_for_sulfur * $scope.sulfur) / $scope.slots;
     };
     $scope.sulfurWoodChange = function() {

     };
     $scope.hqmChange = function() {
         $scope.hqm_wood = (wood_for_hqm * $scope.hqm) / $scope.slots;
     };
     $scope.hqmWoodChange = function() {

     };
 });
