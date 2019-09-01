"use strict";
// function
// this 保留创建时的 this 对象。
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
// 重载： 官方示例中， 重载仅为前两个内容。第三个不是重载的一部分，但是由于编译报错。这里我个人理解，仍然是需要任何类型的重载，在处理范围外，抛出相应错误。
let suits = ['hearts', 'spades', 'clubs', 'diamonds'];
function pickCard(x) {
    if (typeof x == 'object') {
        console.log(x.length);
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    else if (typeof x == 'number') {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
let myDeck = [{ suit: 'diamonds', card: 2 }, { suit: 'spades', card: 10 }, { suit: 'hearts', card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log('card1: ' + pickedCard1.card + 'of' + pickedCard1.suit);
let pickedCard2 = pickCard(15);
console.log('card2: ' + pickedCard2.card + 'of' + pickedCard2.suit);
