let block = document.getElementById("secondBlock"); 
let word = document.getElementById("word"); 

var currSat = 2;
var grey = 0; 
var currWord = 0; 
var travellingDown = true;  

var delay= 300; 

var words = [ 
    "personal", 
    "political", 
    "economic", 
    "aesthetic", 
    "psychological", 
    "moral",
    "ethical", 
    "social", 
    "consequences", 
    "untouched",
    "unaffected", 
    "unaltered",
    "pervasive"]; 

function desaturate() {
    // console.log("Curr Sat: " + currSat); 
    console.log("Curr Grey:" + grey); 
    block.style.filter = "saturate(" + currSat + ')';
    word.style.color = "rgb(" + grey + ',' + grey + ',' + grey + ')';  
    if (travellingDown == true){
        currSat -= 0.1; 
        grey += 20; 
    }
    else{
        currSat += 0.1; 
        grey -= 20; 
        word.textContent = words[currWord]; 
        if (currWord >= 12){
            currWord = 0; 
        }
    }
    
    if (currSat <= 0){
        travellingDown = false; 
        currWord += 1; 
    }
    else if (currSat >= 2){
        travellingDown = true; 
    }
};

function startChange(){
    setInterval(desaturate,delay); 
}

window.onload = startChange; 


