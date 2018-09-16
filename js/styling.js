


/*
menuSetup does not have any parameters and does not return any values
menuSetup dynamically styles html elelments that were added in app.js (showMenu())
menuSetup is a global function
*/

window.menuSetup = function() {
    //get elements 
    window.instructionsButtonMenu = this.document.getElementById("Instructions");
    window.gameButtonMenu = this.document.getElementById("Game");
    window.highscoresButtonMenu = this.document.getElementById("Highscores");
    window.settingsButtonMenu = this.document.getElementById("Settings");
 
    //add events to buttons 
    highscoresButtonMenu.addEventListener("click", showHighscores);
    gameButtonMenu.addEventListener("click", showGame);
    settingsButtonMenu.addEventListener("click", showSettings);
    instructionsButtonMenu.addEventListener("click", showInstructions);
    
}





