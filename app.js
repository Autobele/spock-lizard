const userBadge = document.getElementById('user-badge')
const compBadge = document.getElementById('computer-score')
const userScore_span = document.querySelector('#user-score')
const computerScore_span = document.querySelector('#computer-score')
const result_p = document.querySelector(".result > h2")
const rock = document.getElementById('r')
const paper = document.getElementById('p')
const scissor = document.getElementById('s')
const lizard = document.getElementById('l')
const spock = document.getElementById('sp')
let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['r', 'p', 's', 'l', 'sp']
    const randomNumber = Math.floor(Math.random(choices) * 5)
    return choices[randomNumber]
}

function convertToLetter(letter){
    if (letter == 'r') return "Rock";
    if (letter == 'p') return "Paper";
    if (letter == 's') return "Scissor";
    if (letter == 'l') return "Lizard";
    if (letter == 'sp') return "Spock";
}

function addResultRounded(userChoice, effect){
    console.log(document.querySelector(`#${userChoice} > img`))
    document.querySelector(`#${userChoice} > img`).classList.add(effect)
    setTimeout(() => {
        (document.querySelector(`#${userChoice} > img`).classList.remove(effect))
    }, 300);
}

function win(userChoice, computerChoice) {
    userScore++
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    result_p.innerHTML = `${convertToLetter(userChoice)} beats ${convertToLetter(computerChoice)}. You win!`
    addResultRounded(userChoice, 'green-border')
}

function lose(userChoice, computerChoice) {
    computerScore++
    computerScore_span.innerHTML = computerScore
    userScore_span.innerHTML = userScore
    result_p.innerHTML = `${convertToLetter(computerChoice)} smash ${convertToLetter(userChoice)}. You lose!`
    addResultRounded(userChoice, 'red-border')
}

function draw(userChoice, computerChoice) {
    computerScore_span.innerHTML = computerScore
    userScore_span.innerHTML = userScore
    result_p.innerHTML = `${convertToLetter(userChoice)} equals ${convertToLetter(computerChoice)}. Draw!`
    addResultRounded(userChoice, 'gray-border')
}


function startGame(userChoice) {
    const computerChoice = getComputerChoice()
    console.log(userChoice + computerChoice)
    // Rules
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'rl':
        case 'pr':
        case 'psp':
        case 'lp':
        case 'lsp':
        case 'sps':
        case 'spr':
        case 'sp':
        case 'sl':
            win(userChoice, computerChoice)
            break;
        case 'sr':
        case 'lr':
        case 'rp':
        case 'spp':
        case 'pl':
        case 'spl':
        case 'ssp':
        case 'rsp':
        case 'ps':
        case 'ls':
            lose(userChoice, computerChoice)
            break;
        default:
            draw(userChoice, computerChoice)
            break;
    }

}


function main() {

    function handlerClick(el) {
        el.addEventListener('click', function () {
            startGame(this.id);
        })
    }

    handlerClick(rock)
    handlerClick(paper)
    handlerClick(scissor)
    handlerClick(lizard)
    handlerClick(spock)
}


main();