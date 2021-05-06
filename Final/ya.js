function returnHome(){
    window.location.href = "final_index.html";
}

function oofClick(){
    var audio = new Audio("music/Roblox Death Sound - Sound Effect (HD).mp3"); 
    audio.play(); 

    startTimer(); 
}

function go(){
    location.href='https://www.youtube.com/watch?v=vXZQYtb6G5k';
}

function startTimer() {
    //5 seconds
    setInterval(go, 1500);
}