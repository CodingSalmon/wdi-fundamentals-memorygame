console.log("Up and running!");

const cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
},
];

const cardsInPlay = [];

function createBoard(){

	let boardSpace = document.getElementById('boardSpace');

	let newBoard = document.createElement('div');

	newBoard.setAttribute('id', "game-board");

	boardSpace.appendChild(newBoard);

	for(let i = 0; i < cards.length; i++){
		let cardElement = document.createElement('img');

		cardElement.setAttribute('src', "images/back.png");

		cardElement.setAttribute('data-id', i)

		cardElement.addEventListener('click', flipCard);

		const board = document.querySelector('#game-board');

		board.appendChild(cardElement);
	}
}

function checkForMatch(){
if(cardsInPlay.length % 2 === 0)
{
	if(cardsInPlay[0] === cardsInPlay[1]){
		console.log("You've found a match!");
		alert("You've found a match!");
	}
	else{
		console.log("Sorry try again.");
		alert("Sorry try again.");
	}
}
else
{
	console.log("Sorry try again.");
}
}

function flipCard(){
let cardId = this.getAttribute('data-id');

console.log("User flipped " + cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);

cardsInPlay.push(cards[cardId].rank);

this.setAttribute('src', cards[cardId].cardImage);

checkForMatch();
}

function resetBoard(){
	document.getElementById('game-board').remove();

	createBoard();
}

document.getElementById('reset').addEventListener('click', resetBoard);

createBoard();