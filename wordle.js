let allWords = ["adieu", "odium", "shade", "resin", "alert", "haunt", "orate", "media", "blind", "route", "audio", "pause", "alien", "canoe", "plane", "rouse", "fraud", "atone", "raise", "minor", "dream", "guard", "flood", "adult", "sight", "alarm", "force", "wound", "brave", "cable", "panic", "study", "faith", "equal", "grade", "award", "bully", "voice", "drive", "title", "cheer", "pause", "legal", "plate", "error", "smash", "trade", "burst", "flash", "shame", "float", "sting", "boost", "alien", "blend", "party", "store", "shine", "match", "track", "route", "crash", "clown", "shaky", "vegan", "power", "trust", "enjoy", "brain", "adopt", "tower", "shade", "delay", "twist", "alert", "choke", "split", "rhyme", "muddy", "plant", "occur", "faint", "waste", "empty", "blame", "creep", "shift", "abuse", "harsh", "quest", "vocal", "taunt", "drool", "carry", "unite", "final", "worth", "scene", "proud", "false", "blind", "sheet", "crush", "relax", "drain", "label", "expel", "thump", "quake", "agree", "event", "limit", "argue", "sharp", "guide", "march", "image", "worry", "curse", "grain", "spate", "odium", "vapid", "stint", "augur", "banal", "assay", "pique", "berth", "canon", "prate", "plumb", "taper", "blase", "fusty", "preen", "antic", "beget", "harry", "clout"];
let correctWord = allWords[Math.floor(Math.random() * (allWords.length + 1))].toUpperCase();
console.log(correctWord);
//Popup tab when the information icon is clicked with all it's details
document.querySelector(".information").addEventListener("click", () => {
    let parentNode = document.createElement("div");
    document.body.appendChild(parentNode);
    parentNode.classList.add("information-text-container");
    let node = document.createElement("div");
    document.querySelector(".information-text-container").appendChild(node);
    node.classList.add("how-to-play", "text");
    document.querySelector(".how-to-play").innerHTML = "How To Play : ";
    node = document.createElement("ul");
    document.querySelector(".information-text-container").appendChild(node);
    node.classList.add("text", "guess");
    node.setAttribute("id", "help");
    node.innerHTML = "Guess the Wordle in 6 tries."
    node = document.createElement("li");
    document.querySelector(".guess").appendChild(node);
    node.classList.add("text");
    node.innerHTML = "The color of the tiles will change to show how close your guess was to the word."
    node = document.createElement("div");
    document.querySelector(".information-text-container").appendChild(node);
    node.classList.add("text");
    node.setAttribute("id", "example");
    node.innerHTML = "Examples : ";

    // GREEN EXAMPLE
    node = document.createElement("div");
    document.querySelector(".information-text-container").appendChild(node);
    node.classList.add("green-example-container");
    node = document.createElement("div");
    document.querySelector(".green-example-container").appendChild(node);
    node.classList.add("letter-container", "green-w");
    node.innerHTML = "W";
    node = document.createElement("div");
    document.querySelector(".green-example-container").appendChild(node);
    node.classList.add("letter-container", "green-e");
    node.innerHTML = "E";
    node = document.createElement("div");
    document.querySelector(".green-example-container").appendChild(node);
    node.classList.add("letter-container", "green-a");
    node.innerHTML = "A";
    node = document.createElement("div");
    document.querySelector(".green-example-container").appendChild(node);
    node.classList.add("letter-container", "green-r");
    node.innerHTML = "R";
    node = document.createElement("div");
    document.querySelector(".green-example-container").appendChild(node);
    node.classList.add("letter-container", "green-y");
    node.innerHTML = "Y";
    node = document.createElement("div");
    document.querySelector(".information-text-container").appendChild(node);
    node.classList.add("text");
    node.innerHTML = "W is in the word and in the correct spot.";
    node = document.createElement("br");
    document.querySelector(".information-text-container").appendChild(node);

    // ORANGE EXAMPLE
    node = document.createElement("div");
    document.querySelector(".information-text-container").appendChild(node);
    node.classList.add("orange-example-container");
    node = document.createElement("div");
    document.querySelector(".orange-example-container").appendChild(node);
    node.classList.add("letter-container", "orange-p");
    node.innerHTML = "P";
    node = document.createElement("div");
    document.querySelector(".orange-example-container").appendChild(node);
    node.classList.add("letter-container", "orange-i");
    node.innerHTML = "I";
    node = document.createElement("div");
    document.querySelector(".orange-example-container").appendChild(node);
    node.classList.add("letter-container", "orange-l1");
    node.innerHTML = "L";
    node = document.createElement("div");
    document.querySelector(".orange-example-container").appendChild(node);
    node.classList.add("letter-container", "orange-l2");
    node.innerHTML = "L";
    node = document.createElement("div");
    document.querySelector(".orange-example-container").appendChild(node);
    node.classList.add("letter-container", "orange-s");
    node.innerHTML = "S";
    node = document.createElement("div");
    document.querySelector(".information-text-container").appendChild(node);
    node.classList.add("text");
    node.innerHTML = "I is in the word but in the wrong spot.";
    node = document.createElement("br");
    document.querySelector(".information-text-container").appendChild(node);

    //BLACK EXAMPLE
    node = document.createElement("div");
    document.querySelector(".information-text-container").appendChild(node);
    node.classList.add("black-example-container");
    node = document.createElement("div");
    document.querySelector(".black-example-container").appendChild(node);
    node.classList.add("letter-container", "black-v");
    node.innerHTML = "V";
    node = document.createElement("div");
    document.querySelector(".black-example-container").appendChild(node);
    node.classList.add("letter-container", "black-a");
    node.innerHTML = "A";
    node = document.createElement("div");
    document.querySelector(".black-example-container").appendChild(node);
    node.classList.add("letter-container", "black-g");
    node.innerHTML = "G";
    node = document.createElement("div");
    document.querySelector(".black-example-container").appendChild(node);
    node.classList.add("letter-container", "black-u");
    node.innerHTML = "U";
    node = document.createElement("div");
    document.querySelector(".black-example-container").appendChild(node);
    node.classList.add("letter-container", "black-e");
    node.innerHTML = "E";
    node = document.createElement("div");
    document.querySelector(".information-text-container").appendChild(node);
    node.classList.add("text");
    node.innerHTML = "U is not in the word in any spot.";
    
    //DIMMING the BACKGROUND
    node = document.createElement("div");
    document.body.insertBefore(node, document.body.firstChild);
    node.classList.add("dim");

    //creating the exit button code and aligning it in the correct spot
    node = document.createElement("div");
    document.querySelector(".information-text-container").insertBefore(node, document.querySelector(".information-text-container").firstChild);
    node.classList.add("exit-button-container");
    node = document.createElement("div");
    document.querySelector(".exit-button-container").appendChild(node);
    node.classList.add("information-exit");
    document.querySelector(".information-exit").innerHTML = "X";

    if(theme == "white") {
        document.querySelector(".information-text-container").style.backgroundColor = "azure";
        document.querySelector(".information-exit").style.color = "rgba(18,18,19,255)";
        document.querySelectorAll(".text").forEach( (item) =>{
            item.style.color = "rgba(18,18,19,255)";
        })
        document.querySelectorAll(".letter-container").forEach( (item) =>{
            item.style.color = "rgba(18,18,19,255)";
        })
        document.querySelector(".how-to-play").style.color = "bisque";
        document.getElementById("example").style.color = "salmon";
        document.querySelector(".green-w").style.color = "azure";
        document.querySelector(".orange-i").style.color = "azure";
        document.querySelector(".black-u").style.color = "azure";
    }

    //deleting the entire tab IF the exit button is clicked
    document.querySelector(".information-exit").addEventListener("click", () => {
        document.querySelector(".information-text-container").remove();
        document.querySelector(".dim").remove();
    })
    //deleting the entire tab if you click anywhere else on the screen outside of the how-to-play tab
    document.querySelector(".dim").addEventListener("click", ()=>{
        document.querySelector(".information-text-container").remove();
        document.querySelector(".dim").remove();
    })
})

let theme = "black";
// pop up for settings tab
document.querySelector(".fa-solid.fa-gear").addEventListener("click", ()=>{
    //DIMMING the BACKGROUND 
    node = document.createElement("div");
    document.body.insertBefore(node, document.body.firstChild);
    node.classList.add("dim");

    let parentNode = document.createElement("div");
    document.body.appendChild(parentNode);
    parentNode.classList.add("settings-text-container");



    //creating the exit button code and aligning it in the correct spot
    node = document.createElement("div");
    document.querySelector(".settings-text-container").insertBefore(node, document.querySelector(".settings-text-container").firstChild);
    node.classList.add("leave-button-container");
    node = document.createElement("div");
    document.querySelector(".leave-button-container").appendChild(node);
    node.classList.add("settings-exit");
    document.querySelector(".settings-exit").innerHTML = "X";

    node = document.createElement("div");
    document.querySelector(".settings-text-container").appendChild(node);
    node.classList.add("white-theme-container");
    node = document.createElement("div");
    document.querySelector(".white-theme-container").appendChild(node);
    node.classList.add("white-theme-text");
    document.querySelector(".white-theme-text").innerHTML = "White Theme : ";
    node = document.createElement("input");
    node.setAttribute("type", "checkbox");
    document.querySelector(".white-theme-container").appendChild(node);
    node.classList.add("white-theme-check-box");
    document.querySelector(".white-theme-check-box").addEventListener("click", ()=>{
        if(document.querySelector(".white-theme-check-box").checked) {
            theme = "white";
            document.body.style.backgroundColor = "azure";
            document.querySelector(".wordle").style.color = "rgba(18,18,19,255)";
            document.querySelector(".settings").style.color = "rgba(18,18,19,255)";
            document.querySelector(".information").style.color = "rgba(18,18,19,255)";
            document.querySelector(".information").style.borderColor = "rgba(18,18,19,255)";
            document.querySelector(".fa-solid.fa-gear").style.color = "rgba(18,18,19,255)";
            document.querySelector(".settings-text-container").style.backgroundColor = "azure";
            document.querySelector(".settings-exit").style.color = "rgba(18,18,19,255)";
            document.querySelector(".white-theme-text").style.color = "rgba(18,18,19,255)";
            document.querySelector(".dim").style.backgroundColor = "grey";
            document.querySelectorAll(".box").forEach( (item) => {
                item.style.color = "rgba(18,18,19,255)";
                item.style.borderColor = "lightgrey";
            })
            for(let i = boxCounter - 1; i >= 1; i--) {
                document.querySelector(".box-" + i).style.color = "ghostwhite";
            }
        }
        else {
            theme = "dark"
            document.body.style.backgroundColor = "rgba(18,18,19,255)";
            document.querySelector(".wordle").style.color = "azure";
            document.querySelector(".settings").style.color = "azure";
            document.querySelector(".information").style.color = "azure";
            document.querySelector(".information").style.borderColor = "azure";
            document.querySelector(".fa-solid.fa-gear").style.color = "azure";
            document.querySelector(".settings-text-container").style.backgroundColor = "rgba(18,18,19,255)";
            document.querySelector(".settings-exit").style.color = "azure";
            document.querySelector(".white-theme-text").style.color = "azure";
            document.querySelector(".dim").style.backgroundColor = "black";
            document.querySelectorAll(".box").forEach( (item) => {
                item.style.color = "ghostwhite";
                item.style.borderColor = "dimgrey";
            })
        }
    })
    if(theme == "white") {
        document.querySelector(".white-theme-check-box").checked = true;
        document.querySelector(".settings-text-container").style.backgroundColor = "azure";
        document.querySelector(".settings-exit").style.color = "rgba(18,18,19,255)";
        document.querySelector(".white-theme-text").style.color = "rgba(18,18,19,255)";
        document.querySelector(".dim").style.backgroundColor = "grey";
    }
    
     
     
     //deleting the entire tab IF the exit button is clicked
    document.querySelector(".settings-exit").addEventListener("click", () => {
        document.querySelector(".settings-text-container").remove();
        document.querySelector(".dim").remove();
    })
    //deleting the entire tab if you click anywhere else on the screen outside of the how-to-play tab
    document.querySelector(".dim").addEventListener("click", ()=>{
        document.querySelector(".settings-text-container").remove();
        document.querySelector(".dim").remove();
    })
})

// gameplay 
const allowedKeys = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Enter","Backspace"];
let boxCounter = 1;
let boxTracker = 0;
let guess = "";
document.addEventListener("keyup", (e) =>{
    const keyName = e.key;
    // DELETE A CHARACTER 
    if(keyName == "Backspace" && boxCounter - boxTracker > 1) {
        document.querySelector(".box-" + ( boxCounter - 1) ).innerHTML = "";
        document.querySelector(".box-" + ( boxCounter - 1) ).style.animationName = "";
        if(theme == "white") {
            document.querySelector(".box-" + (boxCounter - 1)).style.borderColor = "lightgrey";
        }
        else {
            document.querySelector(".box-" + (boxCounter - 1)).style.borderColor = "dimgrey";
        }
        boxCounter -= 1;
        guess = guess.slice(0,guess.length-1)
    }
    // ANIMATION FOR SUBMITTING THE WORD AND SETTING PROPER COLORS
    else if(keyName == "Enter" && boxCounter - boxTracker == 6) {
        setTimeout(() =>{
            if(theme == "black"){
                document.querySelector(".box-" + (boxCounter - 1)).style.animationName = "rotate";
            }
            else{
                document.querySelector(".box-" + (boxCounter - 1)).style.animationName = "rotate2";
                document.querySelector(".box-" + (boxCounter - 1)).style.color = "ghostwhite";
            }
            if(correctWord.indexOf(guess[4]) == -1) {
                document.querySelector(".box-" + (boxCounter - 1)).style.animationDuration = "0.75s";
                document.querySelector(".box-" + (boxCounter - 1)).style.backgroundColor = "dimgrey";
                document.querySelector(".box-" + (boxCounter - 1)).style.borderColor = "dimgrey";
            }
            else if(correctWord.indexOf(guess[4]) != -1 && correctWord[4] != guess[4]) {
                document.querySelector(".box-" + (boxCounter - 1)).style.animationDuration = "0.75s";
                document.querySelector(".box-" + (boxCounter - 1)).style.backgroundColor = "goldenrod";
                document.querySelector(".box-" + (boxCounter - 1)).style.borderColor = "goldenrod";
            }
            else {
                document.querySelector(".box-" + (boxCounter - 1)).style.animationDuration = "0.75s";
                document.querySelector(".box-" + (boxCounter - 1)).style.backgroundColor = "yellowgreen";
                document.querySelector(".box-" + (boxCounter - 1)).style.borderColor = "yellowgreen";
            }
        },500)
        setTimeout(() =>{
            if(theme == "black"){
                document.querySelector(".box-" + (boxCounter - 2)).style.animationName = "rotate";
            }
            else{
                document.querySelector(".box-" + (boxCounter - 2)).style.animationName = "rotate2";
                document.querySelector(".box-" + (boxCounter - 2)).style.color = "ghostwhite";
            }
            if(correctWord.indexOf(guess[3]) == -1) {
                document.querySelector(".box-" + (boxCounter - 2)).style.animationDuration = "0.75s";
                document.querySelector(".box-" + (boxCounter - 2)).style.backgroundColor = "dimgrey";
                document.querySelector(".box-" + (boxCounter - 2)).style.borderColor = "dimgrey";
            }
            else if(correctWord.indexOf(guess[3]) != -1 && correctWord[3] != guess[3]) {
                document.querySelector(".box-" + (boxCounter - 2)).style.animationDuration = "0.75s";
                document.querySelector(".box-" + (boxCounter - 2)).style.backgroundColor = "goldenrod";
                document.querySelector(".box-" + (boxCounter - 2)).style.borderColor = "goldenrod";
            }
            else {
                document.querySelector(".box-" + (boxCounter - 2)).style.animationDuration = "0.75s";
                document.querySelector(".box-" + (boxCounter - 2)).style.backgroundColor = "yellowgreen";
                document.querySelector(".box-" + (boxCounter - 2)).style.borderColor = "yellowgreen";
            }
        },400)
        setTimeout(() =>{
            if(theme == "black"){
                document.querySelector(".box-" + (boxCounter - 3)).style.animationName = "rotate";
            }
            else{
                document.querySelector(".box-" + (boxCounter - 3)).style.animationName = "rotate2";
                document.querySelector(".box-" + (boxCounter - 3)).style.color = "ghostwhite";
            }
            if(correctWord.indexOf(guess[2]) == -1) {
                document.querySelector(".box-" + (boxCounter - 3)).style.animationDuration = "0.75s";
                document.querySelector(".box-" + (boxCounter - 3)).style.backgroundColor = "dimgrey";
                document.querySelector(".box-" + (boxCounter - 3)).style.borderColor = "dimgrey";
            }
            else if(correctWord.indexOf(guess[2]) != -1 && correctWord[2] != guess[2]) {
                document.querySelector(".box-" + (boxCounter - 3)).style.animationDuration = "0.75s";
                document.querySelector(".box-" + (boxCounter - 3)).style.backgroundColor = "goldenrod";
                document.querySelector(".box-" + (boxCounter - 3)).style.borderColor = "goldenrod";
            }
            else {
                document.querySelector(".box-" + (boxCounter - 3)).style.animationDuration = "0.75s";
                document.querySelector(".box-" + (boxCounter - 3)).style.backgroundColor = "yellowgreen";
                document.querySelector(".box-" + (boxCounter - 3)).style.borderColor = "yellowgreen";
            }
        },300)
        setTimeout(() =>{
            if(theme == "black"){
                document.querySelector(".box-" + (boxCounter - 4)).style.animationName = "rotate";
            }
            else{
                document.querySelector(".box-" + (boxCounter - 4)).style.animationName = "rotate2";
                document.querySelector(".box-" + (boxCounter - 4)).style.color = "ghostwhite";
            }
            if(correctWord.indexOf(guess[1]) == -1) {
                document.querySelector(".box-" + (boxCounter - 4)).style.animationDuration = "0.75s";
                document.querySelector(".box-" + (boxCounter - 4)).style.backgroundColor = "dimgrey";
                document.querySelector(".box-" + (boxCounter - 4)).style.borderColor = "dimgrey";
            }
            else if(correctWord.indexOf(guess[1]) != -1 && correctWord[1] != guess[1]) {
                document.querySelector(".box-" + (boxCounter - 4)).style.animationDuration = "0.75s";
                document.querySelector(".box-" + (boxCounter - 4)).style.backgroundColor = "goldenrod";
                document.querySelector(".box-" + (boxCounter - 4)).style.borderColor = "goldenrod";
            }
            else {
                document.querySelector(".box-" + (boxCounter - 4)).style.animationDuration = "0.75s";
                document.querySelector(".box-" + (boxCounter - 4)).style.backgroundColor = "yellowgreen";
                document.querySelector(".box-" + (boxCounter - 4)).style.borderColor = "yellowgreen";
            }
        },200)
        setTimeout(() =>{
            if(theme == "black"){
                document.querySelector(".box-" + (boxCounter - 5)).style.animationName = "rotate";
            }
            else{
                document.querySelector(".box-" + (boxCounter - 5)).style.animationName = "rotate2";
                document.querySelector(".box-" + (boxCounter - 5)).style.color = "ghostwhite";
            }
            if(correctWord.indexOf(guess[0]) == -1) {
                document.querySelector(".box-" + (boxCounter - 5)).style.animationDuration = "0.75s";
                document.querySelector(".box-" + (boxCounter - 5)).style.backgroundColor = "dimgrey";
                document.querySelector(".box-" + (boxCounter - 5)).style.borderColor = "dimgrey";
            }
            else if(correctWord.indexOf(guess[0]) != -1 && correctWord[0] != guess[0]) {
                document.querySelector(".box-" + (boxCounter - 5)).style.animationDuration = "0.75s";
                document.querySelector(".box-" + (boxCounter - 5)).style.backgroundColor = "goldenrod";
                document.querySelector(".box-" + (boxCounter - 5)).style.borderColor = "goldenrod";
            }
            else {
                document.querySelector(".box-" + (boxCounter - 5)).style.animationDuration = "0.75s";
                document.querySelector(".box-" + (boxCounter - 5)).style.backgroundColor = "yellowgreen";
                document.querySelector(".box-" + (boxCounter - 5)).style.borderColor = "yellowgreen";
            }
        },100)
        boxTracker += 5;
        setTimeout(() => {
            if(guess == correctWord) {
                resetGame("You won !");
            }
            else if(boxTracker == 30 && guess != correctWord) {
                resetGame(correctWord);
            }
        },1200)
        setTimeout(() =>{
            guess = "";
        }, 1200);
    }
    // SETTING THE PROPER LETTERS IN THE PROPER BOXES
    else if(allowedKeys.indexOf(keyName.toUpperCase()) != -1 && boxCounter - boxTracker < 6) {
        document.querySelector(".box-" + boxCounter).innerHTML = keyName.toUpperCase();
        document.querySelector(".box-" + boxCounter).style.animationDuration = "0.1s"
        document.querySelector(".box-" + boxCounter).style.animationName = "pop";
        if(theme == "black") {
            document.querySelector(".box-" + boxCounter).style.borderColor = "lightgrey"
        }
        else {
            document.querySelector(".box-" + boxCounter).style.borderColor = "dimgrey";
        }
        boxCounter += 1;
        guess += keyName.toUpperCase();
    }
})
function resetGame(endMessage) {
    node = document.createElement("div");
    document.body.appendChild(node);
    node.classList.add("end-container");
    node = document.createElement("div");
    document.body.insertBefore(node, document.body.firstChild);
    node.classList.add("dim");
    node = document.createElement("div");
    document.querySelector(".end-container").appendChild(node);
    node.classList.add("end-message");
    node = document.createElement("button");
    node.setAttribute("type", "button");
    document.querySelector(".end-container").appendChild(node);
    node.classList.add("end-button")
    document.querySelector(".end-message").innerHTML = endMessage;
    document.querySelector(".end-button").innerHTML = "RESET"
    if(theme == "white") {
        document.querySelector(".dim").style.backgroundColor = "grey";
        document.querySelector(".end-container").style.backgroundColor = "azure";
        document.querySelector(".end-message").style.color = "rgba(18,18,19,255)";
        document.querySelector(".end-button").style.color = "rgba(18,18,19,255)"
        document.querySelector(".end-button").style.borderColor = "rgba(18,18,19,255)"
        document.querySelector(".end-button").style.backgroundColor = "darkgrey"
    }
    else {
        document.querySelector(".dim").style.backgroundColor = "black";
        document.querySelector(".end-container").style.backgroundColor = "rgba(18,18,19,255)";
        document.querySelector(".end-message").style.color = "azure";
        document.querySelector(".end-button").style.color = "azure"
        document.querySelector(".end-button").style.borderColor = "azure"
        document.querySelector(".end-button").style.backgroundColor = "cadetblue"
    }
    document.querySelector(".end-button").addEventListener("click", () => {
        document.querySelector(".dim").remove();
        document.querySelector(".end-container").remove();
        document.querySelectorAll(".box").forEach( (item) => {
            item.innerHTML = "";
            item.style.backgroundColor = "transparent";
            if(theme == "white") {
                item.style.borderColor = "lightgrey";
                item.style.color = "rgba(18,18,19,255)"
            }
            else {
                item.style.borderColor = "dimgrey";
            }
        })
        boxTracker = 0;
        boxCounter = 1;
        correctWord = allWords[Math.floor(Math.random() * (allWords.length + 1))].toUpperCase();
    })
}