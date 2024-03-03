var t1 = 1, t2 = -1, t3 = -1;
var time = 0;

const best = document.getElementById("bestscore");
const second = document.getElementById("secondscore");
const third = document.getElementById("thirdscore");
let prompt = document.getElementById("prompt");
let feedback = document.getElementById("feedback");

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
        t3 = t2; t2 = s;
    }
    else if (s > t3) {
        t3 = s;
    }
    else {
        feedback.innerText = "Try again!";
    }
}

function myclick() {
    let myDate = new Date();
    let ntime = Number(myDate.getTime());
    // console.log(ntime);
    // console.log('in fun click');
    if (time > 0) {
        let score = ntime - time;
        if (score >= 1000) {
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