<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
=======
>>>>>>> parent of b7a7116... JSX fix done
=======
import React, { Component } from "react";
>>>>>>> parent of 2de51fe... little changes
export function AcceptWager({ wager, standardUnit, accept, decline }) {
  return (
    <div className="Accept_wager">
      <h2>
        Wager: {wager} {standardUnit}
      </h2>
      <button onClick={() => accept()}>Accept Wager</button>
      <button onClick={() => decline()}>Decline Wager</button>
    </div>
  );
}
