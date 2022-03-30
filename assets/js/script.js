const player = document.querySelector('.player')
const computer = document.querySelector('.computer')

const playerRock = player.querySelector('.rock')
const playerPaper = player.querySelector('.paper')
const playerScissors = player.querySelector('.scissors')

const computerRock = computer.querySelector('.rock')
const computerPaper = computer.querySelector('.paper')
const computerScissors = computer.querySelector('.scissors')

const gameMessage = document.querySelector('.game-message')

const startBtn = document.querySelector('.start-btn')

let playerChoose

function activePlayer(DOMElement, name) {
  DOMElement.onclick = () => {
    const nodeList = player.querySelectorAll('i')

    Array.from(nodeList).map((selector) => {
      selector.classList.remove('active')
    })
    DOMElement.classList.add('active')
    playerChoose = name
  }
}

activePlayer(playerRock, 'rock')
activePlayer(playerPaper, 'paper')
activePlayer(playerScissors, 'scissors')

function getComputerChoose() {
  const id = Math.floor(Math.random() * 3)

  switch (id) {
    case 0:
      return 'rock'
    case 1:
      return 'paper'
    case 2:
      return 'scissors'
  }
}

startBtn.onclick = function () {
  computerChooseNodeList = computer.querySelectorAll('i')

  Array.from(computerChooseNodeList).map((selector) => {
    selector.classList.remove('active')
  })

  if (playerChoose) {
    const computerChoose = getComputerChoose()
    const computerChooseDOM = computer.querySelector(`i.${computerChoose}`)

    gameMessage.textContent = ''

    computerChooseDOM.classList.add('active')

    if (playerChoose === computerChoose) {
      gameMessage.style.color = '#ffbe0b'
      gameMessage.textContent = 'Draw'
    } else if (
      (playerChoose === 'rock' && computerChoose === 'scissors') ||
      (playerChoose === 'paper' && computerChoose === 'rock') ||
      (playerChoose === 'scissors' && computerChoose === 'paper')
    ) {
      gameMessage.style.color = '#52b69a'
      gameMessage.textContent = 'You win!'
    } else {
      gameMessage.style.color = '#f15bb5'
      gameMessage.textContent = 'You lose!'
    }
  } else {
    gameMessage.style.color = '#7209b7'
    gameMessage.textContent = 'Choose your weapon!'
  }
}
