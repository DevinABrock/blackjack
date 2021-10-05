// Empty Hands & Deck
var playerHand = []
var dealerHand = []

// // Building The Deck
const cards = [
    {
        suit: "Spades", card: "Ace", value: 1
    },{
        suit: "Spades", card: 2, value: 2
    },{
        suit: "Spades", card: 3, value: 3
    },{
        suit: "Spades", card: 5, value: 5
    },{
        suit: "Spades", card: 6, value: 6
    },{
        suit: "Spades", card: 7, value: 7
    },{
        suit: "Spades", card: 8, value: 8
    },{
        suit: "Spades", card: 9, value: 9
    },{
        suit: "Spades", card: 10, value: 10
    },{
        suit: "Spades", card: "Joker", value: 10
    },{
        suit: "Spades", card: "Queen", value: 10
    },{
        suit: "Spades", card: "King", value: 10
    },{
        suit: "Clubs", card: "Ace", value: 1
    },{
        suit: "Clubs", card: 2, value: 2
    },{
        suit: "Clubs", card: 3, value: 3
    },{
        suit: "Clubs", card: 5, value: 5
    },{
        suit: "Clubs", card: 6, value: 6
    },{
        suit: "Clubs", card: 7, value: 7
    },{
        suit: "Clubs", card: 8, value: 8
    },{
        suit: "Clubs", card: 9, value: 9
    },{
        suit: "Clubs", card: 10, value: 10
    },{
        suit: "Clubs", card: "Joker", value: 10
    },{
        suit: "Clubs", card: "Queen", value: 10
    },{
        suit: "Clubs", card: "King", value: 10
    },{
        suit: "Diamonds", card: "Ace", value: 1
    },{
        suit: "Diamonds", card: 2, value: 2
    },{
        suit: "Diamonds", card: 3, value: 3
    },{
        suit: "Diamonds", card: 5, value: 5
    },{
        suit: "Diamonds", card: 6, value: 6
    },{
        suit: "Diamonds", card: 7, value: 7
    },{
        suit: "Diamonds", card: 8, value: 8
    },{
        suit: "Diamonds", card: 9, value: 9
    },{
        suit: "Diamonds", card: 10, value: 10
    },{
        suit: "Diamonds", card: "Joker", value: 10
    },{
        suit: "Diamonds", card: "Queen", value: 10
    },{
        suit: "Diamonds", card: "King", value: 10
    },{
        suit: "Hearts", card: "Ace", value: 1
    },{
        suit: "Hearts", card: 2, value: 2
    },{
        suit: "Hearts", card: 3, value: 3
    },{
        suit: "Hearts", card: 5, value: 5
    },{
        suit: "Hearts", card: 6, value: 6
    },{
        suit: "Hearts", card: 7, value: 7
    },{
        suit: "Hearts", card: 8, value: 8
    },{
        suit: "Hearts", card: 9, value: 9
    },{
        suit: "Hearts", card: 10, value: 10
    },{
        suit: "Hearts", card: "Joker", value: 10
    },{
        suit: "Hearts", card: "Queen", value: 10
    },{
        suit: "Hearts", card: "King", value: 10
    }
]

// Dealing Button
function deal(){
    playerHand.push(draw(cards))
    // var card = Math.floor(cards.length * Math.random())
    // playerHand.push(cards[card] && cards.pop(cards[card]))
    // var card = Math.floor(cards.length * Math.random())
    // playerHand.push(cards[card] && cards.pop(cards[card]))
    // var card = Math.floor(cards.length * Math.random())
    // dealerHand.push(cards[card] && cards.pop(cards[card]))
    // var card = Math.floor(cards.length * Math.random())
    // dealerHand.push(cards[card] && cards.pop(cards[card]))
    console.log(playerHand);
    console.log(dealerHand);
    console.log(cards.length);
}

// Test Functions
function draw(cards){
    var randomCard = Math.floor(cards.length * Math.random());
    return cards[randomCard]
}
function hit(){
    playerHand.push(draw(cards));
}

// Hit Button
// function hit(){
//     var card = Math.floor(cards.length * Math.random())
//     playerHand.push(cards[card] && cards.pop(cards[card])) //Push card to hand and pop from deck
//     console.log(playerHand);
//     console.log(dealerHand);
//     console.log(cards.length);
//     handValue()
// // Bust
//     if (handValue > 21){
//         console.log(Bust);
//     }
// }

// // Stand Button
// function stand(){
    
// }

// Hand Values
function handValue(){
    for (index = 0; index<playerHand.length; index++){
    console.log(cards.value);

    }

}
