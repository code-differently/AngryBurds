let time = 0;


const img = document.getElementById("kface");
const birdhouse = document.getElementById("bhouse");
const birdhouseWidth = birdhouse.getBoundingClientRect();


const launchbtn = document.getElementById('launchbtn');


launchbtn.addEventListener('click',function myFunc(){
  
  
    let xSpeed = document.getElementById('hspeed').value;
    let vSpeed = document.getElementById('vspeed').value;

if(xSpeed == 600 && vSpeed == 200 ){
    img.style.left= xSpeed * time + "px";
    img.style.bottom =window.innerHeight - (vSpeed * time - .5 * 9.8 * Math.pow(time,2) ) + "px";
    

    time++;
    setInterval(myFunc, 600);
}
else {
    let message = document.getElementById("youmissed");
    img.style.left= xSpeed * time + "px";
    img.style.bottom =window.innerHeight - (vSpeed * time - .5 * 9.8 * Math.pow(time,2) ) + "px";
    

    time++;
    setInterval(myFunc, 600);
    return message.innerHTML="You Missed";

}

});

function resetFunction(){
    location.reload();

}
