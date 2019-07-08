
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

        keyboardAndChoice: {
           KeyQ: 'rock',
           KeyW: 'paper',
           KeyD: 'scissors'
        },

        choiceAndImg: {
            rock: 'images/rock_sm.png',
            paper: 'images/paper_sm.png',
            scissors: 'images/scissors_sm.png'
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

        keyboardAndChoice: {
           KeyP: 'rock',
           KeyO: 'paper',
           KeyK: 'scissors'
        },

        choiceAndImg: {
            rock: 'images/rock_sm.png',
            paper: 'images/paper_sm.png',
            scissors: 'images/scissors_sm.png'
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


// Checking which key is pressed
document.addEventListener('keydown', logKey);

function logKey(event) {
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
    return player1Choice;
 }

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
    player1Card.setAttribute('src', player1Symbol);
    document.querySelector('.player-1-choice').appendChild(player1Card);

    var player2Card = document.createElement('img');
    player2Card.setAttribute('src', player2Symbol);
    document.querySelector('.player-2-choice').appendChild(player2Card);
}