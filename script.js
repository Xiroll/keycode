// JavaScript Document


function keyCode(e) {
	
"use strict";	var keycodeContainer = document.getElementsByTagName('span')[0];
 	var keyContainer = document.getElementsByTagName('h1')[0];
 
 	keycodeContainer.innerHTML = e.keyCode;
 	keyContainer.innerHTML = e.key;
	
}

window.addEventListener('keydown', keyCode);