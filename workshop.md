# Blackjack Game

---

This workshop will focus on creating an decentralized application that allows two players play a game of [Blackjack](https://en.wikipedia.org/wiki/Blackjack).


Ensure you have gone through the [Rock Paper Scissors](https://docs.reach.sh/tut/rps/#tut) tutorial before attempting this.


Create a directory named blackjack `~/reach/blackjack` where you would work in your [reach](https://docs.reach.sh/quickstart/#quickstart) folder.

```bash
$ mkdir -p ~/reach/blackjack && cd ~/reach/blackjack
```

Confirm you have Reach installed in `~/reach`:

```bash
$ ../reach version
```

Initialize the Reach program by running:

```bash
$ ../reach init
```


### **Problem Analysis**

---

Any program design process begins with a problem analysis to identify the information that is pertinent to the issue at hand.

In our case, we have the following questions:

```
* Who is involved in this application?
* What information do they know at the start of the program?
* What information are they going to discover and use in the program?
* What funds change ownership during the application and how?
```

You should write your answers in your Reach program (`index.rsh`) using a comment. /* Remember comments are written like this. */

**Write down the problem analysis of this program as a comment.**

Compare _your answers_ to _mine_:

```
1. This blackjack game consists of 2 roles:
    * Alice: Who we know as the **Deployer**, as they are responsible for deploying the contract.
    * Bob: Who we would call the **Attacher**, as they attach to the contract.
2. At the start of the program, Alice would know the wager and the timeout limit (deadline) they set for that particular session.
3. During the course of the game, each player will know the value of their cards as they are *dealt* by the program. Before the end of the game they would also know the value of the opponent's cards.
4. Both players will both pay the wager and the winner of the game would get paid a reward or the wager is split evenly in case of a tie.  
```

It's fine if your responses vary from ours. Problem analysis is a "loose" approach that mimics creative expression more than it does monotonous computation. But it doesn't imply it's unnecessary, extraneous, or unwanted.

---

### **Data Definition**

After **Problem Analysis**, we move to **Data Definition** to describe what information our program needs, and how we can represent them in the program.

More details on [data types](https://docs.reach.sh/rsh/compute/#ref-programs-types) are available in Reach.

For our program we should decide:

* What functions/values does Alice need to start the game?
* What functions/values does Bob need to join the game?
* What functions/values do the two players need to play and observe each other's moves?
* What functions/values do the two players need to inform the contract of the value of their cards and assume their opponent has?

You should look back at your problem analysis to do this step. Whenever a participant starts off knowing something, then it is a field in the `interact` object. If they learn something, then it will be an argument to a function. If they provide something later, then it will be the result of a function.27

You should write your answers in your Reach file (`index.rsh`) as the participant interact interface for each of the participants.

#### **my data definitions**

```javascript
const Player = {
  ...hasRandom,
  dealCards: Fun([], Tuple(UInt, Bytes(8))), // this would return an array whose first element is the sum of the cards and the second element is the first card
  informTimeout: Fun([], Null),
  seeOutcome: Fun([UInt], Null),
  viewOpponentCards: Fun([Bytes(8)], Null),
};

const Alice = Participant("Alice", {
    ...Player,
    wager: UInt,
    deadline: UInt,
    revealCards: Fun([], Bytes(8)),
  })

const Bob = Participant("Bob", {
    ...Player,
    acceptWager: Fun([UInt], Null),
  })
```
##### **Things to note**

1. The cost of wager and deadline is represented as UInt ([unsigned integer](https://docs.reach.sh/rsh/compute/#rsh_UInt))
2. Alice also has a `revealCards` function to reveal their card at the end of the game. It returns a string of 8 [Bytes](https://docs.reach.sh/rsh/compute/#rsh_Bytes)
3. Both players share 4 more functions that perform the following respectively:
    * inform the contract of the sum of their random cards and the first card
    * Get informed of timeout
    * Get informed of the winner by accepting the sum value of their cards
    * Display the content of their hidden cards.

---

### **Communication Construction**

The manner in which participants, including the consensus network, communicate and transmit information is a vital component of a decentralized program.

To write yours, check the sample from the [*Rock, Paper, Scissors!*](https://docs.reach.sh/tut/rps/#tut) tutorial.

**Check ours** below:

```
1. Alice sets the wager and deadline and deploys the contract.
2. Bob accepts the wager and joins the game.
3. Two cards are randomly dealt to Alice. Only one of the card is revealed.
4. Bob sees the revealed card, and gets both of his card simultaneously.
5. Bob informs the contract of their total card and what they assume Alice's total card value is.
6. The contract calculated the result from this value.
5. 1.5 of the wager total is given to Bob if they win and half is returned to Alice for fairness, since their card was displayed. But if Alice wins the whole wager goes to them. In the even of Blackjack or a tie for both players, they split the funds equally.
```

###### **Write down the communication pattern for the program as code**

```javascript
//Reach Header
'reach 0.1'

// enumerations for the hands that may be played, as well as the outcomes of the game

const [isOutcome, A_WINS, DRAW, B_WINS] = makeEnum(3);

// function that computes the winner of the game.
const winner = (bobTotal, aliceTotal) => {
  if (bobTotal > 21 || (aliceTotal < 22 && aliceTotal > bobTotal)) {
    return A_WINS;
  } else {
    if (bobTotal < 22 && (bobTotal > aliceTotal || aliceTotal > 21)) {
      return B_WINS;
    } else return DRAW;
  }
};
```