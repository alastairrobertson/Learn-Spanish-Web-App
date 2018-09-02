//loadApplication is called when the window loads.
//
function loadApplication() {
    console.log("loadApplication() called");
    window.currentPage = null;

    
    //showMenu
    showMenu();
    
    
    document.body.appendChild(currentPage);
    menuStyling();
    
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
        


        welcomeLabel = window.createH1();
        t = document.createTextNode("Welcome!");
        welcomeLabel.appendChild(t);
        welcomeLabel.id = "welcomeHeader";
        header.appendChild(welcomeLabel);


       

        var img = createImg();
        img.src = "images/spanish_flag.png";
        img.id = "flag";
        

        header.appendChild(img);
        menuPage.appendChild(header);
        
        

        
        
        
       

        
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







//this ensures elements are loaded and accessible
window.onload = loadApplication;