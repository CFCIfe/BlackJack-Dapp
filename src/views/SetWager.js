<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react";
=======
import { useState } from "react";
>>>>>>> parent of b7a7116... JSX fix done
=======
import { useState } from "react";
import React, { Component } from "react";
>>>>>>> parent of 2de51fe... little changes

export function SetWager({ deploy }) {
  const [wager, setWager] = useState(0);
  return (
    <div className="Set_Wager">
      <input
        name="wager"
        type={"number"}
        value={wager}
        onChange={(e) => setWager(e.target.value)}
        min={0}
      />
      <button onClick={() => deploy(wager)}>Set the wager</button>
    </div>
  );
}
