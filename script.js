
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
        keyDown: {
            q: 'KeyQ',
            w: 'KeyW',
            d: 'KeyD'
        },

        choice: {
            rock: 'rock',
            paper: 'paper',
            scissors: 'scissors'
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
        keyDown: {
            p: 'KeyP',
            o: 'KeyO',
            k: 'KeyK'
        },

        choice: {
            rock: 'rock',
            paper: 'paper',
            scissors: 'scissors'
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


// console.log(weapons['rock']['strength with paper']);
// console.log(players['player1']['won']);
// console.log(players['player1']['choice']['rock']);
// console.log(weapons[players['player1']['choice']['rock']]);
// console.log(players['player2']['choice']['paper']);
// console.log(weapons['rock']['strength with ' + players['player2']['choice']['paper']]);

// Check which weapon chosen
// print if player1 weapon = rock & player2 weapon = paper
// var player1Choice = players['player1']['choice']['rock'];
// var player2Choice = players['player2']['choice']['paper'];
// var state = weapons[player1Choice]['strength with ' + player2Choice];

// Check who won
// var msg = players['player1']['result'][state];
// var displayMsg = "player1 " + msg;
// console.log(displayMsg);

var keyQ = players['player1']['keyDown']['q'];
var keyW = players['player1']['keyDown']['w'];
var keyD = players['player1']['keyDown']['d'];

var keyP = players['player2']['keyDown']['p'];
var keyO = players['player2']['keyDown']['o'];
var keyK = players['player2']['keyDown']['k'];


// Checking which key is pressed
document.addEventListener('keydown', logKey);

function logKey(event) {
    var x = event.code;
    // console.log(x);
    // if ((player1Choice !== null) && (player2Choice !== null)) {
    //     checkWin(x);
    // }
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
 }

    // Checking which key is pressed
    // if ((x === keyQ) || (x === keyW) || (x === keyD)) {
    //     // console.log("player1 pressed " + x);
    // } else if ((x === keyP) || (x === keyO) || (x === keyK)) {
    //     // console.log("player2 pressed " + x);
    // } else {
    //     console.log("wrong key pressed!");
    // }
//};

var checkWin = function () {
    console.log("checking");

    var player1Weapon;
    var player2Weapon;


    switch (player1Choice) {
        // checking player1 choice
        case keyQ:
            // console.log(players['player1']['choice']['rock']);
            player1Weapon = players['player1']['choice']['rock'];
            // console.log("player 1 weapon: ", player1Weapon);
            break;
        case keyW:
            // console.log("go into w")
            // console.log(players['player1']['choice']['paper']);
            player1Weapon = players['player1']['choice']['paper'];
            // console.log(player1Weapon);
            break;
        case keyD:
            // console.log(players['player1']['choice']['scissors']);
            player1Weapon = players['player1']['choice']['scissors'];
            // console.log(player1Weapon);
            break;
    }
    switch (player2Choice){
        // checking player2 choice
        case keyP:
            // console.log(players['player2']['choice']['rock']);
            player2Weapon = players['player1']['choice']['rock'];
            // console.log(player2Weapon);
            break;
        case keyO:
            // console.log(players['player2']['choice']['paper']);
            player2Weapon = players['player1']['choice']['paper'];
            // console.log(player2Weapon);
            break;
        case keyK:
            // console.log(players['player2']['choice']['scissors']);
            player2Weapon = players['player1']['choice']['scissors'];
            // console.log(player2Weapon);
            break;
    };


    // Check which weapon chosen for each player
    var state = weapons[player1Weapon]['strength with ' + player2Weapon];
    console.log("state of game: " + state);

    // Check which player won
    var msg = players['player1']['result'][state];
    var displayMsg = "player1 " + msg;
    console.log(displayMsg);

};


// var state = weapons[players['player1']['choice']['rock']]['strength with ' + players['player2']['choice']['paper']];
// console.log(state);
// console.log('player1 ' + players['player1']['result'][state]);


// var str = 'strength with ' + players['player2']['choice']['paper'];
// console.log(str);

// *using for loops with objects
// *using if else with conditions with objects
// *accessing & comparing objects keys values