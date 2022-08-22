import { GameOutcome } from "../utils/constants";
import React from "react";

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
