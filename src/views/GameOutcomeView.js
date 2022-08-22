import { GameOutcome } from "../utils/constants";
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
=======
import React, { Component } from "react";
>>>>>>> parent of 2de51fe... little changes
export function GameOutcomeView({ outcome }) {
  return (
    <div className="Outcome">
      <h2>
        {outcome === GameOutcome.WINNER
          ? `You win!!! Good job`
          : outcome === GameOutcome.LOSS
          ? `You lose! Oops. Better luck next time.`
          : `It was a draw...`}
      </h2>
      <button onClick={() => window.location.reload()}>Play Again</button>
    </div>
  );
}
=======

export function GameOutcomeView ({ outcome }) {
    return (
      <div className="Outcome">
        <h2>
            {
                outcome === GameOutcome.WINNER?
                `You win!!! Good job`
                :
                outcome === GameOutcome.LOSS?
                `You lose! Oops. Better luck next time.`
                :
                `It was a draw...`
            }
        </h2>
        <button onClick={() => window.location.reload()}>
          Play Again
        </button>
      </div>
    );
  }
  
>>>>>>> parent of b7a7116... JSX fix done
