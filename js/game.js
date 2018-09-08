window.gameEngine = {};

window.gameEngine.newWord = function() {
    randomNumber = Math.floor((Math.random() * gameData.length) + 1);
    console.log()
    return gameData[randomNumber];

}
function correctDrag(targ, wordObj) {
    if (targ.id == wordObj.Category) {
        console.log("we got a match");
        successfulCount++;

    }
    else {
        //count restart
        successfulCount = 0;
        //bonus score multiplier restarted
        bonusScore = 1;
    }
}


window.gameEngine.beginGame = function() {
    //make each chest a target
    var directionPlaces = document.getElementById("directionPlaces");
    var greetings = document.getElementById("greetings");
    var numbers = document.getElementById("numbers");
    var eatingOut = document.getElementById("eatingOut");

   



    ////
    //display new word
    
    wordObject = gameEngine.newWord();
    p = createParagraph();
    p.id = "draggableWord";
    t = document.createTextNode(wordObject.WordOrSentence)
    p.appendChild(t);
    gamePage.appendChild(p);
    
    word = document.getElementById("draggableWord");
    word.setAttribute("draggable", "true");
    
    
    
    var dragged;

    /* events fired on the draggable target */
    document.addEventListener("drag", function( event ) {
        console.log("drag");

    }, false);

    document.addEventListener("dragstart", function( event ) {
        console.log("dragstart");
        // store a ref. on the dragged elem
        dragged = event.target;
        //event.target.style.visibility = "hidden";
    }, false);

    document.addEventListener("dragend", function( event ) {
        console.log("dragend");
        // reset the transparency
        //event.target.style.opacity = "";
        
        //maybe create a new word here and display
        //os restart loop




        
    }, false);

    /* events fired on the drop targets */
    document.addEventListener("dragover", function( event ) {
        console.log("dragover");
        // prevent default to allow drop
        event.preventDefault();
    }, false);

    document.addEventListener("dragenter", function( event ) {
        console.log("dragcenter");
        // highlight potential drop target when the draggable element enters it
        if ( event.target.className == "dropzone" ) {
            event.target.style.background = "purple";
        }

    }, false);

    document.addEventListener("dragleave", function( event ) {
        console.log("dragleave");
       

    }, false);

    document.addEventListener("drop", function( event ) {
        // prevent default action (open as link for some elements)
        console.log("drop");
        event.preventDefault();
        // move dragged elem to the selected drop target
        console.log(event);
        console.log(event.target);
        console.log(event.target.id);
        console.log(wordObject);
        correctDrag(event.target, wordObject);
        if ( event.target.className == "dropzone" ) {
            event.target.style.background = "";
            dragged.parentNode.removeChild( dragged );
            event.target.appendChild( dragged );
        }

        
        
    }, false);
        


}



