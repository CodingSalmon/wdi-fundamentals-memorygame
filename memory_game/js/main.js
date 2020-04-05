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

function checkForMatch(){
if(cardsInPlay[0] === cardsInPlay[1] && cardsInPlay.length === 2)
{
	console.log("You've found a match!");
}
else
{
	console.log("Sorry try again.");
}	
}

function flipCard(cardId){

console.log("User flipped " + cards[cardId].rank);
console.log(cards[cardId].cardImage)
console.log(cards[cardId].suit)

cardsInPlay.push(cards[cardId].rank);

checkForMatch();
}

flipCard(0);
flipCard(2);