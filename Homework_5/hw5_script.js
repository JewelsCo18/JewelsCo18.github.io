let flash = document.getElementById("firstBlock"); 
let block = document.getElementById("secondBlock"); 
let word = document.getElementById("word"); 

var currSat = 2;
var grey = 0; 
var currWord = 0; 
var travellingDown = true;  
var delay= 300; 
var audio = document.getElementById("myaudio");
audio.volume = 0.3;

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
    //console.log("Curr Grey:" + grey); 
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

function flashDark(){
    flash.style.filter = "saturate(0)";
    flash.style.backgroundColor = "black";
}

function flashLight(){
    flash.style.filter = "saturate(1)";
    flash.style.backgroundColor = "white";
}

function startChange(){
    setInterval(desaturate,delay); 
    setInterval(flashLight, 150); 
    setInterval(flashDark, 5000);  
}

window.onload = startChange; 

$(document).ready(function(){
    $("div").on('click', function(event) {
  
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){

          window.location.hash = hash;
        });
      }
    });
});



