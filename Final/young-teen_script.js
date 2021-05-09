videos = [
    "https://www.youtube.com/embed/btjZSN_MsoA?autoplay=1&", 
    "https://www.youtube.com/embed/S9yfM5OrpKU?autoplay=1&", 
    "https://www.youtube.com/embed/sfNTHNwgRIM?autoplay=1&",
    "https://www.youtube.com/embed/Qek2jOHRGXY&t=149s?autoplay=1&", 
    "https://www.youtube.com/embed/nmGK-ZDHtp8?autoplay=1&", 
    "https://www.youtube.com/embed/K_7To_y9IAM?autoplay=1&",

    "https://www.youtube.com/embed/hmE9f-TEutc?autoplay=1&", 
    "https://www.youtube.com/embed/3UGMDJ9kZCA?autoplay=1&", 
    "https://www.youtube.com/embed/2S24-y0Ij3Y?autoplay=1&", 
    "https://www.youtube.com/embed/Oz3mm3tPKfg?autoplay=1&", 
    "https://www.youtube.com/embed/6uJf2IT2Zh8?autoplay=1&", 
    "https://www.youtube.com/embed/BS7tz2rAOSA?autoplay=1&", 

    // "https://www.youtube.com/embed/btjZSN_MsoA", 
    // "https://www.youtube.com/embed/S9yfM5OrpKU", 
    // "https://www.youtube.com/embed/sfNTHNwgRIM",
    // "https://www.youtube.com/embed/Qek2jOHRGXY&t=149s", 
    // "https://www.youtube.com/embed/nmGK-ZDHtp8", 
    // "https://www.youtube.com/embed/K_7To_y9IAM",

    // "https://www.youtube.com/embed/hmE9f-TEutc", 
    // "https://www.youtube.com/embed/3UGMDJ9kZCA", 
    // "https://www.youtube.com/embed/2S24-y0Ij3Y", 
    // "https://www.youtube.com/embed/Oz3mm3tPKfg", 
    // "https://www.youtube.com/embed/6uJf2IT2Zh8", 
    // "https://www.youtube.com/embed/BS7tz2rAOSA", 

]

videoIDs = [
    "fairytail", 
    "overlord", 
    "sao", 
    "seven", 
    "demon",
    "yourName", 
    "bts", 
    "blackpink", 
    "nct", 
    "redvelvet", 
    "taemin", 
    "day6", 
]

function returnHome(){
    window.location.href = "final_index.html";
}

prevIcon = ""; 

function changeCenter(id){
    if (prevIcon != id ){
        //console.log("NEW"); 
        if (id == "fairytail"){
            document.getElementById("screen").src = videos[0]; 
        }
        else if ( id == "overlord"){
            document.getElementById("screen").src = videos[1]; 
        }
        else if ( id == "sao"){
            document.getElementById("screen").src = videos[2]; 
        }
        else if ( id == "seven"){
            document.getElementById("screen").src = videos[3]; 
        }
        else if ( id == "demon"){
            document.getElementById("screen").src = videos[4]; 
        }
        else if ( id == "yourName"){
            document.getElementById("screen").src = videos[5]; 
        }
        else if ( id == "bts"){
            document.getElementById("screen").src = videos[6];             
        }
        else if ( id == "nct"){
            document.getElementById("screen").src = videos[7]; 
        }
        else if ( id == "blackpink"){
            document.getElementById("screen").src = videos[8]; 
        }
        else if ( id == "taemin"){
            document.getElementById("screen").src = videos[9]; 
        }
        else if ( id == "redvelvet"){
            document.getElementById("screen").src = videos[10]; 
        }
        else if ( id == "day6"){
            document.getElementById("screen").src = videos[11]; 
        }
        document.getElementById("body").style.backgroundImage = "none"; 
        document.getElementById("body").style.backgroundColor = "#1f6679"; 
        document.getElementById(id).style.border = "5px"; 
        document.getElementById(id).style.borderStyle = "dashed"; 
        document.getElementById(id).style.borderColor = "##1f6679"; 

        if (prevIcon != ""){
            document.getElementById(prevIcon).style.border = "none"; 
        }
        
        prevIcon = id; 
    }
    else{
        //console.log("ELSE"); 
        document.getElementById("body").style = "initial"; 
        document.getElementById(id).style.border = "none"; 
        //document.getElementById("screen").src = "https://www.youtube.com/embed/x8D4lzb4D1k?autoplay=1&";
        document.getElementById("screen").src = "https://www.youtube.com/embed/x8D4lzb4D1k"; 
        prevIcon = ""; 
    }
}
  