/*
 * Create a list that holds all of your cards
 */

 const icons = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-leaf", 
"fa fa-bomb", "fa fa-bicycle", "fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", 
"fa fa-leaf", "fa fa-bomb", "fa fa-bicycle"];

//I declared the following variables globally to avoid repetition

const reStartButton = document.querySelector('i.fa.fa-repeat');
const cardsContainer = document.querySelector('ul.deck');
const counter = document.querySelector('span.moves'); 
const timer = document.querySelector('span.timer-count');
const cardList = document.querySelectorAll('li.card');


//first thing is to shuffle the deck, the function is declared later. Is this ok?

shuffle(icons);

// create deck : the already shuffled icons are added to each card

for (let i = 0; i < icons.length; i++) {
	
	const card = document.createElement('li');
	card.classList.add('card');
	card.innerHTML = "<i class ='"+ icons[i] +"'></i>"
	cardsContainer.appendChild(card);

}


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

//remove event listeners using a clone node and then adding them back again

function removeEvListener() {

	const cardsContainerTwo = document.querySelector('ul.deck');
    
    const clone = cardsContainerTwo.cloneNode(true);
    
    cardsContainerTwo.parentNode.replaceChild(clone, cardsContainerTwo);
    
    setTimeout(function() {clone.parentNode.replaceChild(cardsContainerTwo, clone); }, 1500);
}

// counting the number of clicks a user made on an elements with '.card.open.show' class name and displays it BUG:increments if only one open card is clicked

function clickCount() {
	let rating = document.querySelector('ul.stars')
	let click = 0;

	cardsContainer.addEventListener('click', function() {

	if (event.target.className === "card open show") {
	click++;
	counter.innerHTML = click;
}
if (click > 22 && click < 40) {
	rating.innerHTML = ('<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>');
}
else if (click > 40) {
	rating.innerHTML = ('<li><i class="fa fa-star"></i></li>');
}
}
)
}

// timer function displays elapsed time since first click in seconds, if all cards are matched then the timer stops, congrats window appears

function increaseTime() {

	let seconds = 0;

	let addSec = setInterval(increaseSeconds, 1000);

	function increaseSeconds() {
		seconds += 1;
		let matchedCards = document.querySelectorAll('li.card.open.show.match');

	if (matchedCards.length === 16) {
		clearInterval(addSec);
		congrats();
	}
		timer.innerHTML = seconds;
	}
}

//function to notify user that he/she has won

function congrats() {

		let popup = document.querySelector('.popup')

		popup.style.display = "block";

		let closeButton = document.querySelector('i.fa.fa-times');

		closeButton.addEventListener('click', function() {
			popup.style.display = "none";
		});

		let message = document.querySelector('.popup-message');

		let time = timer.innerText;

		let stars = document.querySelectorAll('i.fa.fa-star');

		message.innerHTML = " <p>You have finished the game in " + time + " seconds. Your have earned "+ stars.length + " stars. Click <span class = 'play-again'>HERE</span> to play again.</p>" ;

		let play = document.querySelector('.play-again');

		play.addEventListener('click', function() {
			location.reload()})

	}

//add event listener if event target's className is 'card', open card if clicked, evaluate cards if two are open

cardsContainer.addEventListener('click', function() {

	if (event.target.className === 'card'){

	openCard();

	const openList = document.querySelectorAll('.open.show:not(.match)');

//check symbols when two cards are open

	if (openList.length === 2) {
	removeEvListener();
	setTimeout(checkCard, 1500);
	}
}
})

cardsContainer.addEventListener('click', clickCount());

//start measuring the time only when the player has started the game

cardsContainer.addEventListener('click', function() {
	if (counter.innerHTML === "1") {
		increaseTime();
	}
})


//restart game

reStartButton.addEventListener('click', function() {
	location.reload();
});

// Shuffle function from http://stackoverflow.com/a/2450976

function shuffle(array) {

    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};


// removes icons from the cards

function removeIcons() {

	let newList = shuffle(icons);
	
//	let cardList = document.querySelectorAll('li.card');

	for ( let i = 0; i < cardList.length; i++) {
	
	let thisCrd = cardList[i];

	thisCrd.innerHTML = "<i></i>";

}}