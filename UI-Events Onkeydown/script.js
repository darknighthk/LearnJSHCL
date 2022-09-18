function showGamePage() {

    var text = "<h3>Start typing your Name</h3><span id=\"typedWord\"></span>";
    document.getElementById("instruction").innerHTML = "";
    document.getElementById("gamePage").innerHTML = text;
}

document.onkeydown = keyPressed;

function keyPressed(event) {
    var inputText = document.getElementById("typedWord").innerHTML;
    document.getElementById("typedWord").innerHTML += String.fromCharCode(event.keyCode).toUpperCase();
}