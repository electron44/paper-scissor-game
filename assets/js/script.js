const choice = ['paper','rock','scissor']

let score_player = 0
let score_computer = 0
let number_round = 0 

const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissor = document.querySelector('.scissor')

const computer_choice = document.querySelector('.computer-choice')
const player_choice = document.querySelector('.player-choice')
const res = document.querySelector('.res')


function getComputerChoice(){
    index = Math.floor(Math.random() * 3)
    return choice[index]
}


function playRound(playerSelection,computerSelection){

    let message = ""

    playerSelection = playerSelection.toLowerCase()
    number_round = number_round + 1

    if (playerSelection === "rock"){
        if(computerSelection=="scissor"){
            message = "You win OwO!"
            score_player = score_player + 1
        }else if (computerSelection==="paper"){
            message = "Paw , You Lose :("
            score_computer = score_computer + 1
        }else if (computerSelection===playerSelection){
            message = "Tie game"
            number_round = number_round - 1
        }

    }
    
    
    else if (playerSelection === "paper"){
        if(computerSelection === "rock"){
            score_player = score_player + 1
        }else if (computerSelection==="scissor"){
            score_computer =score_computer + 1
        }else if (computerSelection===playerSelection){
            // score_computer = score_computer + 1
            // score_player = score_player + 1
            number_round = number_round - 1

        } 
    }
    
    else{
        if(computerSelection==="paper"){
                score_player = score_player + 1
        }else if (computerSelection==="rock"){
            score_computer = score_computer + 1
        }else if (computerSelection===playerSelection){
            message = "Tie game"
            // score_computer = score_computer + 1
            // score_player = score_player + 1
            number_round = number_round - 1

        }
        }
    }


function verifyEnd(number_round){
    if(number_round == 5){
        if (score_player>score_computer){
            res.innerHTML = `<h2>OwO ! You win by ${score_player}-${score_computer}</h2>`
        }else if(score_player<score_computer){
            res.innerHTML = `<h2> :( ! You Lose by ${score_player}-${score_computer}</h2>`
        }else{
            res.innerHTML = `<h2>Tie game X ! ${score_player}-${score_computer}</h2>`
        }
    }
}

    





playerSelection = ""
computerSelection = ""



function setImage(str,target){
    let extension = ""
    if (str === "rock" || str === "paper" ){
        extension = "webp"
    }else{
        extension = "jpeg"
    }

    target.style.backgroundImage = `url('assets/img/'${str}.${extension})`
}

rock.addEventListener('click',()=>{

    playerSelection = "rock"
    computerSelection = getComputerChoice()
    player_choice.style.backgroundImage = "url('assets/img/rock.jpeg')";
    computer_choice.style.backgroundImage = `url('assets/img/${computerSelection}.jpeg')`;
    
    playRound(playerSelection,computerSelection)
    verifyEnd(number_round)

})

paper.addEventListener('click',()=>{
    playerSelection = "paper"
    computerSelection = getComputerChoice()
    player_choice.style.backgroundImage = "url('assets/img/paper.jpeg')";
    computer_choice.style.backgroundImage = `url('assets/img/${computerSelection}.jpeg')`;

    playRound(playerSelection,computerSelection)
    verifyEnd(number_round)



})

scissor.addEventListener('click',()=>{
    playerSelection = "scissor"
    computerSelection = getComputerChoice()
    player_choice.style.backgroundImage = "url('assets/img/scissor.jpeg')";
    computer_choice.style.backgroundImage = `url('assets/img/${computerSelection}.jpeg')`;

    playRound(playerSelection,computerSelection)
    verifyEnd(number_round)
})





