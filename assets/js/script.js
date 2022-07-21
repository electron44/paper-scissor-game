const choice = ['paper','rock','scissor']

function getComputerChoice(){
    index = Math.floor(Math.random() * 3)
    return choice[index]
}


function playRound(playerSelection,computerSelection){


    message = ""
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection=="rock"){
        if(computerSelection=="scissor"){
            message = "You win OwO!"
        }else if (computerSelection=="paper"){
            message = "Paw , You Lose :("
        }else{
            message = "Tie game"
        }

    }
    
    
    else if (playerSelection=="paper"){
        if(computerSelection=="rock"){
            message = "You win OwO!"
        }else if (computerSelection=="scissor"){
            message = "Paw , You Lose :("
        }else{
            message = "Tie game"
        }  
    }
    
    else{
            if(computerSelection=="paper"){
                message = "You win OwO!"
            }else if (computerSelection=="rock"){
                message = "Paw , You Lose :("
            }else{
                message = "Tie game"
            }  
        }

    return message;

    }

    

    n = 5

    playerSelection = prompt("Faites votre choix : (paper, rock, scissor)")
    computerSelection = getComputerChoice()

    console.log(playerSelection, computerSelection)
    winner = playRound(playerSelection,computerSelection)
    console.log(winner)

