<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
=======
>>>>>>> parent of b7a7116... JSX fix done
=======
import React, { Component } from "react";
>>>>>>> parent of 2de51fe... little changes
export function WaitForAttacher({ contractInfo }) {
  return (
    <div>
        <div className="Wait_For_Attacher">
            <h2 className="animate">Waiting for attacher...</h2>
            <textarea value={contractInfo} disabled/>
        </div>
    </div>
  );
}
