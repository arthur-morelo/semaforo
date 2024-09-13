var red = document.getElementById("red");
var yellow = document.getElementById("yellow");
var green = document.getElementById("green");
var indice = 0; // Declare com 'var', 'let', ou 'const'

function changeColor(){
    red.style.backgroundColor = "black";
    yellow.style.backgroundColor = "black";
    green.style.backgroundColor = "black";
    
    if(indice === 0){
        red.style.backgroundColor = "red";
    }
    else if(indice === 1){
        yellow.style.backgroundColor = "yellow";
    }
    else if(indice === 2){
        green.style.backgroundColor = "green";
    }

    indice = (indice + 1) % 3; 
}

let intervalid = setInterval(changeColor, 2000);