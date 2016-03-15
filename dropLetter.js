 /*******************************************************************
  * Name   : DropLetter
  * Author : Hiroshi Goibuchi
  * ver    : 1.0.0
  *******************************************************************/
  
window.onload = function(){
	
	/*Decalare the function */
	function dropOutString(string,letterToDrop){
	
    /*Creat a new array to store the string*/
	var array = new Array();
	
    /*Store the length of the string*/
    var stringLength = string.length;
	
	/*Loop to drop the letter out*/
	for(var loop = 0; loop <= stringLength; loop++){
	
	    /*push each letters*/
	    array.push(string.substring(loop,loop+1));
   
        /*Find the letter then drop out*/
	    if(string.substring(loop,loop+1) == letterToDrop){
	        array.pop() ;
	    }
	}
	
	/*put the array back to a string with out commas*/
	var filteredRes = array.join("");
	document.getElementById("display").innerHTML = filteredRes;
	}
	
	document.getElementById("letterTobeDropped").onkeyup = function(){

	var theString = document.getElementById("theString").value;
	var letterTobeDropped = document.getElementById("letterTobeDropped").value;
	dropOutString(theString,letterTobeDropped);
	};
	
    /*CLICK EVENT*/
	document.getElementById("btn").addEventListener("click",function(){
	var theString = document.getElementById("theString").value;
	var letterTobeDropped = document.getElementById("letterTobeDropped").value;
	dropOutString(theString,letterTobeDropped);
	});
}
	
	