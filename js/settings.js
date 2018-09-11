//This JS file stores settings of the game
window.settings = {};
window.settings.currentUser = "user1";
window.userScore = 0;
window.successfulCount = 0;
window.bonusScore = 1;
window.menuButtons = ["Instructions", "Game", "High Scores", "Settings"];
window.highscoresStore = {"user1":0, "user2":0, "user3":0};
window.InstructionsString = "Welcome to this spanish learning web app! " +
                            "This app is designed to be be a fun activity for learning spanish. " +
                            "It is estimated that more than 437 million people speak Spanish as a native language, " + 
                            "which qualifies it as second on the lists of languages by number of native speakers. " +
                            "To play the game press the Play Now button. " +
                            "When you are in the game you will notice there are four chests at each corner of the screen, " +
                            "these are your targets. You will also notice at the center top of the screen there is your gamescore. " +
                            "In the middle of the screen you will see a word or setence in spanish, this word needs to be dragged to a chest/target" +
                            "that represents the category of the word. If you are incorrect, the screen will flash red. " +
                            "If your drag is correct, the screen will flash a brighter green colour and your gamescore will be updated, " +
                            "along with the Last correct word translation being display under the gamescore. " +
                            "If you get two correct drags in a row, you will activate bonuscore which doubles the points you get on a correct drag streak. " +
                            "";


