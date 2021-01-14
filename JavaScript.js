let time = 0;


const img = document.getElementById("kface");
let xSpeed = document.getElementById('hspeed').value;
let vSpeed = document.getElementById('vspeed');
const launchbtn = document.getElementById('launchbtn');


function myFunc(){
    
    img.style.left= 900 * time + "px";
    img.style.bottom =window.innerHeight - (300 * time - .5 * 9.8 * Math.pow(time,2) ) + "px";
    
    time++;

    
}

setInterval(myFunc, 1000);
console.log(xSpeed);