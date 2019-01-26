var holes = document.querySelectorAll('.hole');
var scoreBoard = document.querySelector('.score');
var moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;
let moleNum = 1;
let min = 500;
let max = 1200;



function randomTime(min, max){
    return Math.round(Math.random() * (max-min) + min);
}

function randomHole(holes){
    var holeid = Math.floor(Math.random() *holes.length);
    var hole = holes[holeid];
    if(hole === lastHole){
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function popUp(){
    var time = randomTime(min, max);
    var hole = randomHole(holes);
    console.log(time,hole)
    hole.classList.add("up");
    // hole.isUp = true
    // hole.setAttribute('isup', 1)
    setTimeout(function(){
        hole.classList.remove("up");
        if(!timeUp){
            popUp();
        }  
    },time);
};

function startGame(){
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    for(var i = 0; i< moleNum; i++){
        popUp();
    }
   
    setTimeout(function(){
        timeUp = true;
    }, 15000);
}

function whack(e){
    // let isUp = this.parentElement.isUp
    // if (!isUp){
    //     return
    // }
    score++;
    this.parentElement.classList.remove("up");
    scoreBoard.textContent = score;
    // this.parentElement.isUp = false
}

moles.forEach(function(mole){
    mole.addEventListener("click", whack);
})

function easy(){
    timeUp = true;
    scoreBoard.textContent = 0;
    moleNum = 3;
    min = 500;
    max = 1200;
}

function hard(){
    timeUp = true;
    moleNum = 2;
    scoreBoard.textContent = 0;
    min = 350;
    max = 900;
}

function insane(){
    timeUp = true;
    moleNum = 1;
    scoreBoard.textContent = 0;
    min = 200;
    max = 500;
}


function gamemode(){
    timeUp = true;
    scoreBoard.textContent = 0;


}
