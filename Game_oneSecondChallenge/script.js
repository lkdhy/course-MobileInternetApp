// the shortest, the second & the third shortest time interval respectively
var t1, t2, t3;
var time; // "time = 0" stands for not having given the first click

const best = document.getElementById("bestscore");
const second = document.getElementById("secondscore");
const third = document.getElementById("thirdscore");
const prompt = document.getElementById("prompt");
const feedback = document.getElementById("feedback");

// called when the game first starts & after the player fails
function init()
{
   t1 = t2 = t3 = -1;
   time = 0;
   best.innerText = "Your score will be ...";
   second.innerText = "";
   third.innerText = "";
   prompt.innerText = "Come on baby!";
   feedback.innerText = "I'm waiting for you.";
}

function showScore() {
    if (t1 >= 0) {
        best.innerText = t1;
    }
    if (t2 >= 0) {
        second.innerText = t2;
    }
    if (t3 >= 0) {
        third.innerText = t3;
    }
}

function updateScore(s) {
    if (s > t1) {
        feedback.innerText = "You make it!";
        t3 = t2; t2 = t1; t1 = s;
    }
    else if (s > t2) {
        feedback.innerText = "Excellent!";
        t3 = t2; t2 = s;
    }
    else if (s > t3) {
        feedback.innerText = "Good job.";
        t3 = s;
    }
    else {
        feedback.innerText = "Try again!";
    }
}

function myclick() {
    let myDate = new Date();
    let ntime = Number(myDate.getTime());
    if (time > 0) {
        let score = ntime - time;
        /* the player fails once the interval between clicks reach 1 second,
            ending this round of game immediately */
        if (score >= 1000) {
            // prompt.innerText =  "Hahahaha";
            alert("You failed!!!");
            console.log(t1 < 0 ? "Never succeed" : t1);
            init();
        }
        else {
            updateScore(score);
            showScore();
            prompt.innerText = "Come on baby!";
            time = 0;
        }
    }
    else {
        prompt.innerText = "Counting down ...";
        time = ntime;
    }
}

init();