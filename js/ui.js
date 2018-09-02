// ui.js
// This file is where we keep commands to create HTML elements
// All of these methods return a Element
window.createParagraph = function() {
	return document.createElement("P");
	
}
window.createH1 = function() {
	return document.createElement("H1");
}
window.createH2 = function() {
	return document.createElement("H2");
}
window.createH3 = function() {
	return document.createElement("H3");
}
window.createDiv = function() {
	return document.createElement("DIV");
}
window.createSpan = function() {
	return document.createElement("SPAN");
}
window.createButton = function() {
	return document.createElement("BUTTON");
	
}
window.createInput = function() {
	return document.createElement("TEXTINPUT");
}
window.createImg = function() {
	return document.createElement("IMG");
}
//You can create a custom elelment by passing in a parameter that will be the elelement name
window.createCustomElement = function(customElement) {
	return document.createElement(customElement);
}


