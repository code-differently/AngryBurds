let time = 0;
let xSpeed = 75;
let ySpeed = 140;
const img = document.getElementById("kaleb");

function convertPostitonToPixels(position){
    return position + "px";
}

function myFunc(){
    document.getElementById("kaleb").left = 30*time + "px";
    document.getElementById("kaleb").style.top = 10*time + "px";
    time++;
}

//     if(xSpeed*time < window.innerWidth){
//         time++;
//     }
//     else{
//         time = 0;
//     }

//     let xPosition = xSpeed*time;
//     let yPosition = ySpeed*time - .5 * 9.8 * Math.pow(time, 2);

//     //Invert arc to mimic the path a thrown ball makes 
//     yPosition = window.innerHeight - yPosition; 

//     img.style.left = convertPostitonToPixels(xPosition);
//     img.style.top = convertPostitonToPixels(yPosition);

// }


// function myFunction() {
//   document.getElementById("btn1").innerHTML = "Hello World";
// }

setInterval(myFunc, 250);