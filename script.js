const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const optionsDiv = document.querySelector('.options');
const restartDiv=document.querySelector(".restart");
const logic=document.querySelector(".basiclogic");
const notice=document.querySelector(".notice");
const note=document.querySelector(".note")

const choices = ['rock','paper','scissors'];
const anyIndex = Math.floor(Math.random()*3);

const pointsDatabase = {
    'rock':{'rock':0.5, 'paper':0, 'scissors':1},
    'paper':{'rock':1, 'paper':0.5, 'scissors':0},
    'scissors':{'rock':0, 'paper':1, 'scissors':0.5}
}

const srcsofimg={
    'rock':rock.src,
    'paper':paper.src,
    'scissors':scissors.src
}

function rpsGame(choice) {
    const playerchoice = choice.id;
    const botchoice = botoptions();
    const gamepoints = points(playerchoice,botchoice);
    const gameresult = mgs(gamepoints);
    const removeimages = removeoptions();
    const frontend = GUI(playerchoice,botchoice,gameresult);
}

function botoptions() {
    return choices[anyIndex];
} 

function points(playerchoice,botchoice) {
    return pointsDatabase[playerchoice][botchoice];
}

function mgs(gamepoints) {
    let result;
    switch (gamepoints) {
        case 1: 
        result ={message:'You Won!', color:'green', note:{add:'Congrats!', color:'green'}};
        break;
        case 0:
        result = {message:'You lost!', color:'red', note:{add:'Oops! Try again', color:'red'}};
        break;
        case 0.5:
        result = {message:'You tied!', color:'blueviolet', note:{add:'Good try! Try again', color:'blueviolet'}};
    }
    return result;
}

function removeoptions() {
    rock.remove();
    paper.remove();
    scissors.remove();
    logic.remove();
    notice.remove();
    
}

function GUI(playerchoice,botchoice,gameresult){
    
    optionsDiv.innerHTML=`<img class="outcome" id="playerchoice" src="${srcsofimg[playerchoice]}"  alt='${playerchoice}' width="100px" height="100px"/>
    <h2 class="outcome" style="color:${gameresult['color']}">${gameresult['message']}</h2> 
    <img class="outcome" id="botchoice" src="${srcsofimg[botchoice]}" alt='${botchoice}' width="100px" height="100px"/>`
    
    restartDiv.innerHTML=`<button onclick="reset()">Restart</button>`
    note.innerHTML=`<h2 id="note" style="color:${gameresult['note']['color']}">${gameresult['note']['add']}</h2>`
}

function reset() {
    location.reload();
}