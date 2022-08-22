import React, { Component } from "react";
export function DeployOrAttach({ setAsDeployer }) {
  return (
    <div className="Deploy_Attach">
      <button onClick={() => setAsDeployer()}>Deploy new contract</button>
      <h2>Or</h2>
      <button onClick={() => setAsDeployer(false)}>
        Attach to already existing contract
      </button>
    </div>
  );
}
