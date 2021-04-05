var hwIds = [
    "homework1", 
    "homework2", 
    "homework3", 
    "homework4", 
    "midterm", 
    "pair",
    "homework5", 
]

var hwTitles = [
    "Ways to Seeing",
    "Long Live the Web", 
    "Makoto Self Picture", 
    "Into Time", 
    "The Common Vernacular", 
    "Javascript Pair Programming", 
    "The Medium is the Massage",
];

var hwRefs = [
    "Homework_1/hw1_index.html",
    "Homework_2/hw2_index.html", 
    "Homework_3/hw3_index.html",
    "Homework_4/slide1_index.html",
    "Midterm/midterm_index.html",
    "Button/index.html",
    "Homework_5/hw5_index.html", 
];

var hwPics = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "5.5.png",
    "6.png",
]

function showPage(id, num){
    document.getElementById('title').innerText = hwTitles[num]; 
    document.getElementById('title').href = hwRefs[num]; 
    document.getElementById('currPic').src = hwPics[num]; 
    clear(); 
    document.getElementById(id).style.color = "#2DC9BC";
    document.getElementById(id).style.fontSize = "30px";
    document.getElementById(id).style.borderStyle = "dashed";
    document.getElementById(id).style.borderColor = "#2DC9BC";
    
}

function clear(){
    var i; 
    for (i = 0; i < hwIds.length; i++){
        document.getElementById(hwIds[i]).style.color = "white";
        document.getElementById(hwIds[i]).style.fontSize = "20px";
        document.getElementById(hwIds[i]).style.borderStyle = "hidden";
    }
}