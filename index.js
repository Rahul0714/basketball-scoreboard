let homeScore = 0;
let awayScore = 0;

document.getElementById("home").textContent = homeScore;
document.getElementById("away").textContent = awayScore;

function addOneHome() {
    let tempScore = document.getElementById("home").innerHTML;
    tempScore++;
    document.getElementById("home").textContent = tempScore;
}

function addTwoHome() {
    let tempScore = document.getElementById("home").innerHTML;
    tempScore++;
    tempScore++;
    document.getElementById("home").textContent = tempScore;
}

function addThreeHome() {
    let tempScore = document.getElementById("home").innerHTML;
    tempScore++;
    tempScore++;
    tempScore++;
    document.getElementById("home").textContent = tempScore;
}

function addOneAway() {
    let tempScore = document.getElementById("away").innerHTML;
    tempScore++;
    document.getElementById("away").textContent = tempScore;
}

function addTwoAway() {
    let tempScore = document.getElementById("away").innerHTML;
    tempScore++;
    tempScore++;
    document.getElementById("away").textContent = tempScore;
}

function addThreeAway() {
    let tempScore = document.getElementById("away").innerHTML;
    tempScore++;
    tempScore++;
    tempScore++;
    document.getElementById("away").textContent = tempScore;
}