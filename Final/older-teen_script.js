photos = [
    "images/chanel1.jpeg", 
    "images/chanel2.jpeg", 
    "images/chanel3.jpeg", 
    "images/chanel4.jpeg", 
    "images/guoPei1.jpeg", 
    "images/guoPei2.jpeg", 
    "images/guoPei3.jpeg", 
    "images/guoPei4.jpeg", 
    "images/IMG_0484.JPG", 
    "images/IMG_1329.JPG", 
    "images/IMG_0945.JPG", 
    "images/me.JPG", 
    "images/pr1.jpeg", 
    "images/pr2.jpeg", 
    "images/pr3.jpeg", 
    "images/ru1.jpeg", 
    "images/ru2.gif", 
    "images/ru3.jpeg", 
    "images/ru4.jpeg", 
    "images/saab1.jpeg", 
    "images/saab2.jpeg", 
]

colors = [
    "#9f7f94",
    "black",
    "#f4887b", 
    "black",
    "#1f6679",
    "black",
    "#0e374a",
    "black",
    "#4b9596",
    "black",
    "white", 
]

function returnHome(){
    window.location.href = "final_index.html";
}

window.onload = function() {
    startTimer(); 
};

currPhotoLeft = 1; 
currPhotoRight = photos.length-2; 

function nextImage(){
    document.getElementById("image1").src = photos[currPhotoLeft];
    document.getElementById("image2").src = photos[currPhotoRight];
    currPhotoLeft += 1; 
    currPhotoRight -= 1; 
    if (currPhotoLeft > photos.length){
        currPhotoLeft = 0; 
    }
    if (currPhotoRight < 0){
        currPhotoRight = photos.length; 
    }
}

currColor = 1; 
function colorChange(){
    document.getElementById("body").style.backgroundColor = colors[currColor]; 
    currColor += 1; 
    if (currColor > colors.length){
        currColor = 0; 
    }
}

function startTimer() {
    //30 seconds
    setInterval(nextImage, 10000);
    setInterval(colorChange, 2000);
}



