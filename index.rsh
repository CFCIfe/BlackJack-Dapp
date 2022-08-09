/**
 * Blackjack
 * Project: A blackjack-like game with asymmetric payouts based on proximity to 21.
 * Article used: https://blog.devgenius.io/blackjack-game-logic-basics-built-with-react-hooks-8e7e41fbbb87
 * App reference - https://github.com/nstanford5/Reach-Blackjack/
 *
 * Alice - Dealer. Bob - Player
 *
 * Face cards are valued at 10,
 * Number cards are valued by their number.Address
 * An ace can be valued as 1 or 11.
 *
 * Player goes first and chooses deal / stay after seeing both cards.
 * Deal returns another card to be added to the sum.
 * Stay sums up all dealt card and;
 *
 * The Dealer begins.
 * The dealer will continue to draw cards until
 * their sum is greater than the player or the sum exceeds 21.
 *
 * If the dealer has blackjack, the player instantly loses their wager,
 * unless they too have blackjack.
 * If the player has blackjack and dealer does not, the wager gets paid 3 to 2,
 * That is to say, 1.5 times the original bet.
 *
 * The player’s goal is to achieve a score of 21, although in some cases it is
 * best to stay at a low number and not risk “busting” (going over 21) because
 * the dealer also has a chance to bust which causes the player to win too.
 */

"reach 0.1";

const [isOutcome, B_WINS, A_WINS, DRAW] = makeEnum(3);

const winner = (bTotal, aTotal) => {
  if (aTotal > 21 || (bTotal < 22 && bTotal > aTotal)) {
    return A_WINS;
  } else {
    if (aTotal < 22 && (aTotal > bTotal || bTotal > 21)) {
      return B_WINS;
    } else return DRAW;
  }
};

// verification steps for the program - https://docs.reach.sh/guide/assert/#guide-assert
// Possible combinations to help the engine verify results for winners

assert(winner(20, 21) == A_WINS);
assert(winner(20, 20) == DRAW);
assert(winner(21, 20) == B_WINS);
// below 21
assert(winner(13, 17) == A_WINS);
assert(winner(19, 19) == DRAW);
assert(winner(17, 15) == B_WINS);
// over 21
assert(winner(27, 17) == A_WINS);
assert(winner(16, 22) == B_WINS);
// draw
assert(winner(19, 19) == DRAW);
assert(winner(21, 21) == DRAW);

const General = {
  ...hasRandom,
  startGame: Fun([], Tuple(UInt, UInt)),
  informTimeout: Fun([], Null),
  dealCard: Fun([], UInt),
  lastCard: Fun([UInt], Null),
  overTwentyOne: Fun([], Null),
  seeOutcome: Fun([UInt, UInt, UInt, UInt, UInt], Null),
  updateCards: Fun([UInt], Null),
  resetBoard: Fun([], Null),
  checkScore: Fun([UInt, UInt], Null),
  getAceValue: Fun([UInt, UInt], UInt),
};

const cardValue = (card) => {
  if (card == 1) {
    return 11;
  } else {
    if (card < 10) {
      return card;
    } else {
      return 10;
    }
  }
};

const deadline = 20;

export const main = Reach.App(() => {
  const Bob = Participant("Bob", {
    ...General,
    //bob sets wager against the house
    wager: UInt,
  });
  const Alice = Participant("Alice", {
    ...General,
    // dealer accepts wager to be fair
    acceptWager: Fun([UInt], Null),
    startCard: Fun([], UInt),
  });
  init();

  const informTimeout = () => {
    each([Bob, Alice], () => {
      interact.informTimeout();
    });
  };

  Bob.only(() => {
    const wager = declassify(interact.wager);
  });

  Bob.publish(wager).pay(wager);
  commit();

  Alice.only(() => {
    interact.acceptWager(wager);
  });

  Alice.pay(wager).timeout(relativeTime(deadline), () =>
    closeTo(Bob, informTimeout)
  );

  // best of 3 rounds. they both start with zero score. first to 2 wins
  var [bobScore, aliceScore] = [0, 0];
  invariant(balance() == 2 * wager);

  while (bobScore < 3 && aliceScore < 3) {
    commit();

    each([Bob, Alice], () => {
      interact.checkScore(bobScore, aliceScore);
      // To-Do: implement logic to discard this view on new game
      interact.resetBoard();
    });

    // bob draws both cards when game starts
    Bob.only(() => {
      const [bobFirstCard, bobSecondCard] = declassify(interact.startGame());
    });

    // publish both cards
    Bob.publish(bobFirstCard, bobSecondCard).timeout(
      relativeTime(deadline),
      () => closeTo(Alice, informTimeout)
    );
    commit();

    // Alice starts with 2 cards but shows only one at the start.
    Alice.only(() => {
      const [_aliceFirstCard, _aliceSecondCard] = interact.startGame();
      const [_aliceCommit, _aliceSalt] = makeCommitment(
        interact,
        _aliceFirstCard
      );
      const aliceCommit = declassify(_aliceCommit);
      const aliceSecondCard = declassify(_aliceSecondCard);
    });

    // knowledge assertion https://docs.reach.sh/rsh/step/#unknowable that Bob does not know value of Alice card

    unknowable(Bob, Alice(_aliceFirstCard));

    Alice.publish(aliceCommit, aliceSecondCard).timeout(
      relativeTime(deadline),
      () => closeTo(Alice, informTimeout)
    );

    Bob.only(() => {
      interact.updateCards(aliceSecondCard);
    });
    Alice.only(() => {
      interact.updateCards(bobSecondCard);
    });

    // Game logic
    //Player Logic

    Alice.only(() => {
      interact.lastCard(bobFirstCard);
    });

    // compute outcome
    const outcome = winner(bobSum, aliceSum);

    each([Player, Dealer], () => {
      interact.seeOutcome(outcome, pSum, dSum, pTally, dTally);
    });

    if (outcome == 0) {
      [bobScore, aliceScore] = [bobScore + 1, aliceScore];
      continue;
    } else {
      if (outcome == 1) {
        // dealer wins, increment aliceScore
        [bobScore, aliceScore] = [bobScore, aliceScore + 1];
        continue;
      } else {
        // draw don't update Score
        [bobScore, aliceScore] = [bobScore, aliceScore];
        continue;
      }
    }
  }

  each([Player, Dealer], () => {
    interact.checkScore(bobScore, aliceScore);
  });

  // transfer wagers and Fee to winner
  transfer(2 * wager).to(bobScore > aliceScore ? Bob : Alice);
  commit();
  exit();
});
