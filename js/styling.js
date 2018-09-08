


//menuStyling()
//This method 

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



window.highscoresSetup= function() {
    var labelheader = this.document.getElementById("highscoreslabel");


    //style the label header
    labelheader.style.textAlign = "center";




}

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

