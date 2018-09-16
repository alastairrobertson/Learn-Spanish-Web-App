// ui.js
// This file is where we keep commands to create HTML elements
// All of these methods return a Element

/* 
 This function takes no parameters but returns the newly created paragraph html element
 It is a a global function.
 */ 
window.createParagraph = function() {
	return document.createElement("P");
	
}
/* 
 This function takes no parameters but returns the newly created header1 html element
 It is a a global function.
 */ 
window.createH1 = function() {
	return document.createElement("H1");
}
/* 
 This function takes no parameters but returns the newly created header2 html element
 It is a a global function.
 */ 
window.createH2 = function() {
	return document.createElement("H2");
}
/* 
 This function takes no parameters but returns the newly created header3 html element
 It is a a global function.
 */ 
window.createH3 = function() {
	return document.createElement("H3");
}
/* 
 This function takes no parameters but returns the newly created div html element
 It is a a global function.
 */ 
window.createDiv = function() {
	return document.createElement("DIV");
}
/* 
 This function takes no parameters but returns the newly created span html element
 It is a a global function.
 */ 
window.createSpan = function() {
	return document.createElement("SPAN");
}
/* 
 This function takes no parameters but returns the newly created button html element
 It is a a global function.
 */ 
window.createButton = function() {
	return document.createElement("BUTTON");
	
}
/* 
 This function takes no parameters but returns the newly created textinput html element
 It is a a global function.
 */ 
window.createInput = function() {
	return document.createElement("TEXTINPUT");
}
/* 
 This function takes no parameters but returns the newly created image html element
 It is a a global function.
 */ 
window.createImg = function() {
	return document.createElement("IMG");
}
//You can create a custom elelment by passing in a parameter that will be the element name
/* 
 This function takes one parameter, which is the string element name and returns the newly created span html element
 It is a a global function.
 */ 
window.createCustomElement = function(customElement) {
	return document.createElement(customElement);
}
/* 
 This function creates a treasure chest element
 It has two parameters, src is a string path of the treasure chest image location and id is a string that will be used as the chests id.
 It returns the newely created chest image.
 It is a a global function.
 */ 
window.createChest = function(src, id) {
	var element = createImg();
	element.src = src;
	element.id = id;
	return element;
	


}
/* 
 This function takes two parameters, id which is used for the custom buttons html id as a string 
 and text which is a string that represents that the button text will display.
 It returns the newely created button element
 It is a a global function.
 */ 
window.createCustomButton = function(id, text) {
	var element = createButton();
	element.id = id;
	var textNode = document.createTextNode(text);
	element.appendChild(textNode);
	return element;
}
/* 
 This function takes two parameters, id which is used for the custom paragraph html id as a string 
 and text which is a string that represents that the paragraph text will display.
 It returns the newely created paragraph element
 It is a a global function.
 */ 
window.createCustomParagraph = function(id, text) {
	var element = createParagraph();
	element.id = id;
	var textNode = this.document.createTextNode(text);
	element.appendChild(textNode);
	return element;
}
/* 
 This function takes two parameters, id which is used for the custom header1 html id as a string 
 and text which is a string that represents that the header1 text will display.
 It returns the newely created header1 element
 It is a a global function.
 */ 
window.createCustomLabelH1 = function(id, text) {
	var element = createH1();
	element.id = id;
	var textNode = this.document.createTextNode(text);
	element.appendChild(textNode);
	return element;

}
/* 
 createInstructionsElements take no parameters and returns no values.
 This function creates two buttons, one paragraph and one header1 html elements
It is a a global function.
 */ 
window.createInstructionsElements = function() {
	var instructionsPlayButton = createButton();
	var instructionsExitButton = createButton();
	var instructionsText = createParagraph();
	var instructionsLabel = createH1();

}
/* 
 createCustomTextBox takes two parameters, id is a string that is used for the new input element id and
 text is a string that represents that the input html element will display
 The input elelment then is returned  
 It is a a global function.
 */ 
window.createCustomTextBox = function(id, text) {
	var element = createCustomElement("input");
	element.type = "text";
	element.value = text;
	element.id = id;
	var textNode = this.document.createTextNode(text);
	element.appendChild(textNode);
	return element;
}
/* 
 createCustomTextBox takes two parameters, id is a string that is used for the new checkbox element id and
 text is a string that represents that the checkbox html element will display
 The checkbox elelment then is returned 
 It is a a global function.
 */ 
window.createCustomCheckbox = function(id, text) {
	var element = createCustomElement("input");
	element.type = "checkbox";
	//element.name = "name";
	element.value = text;
	element.id = id;
	return element
}
/* 
 createCustomTextBox takes two parameters, id is a string that is used for the new label element id and
 text is a string that represents what will be displayed on the lebel.
 checkboxId is a string that represents the associated checkbox html elelment id that this label needs to be associated with.
 The input elelment then is returned 
 It is a a global function.
 */ 
window.createCustomLabel = function(id, text, checkboxID) {
	element = createCustomElement("label");
	element.id = id;
	element.htmlFor = checkboxID;
	element.appendChild(this.document.createTextNode(text));
	return element;



}
/* 
 createContainerWithChest takes four parameters
 containerID is a string to represent the id on the container
 treasureChestLocation is a string with the src location of the chest
 textNode is a string that represents what text will be displayed
 id is a string that is used for the elelment html id
 The function returns the container element containing the chest, paragraph and text
 It is a a global function.
 */ 
window.createContainerWithChest = function(containerID, treasureChestLocation, textNode, id) {
	var chestImage = createChest(treasureChestLocation, id);
    var paragraph = createParagraph();
    paragraph.id = id;
    var text = document.createTextNode(textNode);
    var container = createDiv();
    container.id = containerID;
    paragraph.appendChild(text);
    container.appendChild(chestImage);
    container.appendChild(paragraph);
    return container;

}



