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
    menuStyling();
    //Setup buttons on menu
    highscoresButtonMenu.addEventListener("click", showHighscores);
    gameButtonMenu.addEventListener("click", showGame);
    settingsButtonMenu.addEventListener("click", showSettings);
    instructionsButtonMenu.addEventListener("click", showInstructions);


    
}


function showMenu() {
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
        highscoresPage.appendChild(highscoresLabel);
        
    }
    //set the new page
    currentPage = highscoresPage;

    //show the page
    currentPage.classList.remove("hide");
}

function showGame() {
    //hide current page
    if (currentPage != null)
        currentPage.classList.add("hide");
        
    //check if the page hasn't been duplicated
    if (typeof window.gamePage === "undefined") {
        window.gamePage = createDiv();
        gamePage.classList.add("page");
        //
        
    }
    //set the new page
    currentPage = gamePage;

    //show the page
    currentPage.classList.remove("hide");
}
function showInstructions() {
    //hide current page
    if (currentPage != null)
        currentPage.classList.add("hide");
        
    //check if the page hasn't been duplicated
    if (typeof window.instructionsPage === "undefined") {
        window.instructionsPage = createDiv();
        instructionsPage.classList.add("page");
        //
        
    }
    //set the new page
    currentPage = instructionsPage;

    //show the page
    currentPage.classList.remove("hide");
}
function showSettings() {
    //hide current page
    if (currentPage != null)
        currentPage.classList.add("hide");
        
    //check if the page hasn't been duplicated
    if (typeof window.settingsPage === "undefined") {
        window.settingsPage = createDiv();
        settingsPage.classList.add("page");
        //
        
    }
    //set the new page
    currentPage = settingsPage;

    //show the page
    currentPage.classList.remove("hide");
}







//this ensures elements are loaded and accessible
window.onload = loadApplication;