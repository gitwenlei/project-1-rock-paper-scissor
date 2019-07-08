
var weapons = {
    rock: {
        'strength with rock': null, // it's a draw
        'strength with paper': false, // rock lose
        'strength with scissors': true // rock win
    },

    paper: {
        'strength with paper': null, // it's a draw
        'strength with scissors': false,  // paper lose
        'strength with rock': true // paper win
    },

    scissors: {
        'strength with scissors': null, // it's a draw
        'strength with rock' : false, // scissors lose
        'strength with paper': true // scissors win
    }
};

var players = {
    player1: {

        options: {
            0: 'rock',
            1: 'paper',
            2: 'scissors'
        },

        keyboardAndChoice: {
           KeyQ: 'rock',
           KeyW: 'paper',
           KeyE: 'scissors'
        },

        choiceAndImg: {
            rock: 'images/rock.png',
            paper: 'images/paper.png',
            scissors: 'images/scissors.png'
        },

        result: {
            true: 'won',
            false: 'lost',
            null: 'draw',
            won: 0,
            lost: 0
        }
    },

    player2: {

        options: {
            0: 'rock',
            1: 'paper',
            2: 'scissors'
        },

        keyboardAndChoice: {
           KeyI: 'rock',
           KeyO: 'paper',
           KeyP: 'scissors'
        },

        choiceAndImg: {
            rock: 'images/rock.png',
            paper: 'images/paper.png',
            scissors: 'images/scissors.png'
        },

        result: {
            true: 'won',
            false: 'lost',
            null: 'draw',
            won: 0,
            lost: 0

        }
    }
};

var player1Choice = null;
var player2Choice = null;

var player1Deck = [];
var player2Deck = [];

window.onload = function() {
    initScreen();
};

var initScreen = function() {
    document.querySelector('.msg').innerText = "Rock, Paper, Scissors";
    document.querySelector('.player-1-board').classList.add('hidden');
    document.querySelector('.player-2-board').classList.add('hidden');
    document.querySelector('.versus').classList.add('hidden');
    document.querySelector('.start').classList.remove('hidden');
};

document.querySelector(".start").addEventListener("click", function(){
    showBoard();
});

var showBoard = function() {
    document.querySelector('.start').classList.add('hidden');
    document.querySelector('.player-1-board').classList.remove('hidden');
    document.querySelector('.player-2-board').classList.remove('hidden');
    document.querySelector('.versus').classList.remove('hidden');
    document.querySelector('.versus').innerText = "v.s";

};


// Shuffle the array of cards
var generateRandomCards = function(max) {
    let numArray = [];
    player1Deck = [];
    player2Deck = [];

    for (var i = 0; i < max; i++) {
        let num = Math.floor(Math.random() * Math.floor(max));
        numArray.push(num);

        let cards1 = players['player1']['options'][numArray[i]];
        player1Deck.push(cards1);
    }

    for (var j = max; j > 0; j--) {
            let num = Math.floor(Math.random() * Math.floor(max));
            numArray.push(num);

            let cards2 = players['player2']['options'][numArray[j]];
            player2Deck.push(cards2);
    }
    console.log("deck 1:" + player1Deck);
    console.log("deck 2:" + player2Deck);
};


// Display this random cards
var showCards = function() {

        // Set Player 1 Cards
        let player1Card1 = document.createElement('img');
        player1Card1.classList.add("img-fluid");
        player1Card1.setAttribute('src', 'images/rock.png');
        document.querySelector('.player-1-card-1').appendChild(player1Card1);

        let player1Card2 = document.createElement('img');
        player1Card2.classList.add("img-fluid");
        player1Card2.setAttribute('src', 'images/paper.png');
        document.querySelector('.player-1-card-2').appendChild(player1Card2);

        let player1Card3 = document.createElement('img');
        player1Card3.classList.add("img-fluid");
        player1Card3.setAttribute('src', 'images/scissors.png');
        document.querySelector('.player-1-card-3').appendChild(player1Card3);


        // Set Player 2 Cards
        let player2Card1 = document.createElement('img');
        player2Card1.classList.add("img-fluid");
        player2Card1.setAttribute('src', 'images/rock.png');
        document.querySelector('.player-2-card-1').appendChild(player2Card1);

        let player2Card2 = document.createElement('img');
        player2Card2.classList.add("img-fluid");
        player2Card2.setAttribute('src', 'images/paper.png');
        document.querySelector('.player-2-card-2').appendChild(player2Card2);

        let player2Card3 = document.createElement('img');
        player2Card3.classList.add("img-fluid");
        player2Card3.setAttribute('src', 'images/scissors.png');
        document.querySelector('.player-2-card-3').appendChild(player2Card3);
};


// Display this random cards
var showRandomCards = function() {
    generateRandomCards(3);

    let player1Card = document.createElement('img');
    player1Card.classList.add("img-fluid");
    player1Card.setAttribute('src', 'images/paper.png');
    document.querySelector('.player-1-card-1').appendChild(player1Card);
};



// Checking which key is pressed
document.addEventListener('keydown', logKey);

function logKey(event) {

    removeCards();
    var x = event.code;
    // console.log(x);

    if (player1Choice === null){
        player1Choice = x;
        console.log("player one choice: ", player1Choice);
    }
    else {
        player2Choice = x;
        console.log("player two choice: ", player2Choice);
        checkWin();
        player1Choice = null;
        player2Choice = null;
    }
 };

var checkWin = function () {
    console.log("checking now");

    var player1Weapon = (players['player1']['keyboardAndChoice'][player1Choice]);
    var player2Weapon = (players['player2']['keyboardAndChoice'][player2Choice]);

    // Display game msg base on player's choice
    displayChosenCards(player1Weapon, player2Weapon);
    gameMsg(player1Weapon, player2Weapon);
};

// Display game message based on player's choice
var gameMsg = function(p1, p2) {

    showCards();
    var state = weapons[p1]['strength with ' + p2];
    console.log("state of game: " + state);

    // Check which player won
    var msg = players['player1']['result'][state];

    if (msg === 'won') {
        var displayMsg = "player 1 " + msg; // this means player 1 won
    } else if (msg === 'lost') { // this means player 1 lost. therefore player 2 won
        displayMsg = "player 2 won";
    } else {
        displayMsg = "it's a draw";
    }
    console.log(displayMsg);
    // return displayMsg;
    displayStatus(displayMsg);
};

var displayStatus = function(msg) {
    document.querySelector('.msg').innerHTML = msg;
}

var displayChosenCards = function(p1Weapon, p2Weapon) {
    var player1Symbol = players['player1']['choiceAndImg'][p1Weapon];
    var player2Symbol = players['player2']['choiceAndImg'][p2Weapon];

    console.log(player1Symbol);
    console.log(player2Symbol);

    var player1Card = document.createElement('img');
    player1Card.classList.add("img-fluid");
    player1Card.setAttribute('src', player1Symbol);
    document.querySelector('.player-1-choice').appendChild(player1Card);

    var player2Card = document.createElement('img');
    player2Card.classList.add("img-fluid");
    player2Card.setAttribute('src', player2Symbol);
    document.querySelector('.player-2-choice').appendChild(player2Card);
}

var removeCards = function() {
    var images = document.querySelectorAll("img");
    console.log("images length: ", images.length)
    for (i=0;i<images.length;i++) {
        images[i].remove()
    }
}