import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const [accAlice, accBob] = await stdlib.newTestAccounts(2, startingBalance);
console.log("Hello, Alice and Bob!");

console.log("Launching...");
const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());
const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));

let blackJackGame = {
  deployer: {
    scorespan: 0,
    score: 0,
  },
  attacher: {
    scorespan: 0,
    score: 0,
  },
  cards: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "Q", "J", "A"],
  cardsMap: {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    K: 10,
    J: 10,
    Q: 10,
    A: [1, 11],
  },
};

const randomCards = () => {
  let randomIndex = Math.floor(Math.random() * 13);
  return blackJackGame["cards"][randomIndex];
};

let AliceCardsValue = [];
let BobCardsValue = [];
let AliceScore = 0;
let BobScore = 0;
let totalScore = [];
let cardValue = {
  value: "",
};
let whoScore = {
  score: 0,
};
const OUTCOME = ["Bob wins", "Draw", "Alice wins"];
const Player = (who) => ({
  ...stdlib.hasRandom,
  PlayerCard: () => {
    let card = randomCards();
    if (card == "A") {
      if (whoScore.score + blackJackGame["cardsMap"][card][1] > 10) {
        cardValue.value = blackJackGame["cardsMap"][card][0];
      } else {
        cardValue.value = blackJackGame["cardsMap"][card][1];
      }
    } else {
      cardValue.value = blackJackGame["cardsMap"][card];
    }

    if (who == "Alice") {
      AliceCardsValue.push(cardValue.value);
      AliceScore = AliceCardsValue.reduce((a, b) => {
        return a + b;
      }, 0);
    } else {
      BobCardsValue.push(cardValue.value);
      BobScore = BobCardsValue.reduce((a, b) => {
        return a + b;
      }, 0);
    }
    console.log(`${who} played ${card}`);
    return cardValue;
  },

  seeCardValue: (card) => {
    console.log(
      `${who} card value is ${
        card ? cardValue.value : blackJackGame["cardsMap"][card]
      }`
    );
    return cardValue.value;
  },

  totalCardValue: () => {
    AliceScore = AliceCardsValue.reduce((a, b) => {
      return a + b;
    }, 0);
    BobScore = BobCardsValue.reduce((a, b) => {
      return a + b;
    }, 0);
    totalScore = [];
    totalScore.push(AliceScore, BobScore);
    return totalScore;
  },
  seeOutcome: (outcome) => {
    console.log(`${who} saw outcome ${OUTCOME[outcome]} `);
  },
});

console.log("Starting backends...");
await Promise.all([
  backend.Alice(ctcAlice, {
    ...Player("Alice"),
    wager: stdlib.parseCurrency(5),
    aliceScore: () => {
      console.log(`Alice Score is ${AliceScore}`);
      return AliceScore;
    },
  }),
  backend.Bob(ctcBob, {
    ...Player("Bob"),
    acceptWager: (amt) => {
      console.log(`Bob accepts the wager of ${fmt(amt)}.`);
      extraCard: () => {
        return Math.floor(Math.random() * 12);
      };
    },
    bobScore: () => {
      console.log(`Bob score is ${BobScore}`);
      return BobScore;
    },
  }),
]);
console.log(AliceCardsValue);
console.log(BobCardsValue);
console.log(`{total alice card is ${totalScore[0]}}`);
console.log(`{total bob card is ${totalScore[1]}}`);
console.log("Goodbye, Alice and Bob!");
// To - DO
// Push card in array..
// Implement logic for A card
// implement logic to play when less than 16 or >= 21
