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

export function ConnectAccount({ connect }) {
  const [secret, setSecret] = useState("");

  return (
    <div className="Connect">
      <button onClick={() => connect()}>Connect To MyAlgoConnect Wallet</button>
      <hr />
      <div className="mnemonic">
        <textarea
          placeholder="Paste Mnemonic Key"
          onChange={(e) => setSecret(e.target.value)}
        />
        <br />
        <button onClick={() => connect(secret.trim(), true)}>Connect</button>
      </div>
    </div>
  );
}
