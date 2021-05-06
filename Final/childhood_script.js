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

function chooseBook(currNum){
    var randomBook = Math.floor(Math.random() * books.length);
    var book = "pdfs/" + books[randomBook]; 

    var bookClass = document.getElementsByClassName("book");
    for (i = 0; i < books.length; i++){
        var selectedBook = bookClass[i]; 
        if (i != currNum){
            selectedBook.style.filter = "saturate(0)";
        }
        else{
            selectedBook.style.filter = "saturate(1)";
        }
    }
    
    var audio = new Audio("music/flip.mp3"); 
    audio.play(); 

    if (books[randomBook] == "fablehaven.pdf"){
        document.getElementById("book-music").src = "music/Crystallize - Lindsey Stirling (Dubstep Violin Original Song).mp3"; 
        document.getElementById("songName").innerHTML = "Crystallize - Lindsey Stirling"; 
    }
    else if (books[randomBook] == "frankenstein.pdf"){
        document.getElementById("book-music").src = "music/All Time Low Monsters ft. blackbear (LYRIC VIDEO).mp3"; 
        document.getElementById("songName").innerHTML = "Monsters - All Time Low"; 
    }
    else if (books[randomBook] == "greeks.pdf"){
        document.getElementById("book-music").src = "music/Clash Of The Titans - Epic End Music OST.mp3"; 
        document.getElementById("songName").innerHTML = "Battle Music - Clash of the Titans"; 
    }
    else if (books[randomBook] == "thief.pdf"){
        document.getElementById("book-music").src = "music/Power Rangers We Can Be Heroes.mp3"; 
        document.getElementById("songName").innerHTML = "Unstoppable - The Score"; 
    }
    else if (books[randomBook] == "witches.pdf"){
        document.getElementById("book-music").src = "music/Nina Simone - I put a spell on you.mp3"; 
        document.getElementById("songName").innerHTML = "I Put a Spell On You - Nina Simone"; 
    }
    else if (books[randomBook] == "grimm.pdf"){
        document.getElementById("book-music").src = "music/Tchaikovsky - Dance of the Sugar Plum Fairy (The Nutcracker Suite).mp3"; 
        document.getElementById("songName").innerHTML = "Dance of the Sugar Plum Fairy - Tchaikovsky"; 
    }

    document.getElementById("book-pdf").src = book; 
    document.getElementById("pdfViewer").style.display = "block"; 
    document.getElementById("button").style.display = "block"; 

}

function hideBook(){
    document.getElementById("pdfViewer").style.display = "none"; 
    document.getElementById("button").style.display = "none"; 
    document.getElementById("book-music").src = "Final/music/songOfIndia.mp3"; 
    document.getElementById("songName").innerHtml = "Song of India by Nikolai Rimsky-Korsakov"; 

    var bookClass = document.getElementsByClassName("book");
    for (i = 0; i < books.length; i++){
        var selectedBook = bookClass[i]; 
        selectedBook.style.filter = "saturate(1)";
    }
}