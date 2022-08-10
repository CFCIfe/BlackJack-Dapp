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

let cards = [];

const Player = (who) => ({
  ...stdlib.hasRandom,
  dealCards: () => {
    for (let i = 0; i < 2; i++) {
      let card = randomCards();
      cards.push(blackJackGame["cardsMap"][card]);
    }
    console.log(`${cards[0]} and ${cards[1]} were drawn`);
    return [[cards[0] + cards[1]], String(cards[0])];
  },
  seeOutcome: (outcome) => {
    console.log(`${who} saw ${outcome}`);
  },
  viewOpponentCards: (card) => {
    console.log(`${who} played ${card}`);
  },
});

console.log("Starting backends...");
await Promise.all([
  backend.Alice(ctcAlice, {
    ...stdlib.hasRandom,
    ...Player("Alice"),
    // implement Alice's interact object here
    wager: stdlib.parseCurrency(5),
    revealCards: () => {
      let cardValue = cards.toString();
      return cardValue.replaceAll(",", "");
    },
  }),
  backend.Bob(ctcBob, {
    ...stdlib.hasRandom,
    ...Player("Bob"),
    // implement Bob's interact object here
    acceptWager: (amt) => {
      console.log(`Bob accepts the wager of ${fmt(amt)}.`);
    },
  }),
]);

console.log("Goodbye, Alice and Bob!");
