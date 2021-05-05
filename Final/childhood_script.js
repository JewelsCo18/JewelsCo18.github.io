books = [
    "fablehaven.pdf", 
    "frankenstein.pdf", 
    "greeks.pdf", 
    "thief.pdf", 
    "witches.pdf", 
    "grimm.pdf", 
]

function returnHome(){
    window.location.href = "final_index.html";
}

function chooseBook(){
    var randomBook = Math.floor(Math.random() * books.length);
    var book = "pdfs/" + books[randomBook]; 
    document.getElementById("book-pdf").src = book; 
    document.getElementById("pdfViewer").style.display = "block"; 
    document.getElementById("button").style.display = "block"; 
    var audio = new Audio("music/flip.mp3"); 
    audio.play(); 

}

function hideBook(){
    document.getElementById("pdfViewer").style.display = "none"; 
    document.getElementById("button").style.display = "none"; 
}