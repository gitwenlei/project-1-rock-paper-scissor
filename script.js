
var weapons = {
    rock: {
        'strength with paper': false, // rock lose
        'strength with scissor': true // rock win
    },

    paper: {
        'strength with scissor': false,  // paper lose
        'strength with rock': true // paper win
    },

    scissor: {
        'strength with rock' : false, // scissor lose
        'strength with paper': true // scissor win
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
            scissor: 'scissor'
        },

        result: {
            true: 'won',
            false: 'lost',
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
            scissor: 'scissor'
        },

        result: {
            true: 'won',
            false: 'lost',
            won: 0,
            lost: 0,
        }
    }
};

// console.log(weapons['rock']['strength with paper']);
// console.log(players['player1']['won']);
// console.log(players['player1']['choice']['rock']);
// console.log(weapons[players['player1']['choice']['rock']]);
// console.log(players['player2']['choice']['paper']);
// console.log(weapons['rock']['strength with ' + players['player2']['choice']['paper']]);

// print if player1 weapon = rock & player2 weapon = paper
var player1Choice = players['player1']['choice']['rock'];
var player2Choice = players['player2']['choice']['paper'];
var state = weapons[player1Choice]['strength with ' + player2Choice];
// console.log(vvv);

var msg = players['player1']['result'][state];
var displayMsg = "player1 " + msg;
console.log(displayMsg);

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

    // Checking which key is pressed
    // if ((x === keyQ) || (x === keyW) || (x === keyD)) {
    //     // console.log("player1 pressed " + x);
    // } else if ((x === keyP) || (x === keyO) || (x === keyK)) {
    //     // console.log("player2 pressed " + x);
    // } else {
    //     console.log("wrong key pressed!");
    // }

    // checking which key is pressed & display weapon choice
    switch (x) {
        case keyQ:
            console.log(players['player1']['choice']['rock']);
            break;
        case keyW:
            console.log(players['player1']['choice']['paper']);
            break;
        case keyD:
            console.log(players['player1']['choice']['scissor']);
            break;
        default:
            console.log("wrong key pressed");
    }
};



// var state = weapons[players['player1']['choice']['rock']]['strength with ' + players['player2']['choice']['paper']];
// console.log(state);
// console.log('player1 ' + players['player1']['result'][state]);


// var str = 'strength with ' + players['player2']['choice']['paper'];
// console.log(str);

// *using for loops with objects
// *using if else with conditions with objects
// *accessing & comparing objects keys values