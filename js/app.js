//loadApplication is called when the window loads.
// It's purpose is to set up the web app for use by showing the menu screen.
//This method is only called by window.onload
function loadApplication() {
    //ensure currentPage is null as application is loading
    window.currentPage = null;
    //showMenu
    showMenu();
    //add menu to document
    document.body.appendChild(currentPage);
    //style the menu
    menuSetup();
    //Setup buttons on menu
    


    
}

 /* 
 What?
 Parameters?
 Return?
 showMenu() is a function that takes no parameters and does not return any values.
 It hides the current page, checks menuPage is undefined and then creates the elements required for the menu page.
 After adding elements, the new menu page will be set and then displayed.

 */ 
window.showMenu = function() {
    //hide current page
    if (currentPage != null)
        currentPage.classList.add("hide");
    //check if the page hasn't been duplicated
    if (typeof window.menuPage === "undefined") {
        window.menuPage = createDiv();
        menuPage.classList.add("page");
        //menupage contents go here
        header = createCustomElement("HEADER");
        //create heading
        welcomeLabel = createH1();
        var textNode = document.createTextNode("Welcome!");
        welcomeLabel.appendChild(textNode);
        welcomeLabel.id = "welcomeHeader";
        header.appendChild(welcomeLabel);
        //create spanish flag for the heading
        var img = createImg();
        img.src = "images/spanish_flag.png";
        img.id = "flag";
        
        //add spanish flag to header and then add header to menu
        header.appendChild(img);
        menuPage.appendChild(header);

        //create menu body where buttons will go
        menuBody = createDiv();
        menuBody.id = "menuBody";
        //create each button on the menu
        for (current = 0; current < menuButtons.length; current++) {
            
            button = createButton();
            var textNode = document.createTextNode(menuButtons[current]);
            button.appendChild(textNode);
            button.id = menuButtons[current];
            menuBody.appendChild(button);
        }
        menuPage.appendChild(menuBody);
        
        
    }
    //set the new page
    currentPage = menuPage;
    console.log(currentPage);

    //show the page
    currentPage.classList.remove("hide");
}
/* 

 showHighscores does not have any parameters and does not return any values.
 It displays the required HTML elelments for the highscores page.
 It loops through the highscores array to expose a highscores list by parsing the JSON stored in localStorage.
 The reason why JSON was used to store an array in localSTorage is
 because json is a string and localSTorage can only save key value paris in strings.
 The highscores page is then set and displayed.
 */ 

function showHighscores() {
    //hide current page
    if (currentPage != null)
        currentPage.classList.add("hide");
        
    //check if the page hasn't been duplicated
    if (typeof window.highscoresPage === "undefined") {
        window.highscoresPage = createDiv();
        highscoresPage.classList.add("page");
        //highscorespage contents go here
        var highscoresDiv = createDiv();
        highscoresDiv.id = "highscoresDiv";
        highscoresLabel = window.createH1();
        var textNode = document.createTextNode("Highscores!");
        highscoresLabel.appendChild(textNode);
        highscoresLabel.id = "highscoreslabel";
        highscoresDiv.appendChild(highscoresLabel);
        //loop through highscores
        var highscoresStore = JSON.parse(localStorage.getItem("highscores"));
        console.log(highscoresStore);
        var highscoresElement = createDiv();
        highscoresElement.id = "highscoresElement";
        for (current =0; current < highscoresStore.length; current++) {
            var d = createDiv();
            var textNode = document.createTextNode(highscoresStore[current][0] + " - " + highscoresStore[current][1]);
            d.appendChild(textNode);
            highscoresElement.appendChild(d);
        }
        highscoresDiv.appendChild(highscoresElement);
        var highscoresBackButton = createCustomButton("highscoresBackButton", "Back");
        highscoresDiv.appendChild(highscoresBackButton);
        highscoresPage.appendChild(highscoresDiv);
        //add menu button functionality
        highscoresBackButton.onclick = function() {
            showMenu();
        }

        
    }
    //set the new page
    currentPage = highscoresPage;

    //show the page
    currentPage.classList.remove("hide");
    document.body.appendChild(currentPage);
    
}



/* 
 What?
 Parameters?
 Return?
 showGame() does not return any values or take any parameters
 showGame() sets up the HTML elelments and sets up button functionality.
 It appends treasurechest imgages to the screen and sets and displays the mneu page.


 */ 
function showGame() {
    //hide current page
    if (currentPage != null)
        currentPage.classList.add("hide");
        
    //check if the page hasn't been duplicated
    if (typeof window.gamePage === "undefined") {
        window.gamePage = createDiv();
        


        gamePage.classList.add("page");
        window.gamescoreDisplay = createParagraph();
        gamescoreDisplay.id = "gamescoreDisplay";
        gamescoreDisplay.innerHTML = "Gamescore: ";
        gamePage.appendChild(gamescoreDisplay);
        window.gameExit = createButton();
        gameExit.id = "gameExit";
        gameExit.innerHTML = "Exit";
        gamePage.appendChild(gameExit);
        //Anoymous function is assigned to the game exit button on click.
        //The score is saved, current word displayed is removed and menu is show.ß
        gameExit.onclick = function() {
            
            saveScore();
            //remove current word in preperations for next game
            var dragWord = document.getElementById("draggableWord");
            if (dragWord != null) {
                document.getElementById("draggableWord").remove();
            }
            //remove gamescoreDisplay
            var gamescoreElement = document.getElementById("gamescoreDisplay");
            if (gamescoreElement != null) {
                document.getElementById("gamescoreDisplay").remove();
            }
            //level is reset to 0
            level = 0;
            //show menu
            showMenu();
        };
        
        //Create treasure chests for each corner
        var treasureChestLocation = "images/treasure_chest.png";
        
        //treasurechests ares setup and appended to the gamePage
        gamePage.appendChild(createContainerWithChest("chest1", treasureChestLocation, "Direction and Places", "directionPlaces"));
        gamePage.appendChild(createContainerWithChest("chest2", treasureChestLocation, "Greetings", "greetings"));
        gamePage.appendChild(createContainerWithChest("chest3", treasureChestLocation, "Numbers", "numbers"));
        gamePage.appendChild(createContainerWithChest("chest4", treasureChestLocation, "Eating Out", "eatingOut"));

    }
    //set the new page
    currentPage = gamePage;

    //show the page
    currentPage.classList.remove("hide");
    document.body.appendChild(currentPage);
    gameEngine.beginGame();
}

/* 

 showInstructions does not take any parameters or return any values.
 This function adds elements to the pgae and created button functionality
 It then sets and displays the instructions page
 
 */ 

function showInstructions() {
    //hide current page
    if (currentPage != null)
        currentPage.classList.add("hide");
        
    //check if the page hasn't been duplicated
    if (typeof window.instructionsPage === "undefined") {
        window.instructionsPage = createDiv();
        instructionsPage.classList.add("page");
        var instructionsPageElements = [];
        //push reuseable ui components to array
        instructionsPageElements.push(createCustomLabelH1("instructionsLabel", "Instructions"));
        instructionsPageElements.push(createCustomParagraph("instructionsParagraph", InstructionsString));
        instructionsPageElements.push(createCustomButton("playButton", "Play Now"));
        instructionsPageElements.push(createCustomButton("menuButton", "Menu"));
        
        var instructionsDiv = createDiv();
        instructionsDiv.id = "instructionsDiv";
        //loop over each element in the instructionsPageElements which holds
        //html elements, if the element is a button, 
        //then add the correct method to redirect the user to a new page
        //also add html elelments to the div
        for (current=0; current < instructionsPageElements.length; current++) {
            if (current == 2) {
                instructionsPageElements[current].onclick = function() {
                    showGame();
                }
            }
            if (current == 3) {
                instructionsPageElements[current].onclick = function() {
                    showMenu();
                }
            }
            instructionsDiv.appendChild(instructionsPageElements[current]);
        }
        //append div of instruction html elements to instructionsPage
        instructionsPage.appendChild(instructionsDiv);

       

        
        
        
    }
    //set the new page
    currentPage = instructionsPage;

    //show the page
    currentPage.classList.remove("hide");
    document.body.appendChild(currentPage);
}
/* 
 showSettings() does not take any parameters or return any values
 showSettings() ses up HTML elements for the settings page.
 It also loads session settings that have been saved previously.
 It then sets and displays the settings page with session saved settings.
 
 */ 
function showSettings() {
    //hide current page
    if (currentPage != null)
        currentPage.classList.add("hide");
        
    //check if the page hasn't been duplicated
    if (typeof window.settingsPage === "undefined") {
        window.settingsPage = createDiv();
        settingsPage.classList.add("page");
        var settingsPageElements = [];
        var settingsContainer = createDiv();
        settingsContainer.id = "settingsContainer";
        //push elements to array
        settingsPageElements.push(createCustomLabelH1("settingsLabel", "Settings"));
        settingsPageElements.push(createCustomCheckbox("soundCheckbox", "Sound"));
        settingsPageElements.push(createCustomLabel("checkboxLabel", "Sound", "soundCheckbox"));
        settingsPageElements.push(createCustomTextBox("userTextbox", settings.currentUser));
        settingsPageElements.push(createCustomButton("saveButton", "Save"));
        settingsPageElements.push(createCustomButton("backButton", "Back"));
        //check is sound is loaded
        if (settings.loaded) {
            document.getElementById("soundCheckbox").checked = settings.sound;
        }
        var settingsDiv = createDiv();
        settingsDiv.id = "settingsDiv";
        //loop over settingsPageElements
        for (current=0; current < settingsPageElements.length; current++) {
            if (current == 4) {
                settingsPageElements[current].onclick = function() {
                    //save
                    var b = document.getElementById("userTextbox");
                    settings.currentUser = b.value;
                    settings.loaded = true;
                    //check if soundcheckbox is checked
                    if (document.getElementById("soundCheckbox").checked) {
                        settings.sound = true;

                    } else {
                        settings.sound = false;
                    }
                }
            }
            //add menu button functionality
            if (current == 5) {
                settingsPageElements[current].onclick = function() {
                    showMenu();
                }
            }
            var newDiv = createDiv();
            newDiv.appendChild(settingsPageElements[current]);
            settingsDiv.appendChild(newDiv);
            
            
        }
        settingsPage.appendChild(settingsDiv);
    }
    //set the new page
    currentPage = settingsPage;

    //show the page
    currentPage.classList.remove("hide");
    document.body.appendChild(currentPage);
}







//this ensures elements are loaded and accessible
window.onload = loadApplication;