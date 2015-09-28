'use strict';

/* Filters */

angular.module('phonecatFilters', [])
	.filter('checkmark', function() {
  		return function(input) {
    		return input ? '\u2713' : '\u2718';
  		};
	})
	.filter('checkSeconds', function(){
  		return function(inputSeconds){
    	var minutes = 0;
    	var seconds = 0;
    	var result = 0;
    	if(inputSeconds<=60){
		      result = inputSeconds + "秒";
		    }
		    else{
		      minutes = parseInt(inputSeconds / 60);
		      seconds = inputSeconds % 60;
		      result = minutes + "'" + seconds +"''";
		    }
		    return result;
		  }
		});

