"reach 0.1";

const [isOutcome, B_WINS, DRAW, A_WINS] = makeEnum(3);

const game = (aliceCard, bobCard) => {
  const a = aliceCard;
  const b = bobCard;

  if (a > 21) {
    return B_WINS;
  }
  if (a >= 17 && a < 22 && isDealersTurn) {
    if (a > b) {
      return A_WINS;
    }
    if (a < b && !isPlayerBusted) {
      return B_WINS;
    }
    if (a === b && !isPlayerBusted) {
      DRAW;
    }
  }
};

const Player = {
  ...hasRandom,
  PlayerCard: Fun([], Object({ value: UInt })),
  seeCardValue: Fun([], UInt),
  totalCardValue: Fun([], Array(UInt, 2)),
};

export const main = Reach.App(() => {
  const Alice = Participant("Alice", {
    ...Player,
    wager: UInt,
    aliceScore: Fun([], UInt),
  });
  const Bob = Participant("Bob", {
    ...Player,
    acceptWager: Fun([UInt], Null),
    bobScore: Fun([], UInt),
  });
  init();
  Alice.only(() => {
    const wager = declassify(interact.wager);
  });
  Alice.publish(wager).pay(wager);

  commit();

  Bob.only(() => {
    interact.acceptWager(wager);
  });

  Bob.pay(wager);

  var cardValue = 0;

  invariant(balance() == 2 * wager);
  while (cardValue < 2) {
    commit();
    Alice.only(() => {
      const AliceCard = declassify(interact.PlayerCard());
      const AliceCardValues = declassify(interact.seeCardValue());
    });
    Alice.publish(AliceCard);
    commit();
    Bob.only(() => {
      const BobCard = declassify(interact.PlayerCard());
      const BobCardValues = declassify(interact.seeCardValue());
    });
    Bob.publish(BobCard);
    cardValue = cardValue + 1;
    continue;
  }
  commit();
  Alice.only(() => {
    const totalCard = declassify(interact.totalCardValue());
  });
  Alice.publish(totalCard);
  transfer(2 * wager).to(Alice);
  commit();
  exit();
});
