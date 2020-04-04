console.log("Up and running!");

const cards = ["queen", "queen", "king", "king"];

const cardsInPlay = [];

let cardOne = cards[0];
let cardTwo = cards[1];
let cardThree = cards[2];
let cardFour = cards[3];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

if((cardsInPlay[0] === cardsInPlay[1]) && cardsInPlay.length === 2)
{
	alert("You've found a match!");
}
else
{
	alert("Sorry try again.")
}