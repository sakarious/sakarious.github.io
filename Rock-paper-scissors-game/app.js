//Caching the DOM; Storing DOM in variables for future use. 
let UserScore = 0;
let CompScore = 0;
const Userscore_span = document.getElementById("user-score");
const Compscore_span = document.getElementById("comp-score");
const Scoreboard_div = document.querySelector(".score-board");
const Result_p = document.querySelector(".result > p");
const Rock_div = document.getElementById("rock");
const Paper_div = document.getElementById("paper");
const Scissors_div = document.getElementById("scissors");

//const choices = ["rock","paper","scissor"];
function getComputerChoice(){
    const choices = ["rock","paper","scissors"];
    let calc = (Math.random() * 3);
    let result = Math.floor(calc);
    return choices[result];
}

function convertToWord(str) {
    if (str == "rock") {
        return "Rock"
    }
    if (str == "scissors") {
        return "Scissors"
    }
    if(str == "paper"){
        return "Paper";
    }
    
}

function win(userChoice, computerChoice) {
    UserScore++
    Userscore_span.innerHTML = UserScore;
    Compscore_span.innerHTML = CompScore;
    let user = "user".fontsize(3).sub();
    let comp = "comp".fontsize(3).sub();
    Result_p.innerHTML = `${convertToWord(userChoice)}${user} beats ${convertToWord(computerChoice)}${comp}. You win 🥂🎊🎊🎉🎉` ;
}

function lose(userChoice, computerChoice) {
    CompScore++;
    Userscore_span.innerHTML = UserScore;
    Compscore_span.innerHTML = CompScore;
    let user = "user".fontsize(3).sub();
    let comp = "comp".fontsize(3).sub();
    Result_p.innerHTML = `${convertToWord(userChoice)}${user} loses ${convertToWord(computerChoice)}${comp}. You lose 🤡🤡🤡` ;
}

function draw(userChoice, computerChoice) {
    let user = "user".fontsize(3).sub();
    let comp = "comp".fontsize(3).sub();
    Result_p.innerHTML = `${convertToWord(userChoice)}${user} equals ${convertToWord(computerChoice)}${comp}. Its a draw 🤕🤕` ;
}

// const game_result = getComputerChoice();
// console.log(game_result);

// if (game_result == 0){
//     console.log(`The computer chose ${choices[game_result]}`);
// } else if (game_result == 1){
//     console.log(`The computer chose ${choices[game_result]}`);
// } else {
//     console.log(`The computer chose ${choices[game_result]}`);
// }

// switch (getComputerChoice()) {
//     case 0:
//         console.log("The computer chose Rock");    
//     break;
//     case 1:
//         console.log("The computer chose Paper");
//     break;
//     case 2:
//         console.log("The computer chose scissors");
// }

// getComputerChoice();

function game(userChoice) {
    const computerChoice = getComputerChoice();
    /*
    WIN CASES
    if user choses rock and computer choses scissors
    if user choses paper and computer choses rock
    if user choses scissors and computer choses paper

    LOSE CASES
    if user choses rock and computer choses paper
    if user choses paper and computer choses scissors
    if user choses scissors and computer choses rock

    DRAW CASES
    if user choses rock and computer choses rock
    if user choses paper and computer choses paper
    if user choses scissor and computer choses scissor
    */
    switch(userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
            break;

        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
            break;

    }
    //Use switch statement to check result

}

//function resetsGame(){
    document.getElementById("button").addEventListener('click', function(){
        UserScore = 0
        CompScore = 0
        let reset_word = "Click Either Rock, Paper or Scissors to start Game."
        Userscore_span.innerHTML = UserScore;
        Compscore_span.innerHTML = CompScore;
        Result_p.innerHTML = reset_word

        //UserScore.reset();
        //CompScore = 0;
        //document.getElementById("user-score").reset();
        // Compscore_span = document.getElementById("comp-score");
        // Scoreboard_div = document.querySelector(".score-board");
         //Result_p.reset();
         //Rock_div = document.getElementById("rock");
        //Paper_div = document.getElementById("paper");
        //Scissors_div.reset()
    })
//}

//game("paper");


function main() {
    Rock_div.addEventListener('click', function(){
        game("rock")
    });

    Paper_div.addEventListener('click', () => {
            game("paper")
        });

    Scissors_div.addEventListener('click', function(){
        game("scissors")
    });
} 

main();
