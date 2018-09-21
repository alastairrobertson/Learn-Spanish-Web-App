
//settings is a object that is used as a namespace for data organisation
window.settings = {};
//currentUser is a string that stores the current username being used in the game, it is updated in the settings page
window.settings.currentUser = "user1";
//loaded 
window.settings.loaded = false;
//sound is a boolean value that dictates if sound is to be used
window.settings.sound = false;
//userScore is a integer value that tracks the current game score
window.userScore = 0;
//succssfulCount counts the number of times during a game that a user gets the correct drags in a row
window.successfulCount = 0;
//bonusScore is a integer that tracks if bonus score is activated, the value will be two if it is activated
window.bonusScore = 1;
//menuButtons is an array of strings that represent the menu buttons, this array will be looped over to display menu buttons
window.menuButtons = ["Instructions", "Game", "Highscores", "Settings"];

window.InstructionsString = "Welcome to this spanish learning web app! " +
                            "This app is designed to be be a fun activity for learning spanish. " +
                            "It is estimated that more than 437 million people speak Spanish as a native language, " + 
                            "which qualifies it as second on the list of languages by number of native speakers. " +
                            "To play the game press the Play Now button. " +
                            "When you are in the game you will notice there are four chests at each corner of the screen, " +
                            "these are your targets. You will also notice at the center top of the screen there is your gamescore. " +
                            "In the middle of the screen you will see a word or setence in spanish, this word needs to be dragged to a chest/target" +
                            "that represents the category of the word. If you are incorrect, the screen will flash red. " +
                            "If your drag is correct, the screen will flash a brighter green colour and your gamescore will be updated, " +
                            "along with the Last correct word translation being display under the gamescore. " +
                            "If you get two correct drags in a row, you will activate bonuscore which doubles the points you get on a correct drag streak. " +
                            "" +
                            "";
window.legalString = "Legal: All images used are licensed under CC0 Creative Commons. " +
                     "Attribution is not required as part of the license.";

/*
saveScore take no parameters and does not return any values
saveScore tries to get highscores data from localStoage
it also ensures that the highscores is decsending by score
and all scoring data is reset for the next gane
It is a global function 
*/
window.saveScore = function() {
    if (this.localStorage.getItem("highscores") === null) {
        //local storage could not find highscores
        //we now create a new highscores
        var vArray = [];
        vArray.push([settings.currentUser, userScore]);
        
        this.localStorage.setItem("highscores", JSON.stringify(vArray));
        
    } else {
        //localstorage item was detected
        var highscores = JSON.parse(this.localStorage.getItem("highscores"));
        console.log(typeof highscores);
        console.log(highscores);
        console.log(highscores.length);
        //loop over highscores
        for (item = 0; item < highscores.length; item++) {
            //check if current user score is larger than highscores store
            if (highscores[item][1] < userScore) {
                var vArray = [settings.currentUser, userScore];       
                console.log(settings.currentUser);
                console.log(userScore);
                highscores.splice(item, 0, vArray);
                this.localStorage.setItem("highscores", JSON.stringify(highscores));
                break;
            }
        }
    }
    //reset score 
    userScore = 0;
    successfulCount = 0;
    bonusScore = 1;
}


