


/*
menuSetup does not have any parameters and does not return any values
menuSetup dynamically styles html elelments that were added in app.js (showMenu())
menuSetup is a global function
*/

window.menuSetup = function() {
    //get elements
    var flag = this.document.getElementById("flag");
    var welcomeHeader = this.document.getElementById("welcomeHeader");
    var buttons = this.document.getElementById("menuBody");
    window.instructionsButtonMenu = this.document.getElementById("Instructions");
    window.gameButtonMenu = this.document.getElementById("Game");
    window.highscoresButtonMenu = this.document.getElementById("High Scores");
    window.settingsButtonMenu = this.document.getElementById("Settings");
 
    //flag styling
    flag.style.width = "300px";
    flag.style.height = "auto";
    flag.style.display = "block";
    flag.style.marginLeft = "auto";
    flag.style.marginRight = "auto";

    //welcome header styling
    welcomeHeader.style.textAlign = "center";

    //general button styling     
    buttons.style.width = "300px";
    buttons.style.height = "100px";
    buttons.style.display = "grid";
    buttons.style.marginLeft = "auto";
    buttons.style.marginRight = "auto";
    highscoresButtonMenu.addEventListener("click", showHighscores);
    gameButtonMenu.addEventListener("click", showGame);
    settingsButtonMenu.addEventListener("click", showSettings);
    instructionsButtonMenu.addEventListener("click", showInstructions);
    
}


/*
highscoresSetup does not have any parameters or return any values
highscoresSetup is a global function that alligns the label to the center

*/
window.highscoresSetup = function() {
    var labelheader = this.document.getElementById("highscoreslabel");
    //style the label header
    labelheader.style.textAlign = "center";

}
/*
gameElementsSetup does not have any parameters or return any values
gameElementsSetup is a global function that creates global variables  for html elements
*/
window.gameElementsSetup = function() {
    //get elements
    window.directionPlaces = this.document.getElementById("directionPlaces");
    window.greetings = this.document.getElementById("greetings");
    window.numbers = this.document.getElementById("greetings");
    window.eatingOut = this.document.getElementById("eatingOut");
    window.exitButton = this.document.getElementById("gameExit");
    window.gamescoreDisplay = this.document.getElementById("gamescoreDisplay");
    
    console.log(exitButton);
    




    







}

