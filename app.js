(function(){

	'use strict';


  	angular.module('CharacterCalculatorApp', [])
  	.controller('CharacterCalculatorController', CharacterCalculatorController);

  	function CharacterCalculatorController($scope){

  		$scope.myText ='';
  		$scope.reset = function(){
  			$scope.myText = '';
  		}
      
  		$scope.countOfWords = function(text){
  			if(text){
  				var matcher = text.match(/\b[-?(\w+)?]+\b/gi);
  				console.log(matcher);
  				return matcher ? matcher.length : 0;
  			}else{
  				return 0;
  			}
  		}
  	}

})();













