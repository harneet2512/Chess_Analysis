/*
		Designed by: SELECTO
		Original image: https://dribbble.com/shots/5311359-Diprella-Login
*/

let switchCtn = document.querySelector("#switch-cnt");
let switchC1 = document.querySelector("#switch-c1");
let switchC2 = document.querySelector("#switch-c2");
let switchCircle = document.querySelectorAll(".switch__circle");
let switchBtn = document.querySelectorAll(".switch-btn");
let aContainer = document.querySelector("#a-container");
let bContainer = document.querySelector("#b-container");
let allButtons = document.querySelectorAll(".submit");

let getButtons = (e) => e.preventDefault()

let changeForm = (e) => {

    switchCtn.classList.add("is-gx");
    setTimeout(function(){
        switchCtn.classList.remove("is-gx");
    }, 1500)

    switchCtn.classList.toggle("is-txr");
    switchCircle[0].classList.toggle("is-txr");
    switchCircle[1].classList.toggle("is-txr");

    switchC1.classList.toggle("is-hidden");
    switchC2.classList.toggle("is-hidden");
    aContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-z200");
}

let mainF = (e) => {
    for (var i = 0; i < allButtons.length; i++)
        allButtons[i].addEventListener("click", getButtons );
    for (var i = 0; i < switchBtn.length; i++)
        switchBtn[i].addEventListener("click", changeForm)
}

window.addEventListener("load", mainF);




// Define an array of chess quotes
const chessQuotes = [
"Chess is the gymnasium of the mind. - Blaise Pascal",
"The beauty of a move lies not in its appearance but in the thought behind it. - Aaron Nimzowitsch",
"Chess is everything: art, science, and sport. - Anatoly Karpov",
"The pawns are the soul of chess. - François-André Danican Philidor",
"Chess is the struggle against error. - Johannes Zukertort",
"Chess, like love, like music, has the power to make men happy. - Siegbert Tarrasch",
"The hardest game to win is a won game. - Emanuel Lasker",
"Chess is mental torture. - Garry Kasparov",
"Chess is a war over the board. The object is to crush the opponent's mind. - Bobby Fischer",
"Chess is not for the faint-hearted; it absorbs a person entirely. - Vladimir Kramnik",
"Chess is the art of analysis. - Mikhail Botvinnik",
"The most powerful weapon in chess is to have the next move. - David Bronstein",
"In chess, as in life, a man is his own most dangerous opponent. - Vasily Smyslov",
"Chess is the touchstone of intellect. - Johann Wolfgang von Goethe",
"Every chess master was once a beginner. - Irving Chernev",
"Chess, first of all, teaches you to be objective. - Alexander Alekhine",
"Chess is ruthless: you've got to be prepared to kill people. - Nigel Short",
"Chess is a sea in which a gnat may drink and an elephant may bathe. - Indian Proverb",
"In chess, the small one can become the big one. - Johann Wolfgang von Goethe",
"Chess is a war game over the board. The object is to crush the opponent's mind. - Bobby Fischer",
"Chess is a fairy tale of 1001 blunders. - Savielly Tartakower",
"The beauty of chess is it can be whatever you want it to be. It transcends language, age, race, religion, politics, and socioeconomic background.- Ashley",
"The sign of a great chess player is his ability to win a won game. - Tigran Petrosian",
"When you see a good move, look for a better one. - Emanuel Lasker",
"You may learn much more from a game you lose than from a game you win. - José Capablanca",
"The game of chess is not merely an idle amusement. - Benjamin Franklin",
"Chess is not a game; it is a passion.",
"Chess is like life. If you lose your queen, you can still win the game." , 
"Chess is the art which expresses the science of logic. - Mikhail Botvinnik",
"A good player is always lucky. - José Raúl Capablanca",
"There are two types of sacrifices: correct ones and mine. - Mikhail Tal",
"Chess is a war on the board. The object is to crush the opponent's mind. - Bobby Fischer",
"The winner of the game is the player who makes the next-to-last mistake. - Savielly Tartakower",
"Life is too short for chess. - Henry James Byron",
"Chess is not for timid souls. - Wilhelm Steinitz",
"Chess is a game of rational choices." ,
"Chess is the art of thinking. - Danish Proverb",
"Chess is the art of analysis. - Mikhail Botvinnik",
"Every pawn is a potential queen. - James Mason",
"It's always better to sacrifice your opponent's men.- Savielly Tartakower",
"Chess is a test of wills. - Paul Keres",
"Even a poor plan is better than no plan at all. - Mikhail Chigorin",
"Chess is a war between the mind's errors and the truth." ,
"You don't have to be a good player, just play a bad player and remember the moves. - Tartakower",
"A bad plan is better than no plan at all. - Frank Marshall",
"The King is a fighting piece. Use it! - Wilhelm Steinitz",
"The pin is mightier than the sword. - Fred Reinfeld",
"Chess is mental torture. - Garry Kasparov",
"Chess is a war over the board. The object is to crush the opponent's mind. - Bobby Fischer"
    // Add more quotes 
];


// Function to display a random chess quote
function displayRandomQuote() {
    // Get a random index from the chessQuotes array
    const randomIndex = Math.floor(Math.random() * chessQuotes.length);
    
    // Get the element with the specified ID
    const quoteElement = document.getElementById('getRandomQuote');

    // Update the text content of the element with a random chess quote
    if (quoteElement) {
        // Split the quote and author at the hyphen
        const quoteArray = chessQuotes[randomIndex].split(' - ');

        if (quoteArray.length === 2) {
            const [quote, author] = quoteArray;
            // Format the quote with author on a new line and 1 line space
            quoteElement.innerHTML = `<p>${quote}</p><br><p class="author">~ ${author}</p>`;
        } else {
            // If there's no author, display only the quote
            quoteElement.innerHTML = `<p>${quoteArray[0]}</p>`;
        }
    }
}

// Call the function initially
displayRandomQuote();

// Set interval to change the quote every 5 seconds (5000 milliseconds)
setInterval(displayRandomQuote, 8500); // Change the interval duration as needed
