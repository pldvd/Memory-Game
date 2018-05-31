/*
 * Create a list that holds all of your cards
 */
const reStartButton = document.querySelector('i.fa.fa-repeat');
const cardsContainer = document.querySelector('ul.deck');

// reveal and hide cards

function openCard() {
event.target.classList.toggle('open');
event.target.classList.toggle('show');
}

// check if the cards have the same symbols and either freeze or turn them back

function checkCard() {

const openList = document.querySelectorAll('.open.show:not(.match)');

if (openList[0].innerHTML === openList[1].innerHTML) {
openList[0].classList.toggle("match");
openList[1].classList.toggle("match");
} 
else {

openList[0].className = 'card';
openList[1].className = 'card';
	}
}

//add event listener if event target's className is 'card'

cardsContainer.addEventListener('click', function() {
	if (event.target.className === 'card'){
	openCard();

	const openList = document.querySelectorAll('.open.show:not(.match)');
	
	if (openList.length === 2) {
	setTimeout("checkCard()", 1500);
	}
}
})

/*
//add event listener to each card and call the opeCard function -discarded for performance reasons

for ( let i = 0; i < cards.length; i++) {
	
	let thisCrd = cards[i];
	
	thisCrd.addEventListener('click', openCard);
	thisCrd.addEventListener('click', function() {

	const openList = document.querySelectorAll('.open.show:not(.match)');
	
	if (openList.length === 2) {

	setTimeout("checkCard()", 1500);

	}
})
}
*/

reStartButton.addEventListener('click', function() {
	console.log('The click works')
});


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page */

// Shuffle function from http://stackoverflow.com/a/2450976
/*function shuffle(cards) {

    var currentIndex = cards.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}; */


/*
 * set up the event listener for a card. If a card is clicked:
 *  ######display the card's symbol (put this functionality in another function that you call from this one)#######
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
