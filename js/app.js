//loadApplication is called when the window loads.
// It's purpose is to set up the web app for use by showing the menu screen.
//This method is only called by window.onload
function loadApplication() {
    
    window.currentPage = null;
    //showMenu
    showMenu();
    //add menu to document
    document.body.appendChild(currentPage);
    //style the menu
    menuSetup();
    //Setup buttons on menu
    


    
}


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
        t = document.createTextNode("Welcome!");
        welcomeLabel.appendChild(t);
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
        for (i = 0; i < menuButtons.length; i++) {
            
            button = createButton();
            var t = document.createTextNode(menuButtons[i]);
            button.appendChild(t);
            button.id = menuButtons[i];
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

function showHighscores() {
    //hide current page
    if (currentPage != null)
        currentPage.classList.add("hide");
        
    //check if the page hasn't been duplicated
    if (typeof window.highscoresPage === "undefined") {
        window.highscoresPage = createDiv();
        highscoresPage.classList.add("page");
        //highscorespage contents go here
        highscoresLabel = window.createH1();
        t = document.createTextNode("Highscores!");
        highscoresLabel.appendChild(t);
        highscoresLabel.id = "highscoreslabel";
        highscoresPage.appendChild(highscoresLabel);
        
    }
    //set the new page
    currentPage = highscoresPage;

    //show the page
    currentPage.classList.remove("hide");
    document.body.appendChild(currentPage);
    
}
function createContainerWithChest(containerID, treasureChestLocation, textNode, id) {
    var chestImage = createChest(treasureChestLocation, id);
    var p = createParagraph();
    p.id = id;
    var t = document.createTextNode(textNode);
    var container = createDiv();
    container.id = containerID;
    p.appendChild(t);
    container.appendChild(chestImage);
    container.appendChild(p);
    return container;
}

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
        gameExit.onclick = function() {
            //maybe save score or something

            //show menu
            showMenu();
        };
        
        //Create treasure chests for each corner
        var treasureChestLocation = "images/treasure_chest.png";
        
        
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
        instructionsPageElements.push(createCustomLabel("instructionsLabel", "Instructions"));
        instructionsPageElements.push(createCustomParagraph("instructionsParagraph", InstructionsString));
        instructionsPageElements.push(createCustomButton("playButton", "Play Now"));
        instructionsPageElements.push(createCustomButton("menuButton", "Menu"));
        
        var instructionsDiv = createDiv();
        instructionsDiv.id = "instructionsDiv";
        //loop over each element in the instructionsPageElements which holds
        //html elements, if the element is a button, 
        //then add the correct method to redirect the user to a new page
        //also add html elelments to the div
        for (i=0; i < instructionsPageElements.length; i++) {
            if (i == 2) {
                instructionsPageElements[i].onclick = function() {
                    showGame();
                }
            }
            if (i == 3) {
                instructionsPageElements[i].onclick = function() {
                    showMenu();
                }
            }
            instructionsDiv.appendChild(instructionsPageElements[i]);
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
        //settingsContainer.appendChild(createCustomCheckbox("soundCheckbox", "Sound"));
        //settingsContainer.appendChild(createCustomLabel("checkboxLabel", "Sound", "soundCheckbox"));
        settingsPageElements.push(createCustomLabel("settingsLabel", "Settings"));
        settingsPageElements.push(createCustomCheckbox("soundCheckbox", "Sound"));
        settingsPageElements.push(createCustomLabel("checkboxLabel", "Sound", "soundCheckbox"));
        settingsPageElements.push(createCustomButton("saveButton", "Save"));
        settingsPageElements.push(createCustomButton("backButton", "Back"));
        // createCustomCheckbox("soundCheckbox", "Sound");
        // createCustomLabel("checkboxLabel", "Sound", "soundCheckbox");
        var settingsDiv = createDiv();
        settingsDiv.id = "settingsDiv";
        for (i=0; i < settingsPageElements.length; i++) {
            if (i == 3) {
                settingsPageElements[i].onclick = function() {
                    //save
                }
            }
            if (i == 4) {
                settingsPageElements[i].onclick = function() {
                    showMenu();
                }
            }
            settingsDiv.appendChild(settingsPageElements[i]);
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