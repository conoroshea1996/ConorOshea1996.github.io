const userscore = 0;
const computerscore = 0;

const userscore_span = document.getElementById("user-score");
const computerscore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const Result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice(){
    const choices = ["r","p","s"];
    const random = Math.floor(Math.random()*3);
    return choices[random];
}


function game(userChoice){
    const computerChoice = getComputerChoice();
        console.log("computer picked = >" + computerChoice);
        console.log("you picked = >" + userChoice);
}
game("Cool")

function main(){
rock_div.addEventListener('click', function(){
   game ("r")
})
paper_div.addEventListener('click', function(){
  game ("p")
})
scissors_div.addEventListener('click', function(){
    game("s")
})
}
main()



