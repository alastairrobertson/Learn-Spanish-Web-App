window.gameEngine = {};

window.gameEngine.newWord = function() {
    randomNumber = Math.floor((Math.random() * gameData.length) + 1);
    console.log(randomNumber);
    return gameData[randomNumber - 1];

}
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

 

function displayNewWord() {
    if (settings.sound) {
        console.log("correct sound");
        var correctAudio = new Audio("sounds/correct.wav");
        correctAudio.play();
    }
    document.getElementById("draggableWord").remove();
    wordObject = null;
    p = null;
    t = null;
    wordObject = gameEngine.newWord();
    p = createParagraph();
    p.id = "draggableWord";
    //p.removeC
    t = document.createTextNode(wordObject.WordOrSentence)
    p.appendChild(t);
    gamePage.appendChild(p);
    
    word = document.getElementById("draggableWord");
    word.setAttribute("draggable", "true");
}


function successfulDrag(targ, wordObj, wordElement) {
    if (targ.id == wordObj.Category) {
        console.log("we got a match");
        
        
        
        //s
        successfulCount++;
        wordElement.style.visiblity = "hidden";
        if (successfulCount > 1) {
            bonusScore = 2;
        }

        userScore = (bonusScore * 1) + userScore;
        var scoreDisplay = document.getElementById("gamescoreDisplay");
        console.log(scoreDisplay);

        document.body.classList.add("success");
        setTimeout(function() {
            document.body.classList.remove("success");
        }, 1000 * 3);
        

        scoreDisplay.innerHTML = null;
        scoreDisplay.innerHTML = "Gamescore: " + userScore;
        console.log(scoreDisplay.innerHTML);
        console.log("__________________________________________________");
        console.log(document.getElementById("draggableWord").childNodes[0]);
        
        p = createParagraph();
        t = document.createTextNode("Last correct word translation: " + wordObj.Translation);
        p.appendChild(t);
        scoreDisplay.appendChild(p);
        ///////////////
        //////////////
        

        //////////////
        /////////////
        displayNewWord();


    }
    else {
        if (settings.sound) {
            console.log("incorrect sound");
            var incorrectAudio = new Audio("sounds/incorrect.wav");
            incorrectAudio.play();
        }
        //count restart
        successfulCount = 0;
        //bonus score multiplier restarted
        bonusScore = 1;
        document.body.classList.add("fail");
        setTimeout(function() {
            document.body.classList.remove("fail");
        }, 1000 * 3);
        


    }
}


window.gameEngine.beginGame = function() {
    //make each chest a target
    var directionPlaces = document.getElementById("directionPlaces");
    var greetings = document.getElementById("greetings");
    var numbers = document.getElementById("numbers");
    var eatingOut = document.getElementById("eatingOut");
    

   



    ////
    //display first word
    //displayNewWord();
    wordObject = gameEngine.newWord();
    p = createParagraph();
    p.id = "draggableWord";
    t = document.createTextNode(wordObject.WordOrSentence)
    p.appendChild(t);
    console.log("wahoo");
    console.log(gamePage);
    gamePage.appendChild(p);
    console.log(gamePage);
    
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
        
        




        
    }, false);

    /* events fired on the drop targets */
    document.addEventListener("dragover", function( event ) {
        
        // prevent default to allow drop
        event.preventDefault();
    }, false);

    document.addEventListener("dragenter", function( event ) {
        console.log("dragcenter");

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
        successfulDrag(event.target, wordObject, word);
        
        
        

        
        
    }, false);
        


}



