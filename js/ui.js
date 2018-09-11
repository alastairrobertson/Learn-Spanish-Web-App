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
window.createChest = function(src, id) {
	var element = createImg();
	element.src = src;
	element.id = id;
	return element;
	


}
window.createCustomButton = function(id, text) {
	var element = createButton();
	element.id = id;
	var t = document.createTextNode(text);
	element.appendChild(t);
	return element;
}
window.createCustomParagraph = function(id, text) {
	var element = createParagraph();
	element.id = id;
	var t = this.document.createTextNode(text);
	element.appendChild(t);
	return element;
}
window.createCustomLabel = function(id, text) {
	var element = createH1();
	element.id = id;
	var t = this.document.createTextNode(text);
	element.appendChild(t);
	return element;

}
window.createInstructionsElements = function() {
	var instructionsPlayButton = createButton();
	var instructionsExitButton = createButton();
	var instructionsText = createParagraph();
	var instructionsLabel = createH1();

}
window.createCustomTextBox = function(id, text) {
	var element = createInput();
	element.id = id;
	var t = this.document.createTextNode(text);
	element.appendChild(t);
	return element;
}
window.createCustomCheckbox = function(id, text) {
	var element = createCustomElement("input");
	element.type = "checkbox";
	//element.name = "name";
	element.value = text;
	element.id = id;
	return element
}
window.createCustomLabel = function(id, text, checkboxID) {
	element = createCustomElement("label");
	element.id = id;
	element.htmlFor = checkboxID;
	element.appendChild(this.document.createTextNode(text));
	return element;



}



