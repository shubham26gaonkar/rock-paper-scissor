let userScore = 0
let compScore = 0

const choices = document.querySelectorAll(".choice")

const message = document.querySelector("#message")

//draw game
const drawGame = () =>{
    console.log("Game Draw")
    message.innerText = "Game Draw"
    message.style.background = "black"
}

const userWin = (userChoice,compChoice) =>{
    let userPoints = document.querySelector("#user-score")
    userScore++
    userPoints.innerText = userScore
    message.style.background = "green"
    console.log("User Win")
    message.innerText = `You Win !! Your Choice ${userChoice} beats Comp Choice ${compChoice}`
}

const compWin = (userChoice,compChoice) =>{
    let compPoints = document.querySelector("#comp-score")
    compScore++
    compPoints.innerText = compScore
    message.style.background = "red"
    console.log("Comp Win")
    message.innerText = `You Lose !! Comp Choice ${compChoice} beats Your Choice ${userChoice}`
}

//play game function
const playGame = (userChoice) =>{
    let compChoice = genCompChoice()
    console.log("User Choice", userChoice)
    console.log("Comp Choice", compChoice)

    if(userChoice === compChoice){
        drawGame()
    }
    else if((userChoice==="rock" && compChoice==="sissor") || (userChoice==="sissor" && compChoice==="paper") || (userChoice==="paper" && compChoice==="rock")){
        userWin(userChoice,compChoice)
    }
    else{
        compWin(userChoice,compChoice)
    }

}

//generate comp choice
const genCompChoice = ()=>{
    const comptOptions = ["rock", "paper", "sissor"]
    const optionIdx = Math.floor(Math.random() * 3)
    return comptOptions[optionIdx]

}

//generate user choice
choices.forEach((choice)=>{
    console.dir(choice)
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})