//MEC
//deck
//..52 cards, 4 ranks 13 cards per rank

//player hand
//..recive cards, win lose

//dealer hand
//..recive cards, win lose

//21
//..Win

//bust
//..Lose


//GAMEPLAY
//bet phase
//dealing phase
//deal 1+ card to all/ dealers card is hidden (if 2 cards = 21, player wins 1.5 x bet the restart)
//Hit or Stand Phase / player rotation
//reveal cards phase
//16 or under draw +1 card
//if dealer bust = 2xbet, else closer to 21 vin 2xbet, others lose bet
//loop



// query selectors for buttons
// let deal = document.getElementById('#deal-Button');
// let hit = document.getElementById('#hit-Button');
// let stand = document.getElementById('#stand-Button');

// // query selectors for hands
// let playerHand = document.querySelector('#player_hand')
// let dealerHand = document.querySelector('#dealer-hand')

// Hands
let playerHand = [];
let dealerHand = [];

// Deck
const suits = ["Spades", "Diamonds", "Hearts", "Clubs"]
const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
let deck = []
for (var suitCard = 0; suitCard < 4; suitCard++){
    for (var rankCard = 0; rankCard < 13; rankCard++){
        deck.push(ranks[rankCard]+" of "+suits[suitCard]);
    }
}

// Shuffle Deck
function shuffleDeck(deck){
    for (var shuffle = 0; shuffle < 52; shuffle++){
        var switchCard = deck[shuffle]
        var shuffleIndex = Math.floor(Math.random() * 52);
        deck[shuffle] = deck[shuffleIndex];
        deck[shuffleIndex] = switchCard;
    }
}
shuffleDeck(deck);

// Deal Button
function deal(){
    playerHand = deck.pop(Math.Random) + " and " + deck.pop(Math.Random);
    dealerHand = deck.pop(Math.Random) + " and " + deck.pop(Math.Random);
    console.log(playerHand);
    console.log(dealerHand);
    console.log(deck.length + " " + "Cards Left");
}

function handValue(hand){
    var total = 0
    for (var i=0; i<hand.length;i++){
        total += hand[i]
    }
    return total
}

// Hit Button
function hit(){
    playerHand = deck.pop(Math.Random);
    console.log(playerHand);
    console.log(deck.length + " " + "Cards Left");
    if (handValue(playerHand)>21){
        console.log("Bust!");
    }
}

document.getElementById("player-hand").innerHTML = playerHand;
document.getElementById("dealer-hand").innerHTML = dealerHand;



//##########################################



// Deck
cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K',
    'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K',
    'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K',
    'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
card = []
playerHand = []


// Hit
// function dealCard(){
//     var card = Math.floor(cards.length * Math.random());
//     playerHand.push(cards[card]);
//     playerHand.push(cards[card]);
// }
// dealCard(cards)
// console.log(playerHand);

// Hit
function getCard(){
    var card = Math.floor(cards.length * Math.random());
    playerHand.push(cards[card]);
}

getCard(cards)
console.log(playerHand);

// Value
let total = playerHand.reduce((prev, current)=>{
    if (playerHand === 'A'){
        total = total++;
    }
    else if (playerHand ==='J'){
        total = total+=10;
    }
    else if (playerHand === 'Q'){
        total = total+=10;
    }
    else if (playerHand === 'K'){
        total = total+=10;
    }
    else{
        total = total += Int(playerHand)
    }
return total
})
console.log(total);


// var suits =["Spades", "Diamonds", "Hearts", "Clubs"]
// var cards =['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K',
//             'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K',
//             'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K',
//             'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

