
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
           Digit1: 'rock',
           Digit2: 'paper',
           Digit3: 'scissors'
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
           Digit8: 'rock',
           Digit9: 'paper',
           Digit0: 'scissors'
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

var p1Clicked = false;
var p2Clicked = false;

var p1Typed = false;
var p2Typed = false;

var name1 = null;
var name2 = null;

var event1 = null;
var event2 = null;

var player1Score = 0;
var player2Score = 0;

var finalMsg = "";


window.onload = function() {
    initScreen();

    document.querySelector(".return-to-main-btn").addEventListener("click", function() {
        location.reload(true);
    });

    document.querySelector(".novice").addEventListener("click", function(){
        showNoviceLevel();
    });

    document.querySelector(".expert").addEventListener("click", function(){
        showExpertLevel();
    });

    document.querySelector(".master").addEventListener("click", function(){
        showMasterLevel();
    });


};


var initScreen = function() {
    document.querySelector('.msg').innerText = "Rock, Paper, Scissors";
    document.querySelector('.player-1-board').classList.add('hidden');
    document.querySelector('.player-2-board').classList.add('hidden');
    document.querySelector('.versus').classList.add('hidden');
    document.querySelector('.player-1-cards').classList.add('hidden');
    document.querySelector('.player-2-cards').classList.add('hidden');
    document.querySelector('.novice').classList.remove('hidden');
    document.querySelector('.expert').classList.remove('hidden');
    document.querySelector('.master').classList.remove('hidden');
    document.querySelector('.sub-instruct').classList.add('hidden');
    document.querySelector('.game-status').classList.add('hidden');

    let cards =  document.querySelectorAll('.cards');
    for (var i = 0; i < cards.length; i++) {
        cards[i].classList.add('hidden');
    }
};

var showNoviceLevel = function() {
    document.querySelector('.novice').classList.add('hidden');
    document.querySelector('.expert').classList.add('hidden');
    document.querySelector('.master').classList.add('hidden');
    document.querySelector('.player-1-board').classList.remove('hidden');
    document.querySelector('.player-2-board').classList.remove('hidden');
    document.querySelector('.versus').classList.remove('hidden');
    document.querySelector('.player-1-cards').classList.remove('hidden');
    document.querySelector('.player-2-cards').classList.remove('hidden');
    document.querySelector('.sub-instruct').classList.remove('hidden');
    document.querySelector('.game-status').classList.remove('hidden');
    document.querySelector('.versus').innerText = "v.s";

    let cards =  document.querySelectorAll('.cards');
        for (var i = 0; i < cards.length; i++) {
            cards[i].classList.remove('hidden');
        }

    showCards();
};


var endNoviceLevel = function() {
    document.querySelector('.player-1-board').classList.add('hidden');
    document.querySelector('.player-2-board').classList.add('hidden');
    document.querySelector('.versus').classList.add('hidden');
    document.querySelector('.sub-instruct').classList.add('hidden');
};

var showExpertLevel = function() {
    document.querySelector('.novice').classList.add('hidden');
    document.querySelector('.expert').classList.add('hidden');
    document.querySelector('.master').classList.add('hidden');
    document.querySelector('.player-1-board').classList.remove('hidden');
    document.querySelector('.player-2-board').classList.remove('hidden');
    document.querySelector('.versus').classList.remove('hidden');
    document.querySelector('.player-1-cards').classList.remove('hidden');
    document.querySelector('.player-2-cards').classList.remove('hidden');

    document.querySelector('.sub-instruct').classList.remove('hidden');
    document.querySelector('.sub-instruct').innerHTML = "Pressed the assigned keyboard keys to select your weapon. <br /> Player 1 Keys: 1 (Rock), 2 (Paper), 3 (Scissors) <br /> Player 2 Keys: 8 (Rock), 9 (Paper), 0 (Scissors) ";

    document.querySelector('.game-status').classList.remove('hidden');
    document.querySelector('.versus').innerText = "v.s";

    let cards =  document.querySelectorAll('.cards');
        for (var i = 0; i < cards.length; i++) {
            cards[i].classList.add('hidden');
        }
}

var showMasterLevel = function() {
    document.querySelector('.novice').classList.add('hidden');
    document.querySelector('.expert').classList.add('hidden');
    document.querySelector('.master').classList.add('hidden');
    document.querySelector('.player-1-board').classList.remove('hidden');
    document.querySelector('.player-2-board').classList.remove('hidden');
    document.querySelector('.versus').classList.remove('hidden');
    document.querySelector('.player-1-cards').classList.remove('hidden');
    document.querySelector('.player-2-cards').classList.remove('hidden');
    document.querySelector('.sub-instruct').classList.remove('hidden');
    document.querySelector('.game-status').classList.remove('hidden');
    document.querySelector('.versus').innerText = "v.s";

    let cards =  document.querySelectorAll('.cards');
        for (var i = 0; i < cards.length; i++) {
            cards[i].classList.remove('hidden');
        }

    showCards();
    generateRandomCards(3);
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

    var player1Bank = [];
    player1Bank[0] = players['player1']['choiceAndImg'][player1Deck[0]];
    player1Bank[1] = players['player1']['choiceAndImg'][player1Deck[1]];
    player1Bank[2] = players['player1']['choiceAndImg'][player1Deck[2]];

    for (var i = 0; i < player1Bank.length; i++) {
        console.log(player1Bank[i]);
    }

    var player2Bank = [];
    player2Bank[0] = players['player2']['choiceAndImg'][player2Deck[0]];
    player2Bank[1] = players['player2']['choiceAndImg'][player2Deck[1]];
    player2Bank[2] = players['player2']['choiceAndImg'][player2Deck[2]];

    for (var i = 0; i < player2Bank.length; i++) {
        console.log(player2Bank[i]);
    }
};


// Display this random cards
var showCards = function() {

        // Set Player 1 Cards
        let player1Card1 = document.createElement('img');
        player1Card1.classList.add("img-fluid");
        player1Card1.setAttribute('src', 'images/rock.png');
        player1Card1.setAttribute('id', 'Digit1');
        document.querySelector('#player-1-card-1').appendChild(player1Card1);

        let player1Card2 = document.createElement('img');
        player1Card2.classList.add("img-fluid");
        player1Card2.setAttribute('src', 'images/paper.png');
        player1Card2.setAttribute('id', 'Digit2');
        document.querySelector('#player-1-card-2').appendChild(player1Card2);

        let player1Card3 = document.createElement('img');
        player1Card3.classList.add("img-fluid");
        player1Card3.setAttribute('src', 'images/scissors.png');
        player1Card3.setAttribute('id', 'Digit3');
        document.querySelector('#player-1-card-3').appendChild(player1Card3);


        // Set Player 2 Cards
        let player2Card1 = document.createElement('img');
        player2Card1.classList.add("img-fluid");
        player2Card1.setAttribute('src', 'images/scissors.png');
        player2Card1.setAttribute('id', 'Digit0');
        document.querySelector('#player-2-card-1').appendChild(player2Card1);

        let player2Card2 = document.createElement('img');
        player2Card2.classList.add("img-fluid");
        player2Card2.setAttribute('src', 'images/rock.png');
        player2Card2.setAttribute('id', 'Digit8');
        document.querySelector('#player-2-card-2').appendChild(player2Card2);

        let player2Card3 = document.createElement('img');
        player2Card3.classList.add("img-fluid");
        player2Card3.setAttribute('src', 'images/paper.png');
        player2Card3.setAttribute('id', 'Digit9');
        document.querySelector('#player-2-card-3').appendChild(player2Card3);


        var cardsList = document.querySelectorAll('.cards');
        let x = cardsList.length;

        for (var i = 0; i < x/2 ; i++) {
            cardsList[i].addEventListener('click', function() {
                if (!p1Clicked) {
                    p1Clicked = true;
                    this.remove();

                    name1 = event.target.id;
                    event1 = event.target;
                    player1Choice = name1;

                    let url = this.childNodes[0].src;
                    // console.log(url);
                    displayChosenCard1(url);
                }
            });
         }

        let cardPlayed = 0;

        for (var i = 3; i < x ; i++) {
            cardsList[i].addEventListener('click', function() {

                    if (p1Clicked) {
                        if (!p2Clicked) {
                            p2Clicked = true;
                            this.remove();

                            // Check num of cards played in deck
                            cardPlayed++;
                            console.log('card played:' + cardPlayed);

                            name2 = event.target.id;
                            event2 = event.target;
                            player2Choice = name2;

                            let url = this.childNodes[0].src;
                            // console.log(url);
                            displayChosenCard2(url);

                            if (p1Clicked && p2Clicked) {
                                // player1Choice = name1;
                                checkWinClick(player1Choice, player2Choice);

                                var onePtFiveSeconds = setTimeout(function() {
                                    // console.log("time out");
                                    // removeCards();
                                    removeCardsClick();
                                    removeThumbNails();
                                    hideStatus();
                                    p1Clicked = false;
                                    p2Clicked = false;
                                    //IF CARDS PLAYED IS 3,
                                    if (cardPlayed === 3) {
                                        console.log("RUN END NOVICE LEVEL");
                                        endNoviceLevel();
                                        displayFinalWinner(finalMsg);
                                    }

                                }, 1500);
                            }
                        }
                    } else {
                        alert("Please Wait for Player 1");
                    }
        });
    }
}; // END OF SHOWCARDS FUNCTION


// Checking which key is pressed
document.addEventListener('keydown', logKey);

function logKey(event) {
    removeCards();
    var x = event.code;

    // // Check for invalid key pressed
    if ((x == 'Digit1') ||  (x == 'Digit2') ||  (x == 'Digit3') ||  (x == 'Digit8') ||  (x == 'Digit9') ||  (x == 'Digit0')) {

        if (player1Choice === null) {
            player1Choice = x;
        } else {
            player2Choice = x;
            checkWin(player1Choice, player2Choice);

            player1Choice = null;
            player2Choice = null;
        }
    }
};


var checkWinClick = function (p1Choice, p2Choice) {
    // console.log("checking now");

    var player1Weapon = (players['player1']['keyboardAndChoice'][p1Choice]);
    var player2Weapon = (players['player2']['keyboardAndChoice'][p2Choice]);

    // Display game msg base on player's choice
    // displayChosenCards(player1Weapon, player2Weapon);
    gameMsg(player1Weapon, player2Weapon);
};


var checkWin = function (p1Choice, p2Choice) {
    // console.log("checking now");

    var player1Weapon = (players['player1']['keyboardAndChoice'][p1Choice]);
    var player2Weapon = (players['player2']['keyboardAndChoice'][p2Choice]);

    // Display game msg base on player's choice
    displayChosenCards(player1Weapon, player2Weapon);
    gameMsg(player1Weapon, player2Weapon);
};

// Display game message based on player's choice
var gameMsg = function(p1, p2) {

    var state = weapons[p1]['strength with ' + p2];
    var displayMsg;
    // Check which player won
    var msg = players['player1']['result'][state];

    if (msg === 'won') {
        displayMsg = "player 1 " + msg; // this means player 1 won
        player1Score = player1Score + 1;
        console.log('P1: ' + player1Score);

    } else if (msg === 'lost') { // this means player 1 lost. therefore player 2 won
        displayMsg = "player 2 won";
        player2Score = player2Score + 1;
        console.log('P2: ' + player2Score);

    } else {
        displayMsg = "it's a draw";
    }

    if (player1Score < player2Score) {
        finalMsg = 'Congrats Player 2! <br /> You are the winner!';
    } else if (player1Score > player2Score) {
        finalMsg = 'Congrats Player 1! <br /> You are the winner!';
    } else {
        finalMsg = "It's a draw!";
    }

    displayScore(player1Score, player2Score);
    displayStatus(displayMsg);
};


var displayStatus = function(msg) {
    var thirdSecond = setTimeout(function() {
        document.querySelector('.game-status').classList.remove('hidden');
        document.querySelector('.game-status').innerHTML = msg;
    }, 300);
};

var hideStatus = function() {
    document.querySelector('.game-status').classList.add('hidden');
    document.querySelector('.game-status').innerHTML = "";
};

var displayScore = function(p1Score, p2Score) {
    document.querySelector('.player-1-points').innerHTML = 'Points: ' + p1Score;
    document.querySelector('.player-2-points').innerHTML = 'Points: ' + p2Score;
};

var displayFinalWinner = function(finalMsg) {
    document.querySelector('.versus').setAttribute('style', 'color: #f5D6C6;');
    // document.querySelector('.versus').remove();
    var finalWinner = document.createElement('div');
    finalWinner.classList.add('final-winner');
    finalWinner.innerHTML = finalMsg;
    document.querySelector('.game-in-play').appendChild(finalWinner);
}


var displayChosenCards = function(p1Weapon, p2Weapon) {
    var player1Symbol = players['player1']['choiceAndImg'][p1Weapon];
    var player2Symbol = players['player2']['choiceAndImg'][p2Weapon];

    // console.log(player1Symbol);
    // console.log(player2Symbol);

    var player1Card = document.createElement('img');
    player1Card.classList.add("img-fluid");
    player1Card.setAttribute('src', player1Symbol);
    player1Card.setAttribute('id', 'p1-img-key');
    document.querySelector('.player-1-choice').appendChild(player1Card);

    var player2Card = document.createElement('img');
    player2Card.classList.add("img-fluid");
    player2Card.setAttribute('src', player2Symbol);
    player2Card.setAttribute('id', 'p2-img-key');
    document.querySelector('.player-2-choice').appendChild(player2Card);
};

var displayChosenCard1 = function(p1Weapon) {
    // var player1Symbol = players['player1']['choiceAndImg'][p1Weapon];

    // console.log(player1Symbol);

    var player1Card = document.createElement('img');
    player1Card.classList.add("img-fluid");
    player1Card.setAttribute('src', p1Weapon);
    player1Card.setAttribute('id', 'p1-img-click');
    document.querySelector('.player-1-choice').appendChild(player1Card);
};

var displayChosenCard2 = function(p2Weapon) {
    // var player2Symbol = players['player2']['choiceAndImg'][p2Weapon];

    // console.log(player2Symbol);

    var player2Card = document.createElement('img');
    player2Card.classList.add("img-fluid");
    player2Card.setAttribute('src', p2Weapon);
    player2Card.setAttribute('id', 'p2-img-click');
    document.querySelector('.player-2-choice').appendChild(player2Card);
};


var removeCards = function() {
    var images = document.querySelectorAll("img");
    // console.log("images length: ", images.length)
    for (i=0;i<images.length;i++) {
        images[i].remove()
    }
};

var removeCardsClick = function() {
    var img1 = document.querySelector('#p1-img-click');
    var img2 = document.querySelector('#p2-img-click');
    img1.remove();
    img2.remove();
};

var removeThumbNails = function() {
    var thumb1 = event1;
    // console.log('thumb:' + thumb1);
    thumb1.remove();

    var thumb2 = event2;
    // console.log('thumb:' + thumb2);
    thumb2.remove();
};