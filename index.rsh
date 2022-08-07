"reach 0.1";

const Player = {
  ...hasRandom,
  PlayerCard: Fun([], Object({ value: UInt })),
  seeCardValue: Fun([], UInt),
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
    const AliceScore = declassify(interact.aliceScore());
  });
  Alice.publish(wager, AliceScore).pay(wager);

  commit();

  Bob.only(() => {
    interact.acceptWager(wager);
  });

  Bob.pay(wager);

  var cardValue = AliceScore;

  invariant(balance() == 2 * wager);
  while (cardValue < 21) {
    commit();
    Alice.only(() => {
      const AliceCard = declassify(interact.PlayerCard());
      const AliceCardValues = declassify(interact.seeCardValue());
    });
    Alice.publish(AliceCard);

    cardValue = cardValue + 1;
    continue;
  }
  var [bobValue] = [0];
  invariant(balance() == 2 * wager);
  while (bobValue < 3) {
    Bob.only(() => {
      const BobCard = declassify(interact.PlayerCard());
      const BobCardValues = declassify(interact.seeCardValue());
    });

    commit();

    Bob.publish(BobCard);
    // commit();
    bobValue = bobValue + 1;
    continue;
  } // write your program here

  transfer(2 * wager).to(Alice);
  commit();
  exit();
});
