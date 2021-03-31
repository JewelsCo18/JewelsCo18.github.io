console.log("the message is here!");

//global variable are useful in front end web 
// bc you can query the Chrome console for them
let theBody;

// pass the body of the DOM into a variable
theBody = document.querySelector("body");
// GET ELEMENT BY ID
// pass the button into a variable using it's id propety
let theButton = document.getElementById("myButton");
let theGif = document.getElementById('snoops'); 

// EVENT LISTENER
// add an event listener and function to trigger to that variable
theButton.addEventListener('click', myGreatFunction);

function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
}

//boolean to use later for snoopy gif
var dancingSideBySide = false; 

//this is a list that I put that will dictate the text within the button 
var list = ["HELLO", "THIS", "IS", "A", "BUTTON", "WELCOME", "TO", "WEB DEV", "THE BUTTON"]
var curr = 0; //will keep track of the current position within the list

function myGreatFunction(){
    console.log("clicked!");
    
    var randomBorder = getRandomNum(0,100); 
    var randomAngle = getRandomNum(0,180); 
    var randomColor1 = Math.floor(Math.random()*16777215).toString(16); //we want a hex code like #FFFFFF; 
    var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    var randomColor3 = Math.floor(Math.random()*16777215).toString(16);

    //I don't know why I added a random border size
    theButton.style.borderRadius = randomBorder.toString() + "px";

    //random colors for both the linear gradient background and the button background color
    theBody.style.backgroundImage = "linear-gradient(" + randomAngle.toString() + 'deg,#' + randomColor1 + ',#' + randomColor2 + ',#' + randomColor3 + ')'; 
    theButton.style.backgroundColor = "rgb(" + getRandomNum(0,255).toString() + ',' + getRandomNum(0,255).toString() + ',' + getRandomNum(0,255).toString() + ')'; 
    
    //here I'm determining whether snoopy goes left to right or up and down 
    if (dancingSideBySide == false){
        theGif.style.animation = "3s linear 0s infinite alternate move_leftRight"; 
        //will ensure a change in the direction by changing the boolean "dancingSideBySide"
        dancingSideBySide = true; 
    }
    else{
        theGif.style.animation = "3s linear 0s infinite alternate move_upDown"; 
        dancingSideBySide = false; 
    }

    //this will change the text and if the curr position is greater than the amount of items in the list then we reset to 0
    theButton.textContent = list[curr]; 
    curr++; 
    if (curr >= 8){
        curr = 0; 
    }
    
}

// Es6 arrow notiona
document.addEventListener('keydown', theEvent => {
    console.log("key pressed!");
    // theTxt.style.backgroundColor = "pink";

})