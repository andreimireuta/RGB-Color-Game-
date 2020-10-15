//alert("suntem, conetati");
var numberOfSquares = 6;// variabila care tine cont de cate patrate avem in joc fie 3 fie 5
var colors = generateRandomcolors(numberOfSquares);// apelam functia care ne va genra 6 culori random
//this.ceva se refera la ceea ce este selectat de catre addEventListener. cumva el trimite catre qacel obiect fara sa mai fie nevoie sa il selectezi 

var squares = document.querySelectorAll(".square"); // aici am facut un vector cu toate culorile patratelor
var pickedColor = pickColor();
var colorDiplay = document.getElementById("colorDisplay");
var messageDiplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");
var numberOfSquares = 6;// variabila care tine cont de cate patrate avem in joc fie 3 fie 5
var colors = generateRandomcolors(numberOfSquares);// apelam functia care ne va genra 6 culori random

//adaugam butoanelor de hard si easy optiunea de selectat si deselectat
// pe una am selectat o iar pe cealalta am deselectat o
easyButton.addEventListener("click", function () {
    easyButton.classList.add("selectedColor");
    hardButton.classList.remove("selectedColor");
    numberOfSquares = 3;
    colors = generateRandomcolors(numberOfSquares);
    pickedColor = pickColor();
    colorDiplay.textContent = pickedColor;
    for (var i = 0; i <= squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardButton.addEventListener("click", function () {
    hardButton.classList.add("selectedColor");
    easyButton.classList.remove("selectedColor");
    numberOfSquares = 6;
    colors = generateRandomcolors(numberOfSquares);
    pickedColor = pickColor();
    colorDiplay.textContent = pickedColor;
    for (var i = 0; i <= squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

//ce se va intampla cand dam click pe butonul de generare noi culori
resetButton.addEventListener("click", function () {
    //generate all new colors
    colors = generateRandomcolors(numberOfSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change color diplay to math picked color
    colorDiplay.textContent = pickedColor;
    //change the colors of squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steeleblue";
    this.textContent = "New Colors";
});

colorDiplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    //ad initial colors o swaures
    squares[i].style.backgroundColor = colors[i];

    //add click listener to squares
    squares[i].addEventListener("click", function () {
        //alert("clicked the square");

        //grab  color of clicked square
        var clickedColor = this.style.backgroundColor;

        //compare color to pickedColor
        if (clickedColor === pickedColor) {
            messageDiplay.textContent = "Correct!";
            //change all the squares colors
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play again?";
        }
        else {
            this.style.backgroundColor = "#232323";
            messageDiplay.textContent = "Try again";
        }

    });

    function changeColors(color) {
        //loop to all sqaures 
        for (var i = 0; i < colors.length; i++) {
            squares[i].style.backgroundColor = color;
        }

        //change the color to match the given color
    }



}
function pickColor() {
    var randomColor = Math.floor(Math.random() * colors.length);
    return colors[randomColor];
}

function generateRandomcolors(num) {
    //make na array
    var arr = [];
    // ad num random colors
    for (var i = 0; i < num; i++) {
        // get random color and push into arr
        arr.push(randomColor())

    }

    return arr;
}

function randomColor() {
    //pick a red from 0 to 255
    var red = Math.floor(Math.random() * 256);
    //pick a green from 0 to 255
    var green = Math.floor(Math.random() * 256);
    //pick a blue from 0 to 255
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}