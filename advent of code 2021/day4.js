// part1

const text = document.querySelector('pre').innerText;
let textArr = text.trim().split("\n");
const nums =  textArr.shift().split(',').map(x=>parseInt(x))
textArr.shift()
const boardsArr = []
let currentBoard = []
for (let i = 1; i < textArr.length; i++){
 	currentBoard.push(textArr[i-1].trim()
    .split(/\s+/).map(n => parseInt(n)))
	if(i % 5 === 0){
		boardsArr.push(currentBoard)
    currentBoard = []
    textArr.shift()
  }
}
let winnerIndex = 0
const checkRows = (board) => {
  for(let i = 0; i < board.length; i++){
	  for(let y = 0; y < 5; y++){
      let current = 0
      for(let x = 0; x < 5; x++){
    		current += board[i][y][x]
    	}
      if (current == -5){
        winnerIndex = i
        return true
      }
    }
  }
  return false
}
const checkCols = (board) => {
  for(let i = 0; i < board.length; i++){
	  for(let x = 0; x < 5; x++){
      let current = 0
      for(let y = 0; y < 5; y++){
    		current += board[i][y][x]
    	}
      if (current == -5){
        winnerIndex = i
        return true
      }
    }
  }
  return false
}
let cards = boardsArr
let keepRolling = true
let index = 0
let curRoll = nums[index]
while (keepRolling) {
  cards = cards.map(card=> (
    card.map(row => (
      row.map(num => num === curRoll ? -1: num)
    ))
  ))
  index++
  curRoll = nums[index]
  if(checkCols(cards) || checkRows(cards)){
		keepRolling = false
  }
  if(index>1000) keepRolling = false
}

curRoll = nums[index-1]

		const bingoBoard = cards[winnerIndex]
		console.log(bingoBoard, winnerIndex)
		let total = 0
	  for(let x = 0; x < 5; x++){
      for(let y = 0; y < 5; y++){
        if (bingoBoard[y][x] !== -1){
    		  total += bingoBoard[y][x]
      	}
      }
    }


console.log(total, curRoll, total*curRoll)

