const body = document.querySelector('body');
const game = document.querySelector('#game');
const kaleb = document.querySelector('#kaleb');
const house = document.querySelector('#house');
const endMessage = document.getElementById('endMessage');
let score = 0;
const scoreMessage = document.getElementById('score');
let start;
let time = 1;

house.style.position = 'absolute';
function positionHouse() {
    const xPos = Math.random() * 400 + 250;
    const yPos = Math.random() * 200 + 100;
    house.style.top = `${yPos}px`;
    house.style.left = `${xPos}px`;
}
function launch() {
    let horizontal = document.querySelector('#horizontal').value;
    let vertical = document.querySelector('#vertical').value;
    let xPos = horizontal * time;
    //450 starts the movement from kaleb's current position
    let yPos = 450 - vertical * time - .5 * 9.8 * Math.pow(time,2);
    if (xPos > 670) {
        kaleb.style.left = 670 + 'px';
        declareTie();
    } else if (xPos < 0) {
        kaleb.style.left = 0 + 'px';
        declareTie();
    } else {
        kaleb.style.left = xPos + 'px';
    }
    if (yPos > 500) {
        kaleb.style.top = 500 + 'px';
        declareTie();
    } else if (yPos < 0) {
        kaleb.style.top = 0 + 'px';
        declareTie();
    } else {
        kaleb.style.top = yPos + 'px';
    }
    time++;
    checkIfHit();
}
function declareTie() {
    clearInterval(start);
    endMessage.textContent = "You missed!";
}
function resetKaleb() {
    kaleb.style.left = '15px';
    kaleb.style.top = '450px';
    endMessage.textContent = "";
}
function checkIfHit() {
    // there's still a possibility of the kaleb img jumping over the house img, must know if the kaleb img's path intersects with the house
    if (parseInt(kaleb.style.left) < parseInt(house.style.left) + 40 && parseInt(kaleb.style.left) > parseInt(house.style.left)- 40) {
        if (parseInt(kaleb.style.top) < parseInt(house.style.top)+ 40 && parseInt(kaleb.style.top) > parseInt(house.style.top)- 40) {
            clearInterval(start);
            endMessage.textContent = "Nice shot!";
            score ++;
            scoreMessage.textContent = `Score: ${score}`;
        }
    }
}

resetKaleb();
positionHouse();
// launch button
const launchBtn = document.createElement('button');
let text = document.createTextNode('Launch');
launchBtn.appendChild(text);
document.getElementById('launchDiv').appendChild(launchBtn);
launchBtn.style.backgroundColor = "#d5f5e3";

launchBtn.addEventListener("mouseover", () => {
    launchBtn.style.backgroundColor = "#82e0aa";
});
launchBtn.addEventListener("mouseout", () => {
    launchBtn.style.backgroundColor = "#d5f5e3";
});
launchBtn.addEventListener('click', () => {
    start = setInterval(launch, 300);
});
//launch on enter
document.querySelector('#vertical').addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        start = setInterval(launch, 300);
    }
});

// new button
const newBtn = document.createElement('button');
text = document.createTextNode('New');
newBtn.appendChild(text);
document.getElementById('btnDiv').appendChild(newBtn);
newBtn.style.backgroundColor = "#d6eaf8";

newBtn.addEventListener("mouseover", () => {
    newBtn.style.backgroundColor = "#85c1e9";
});
newBtn.addEventListener("mouseout", () => {
    newBtn.style.backgroundColor = "#d6eaf8";
});
newBtn.addEventListener('click', () => {
    clearInterval(start);
    time = 1;
    positionHouse();
    resetKaleb();
    document.querySelector('#horizontal').value = "";
    document.querySelector('#vertical').value = "";
});
// reset button
const resetBtn = document.createElement('button');
text = document.createTextNode('Reset');
resetBtn.appendChild(text);
document.getElementById('btnDiv').appendChild(resetBtn);
resetBtn.style.backgroundColor = "#fadbd8";

resetBtn.addEventListener("mouseover", () => {
    resetBtn.style.backgroundColor = "#ec7063";
});
resetBtn.addEventListener("mouseout", () => {
    resetBtn.style.backgroundColor = "#fadbd8";
});
resetBtn.addEventListener('click', () => {
    clearInterval(start);
    time = 1;
    resetKaleb();
});