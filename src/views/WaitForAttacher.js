import React, { Component } from "react";
export function WaitForAttacher({ contractInfo }) {
  return (
    <div>
      <div className="Wait_For_Attacher">
        <h2 className="animate">Waiting for attacher...</h2>
        <textarea value={contractInfo} disabled />
      </div>
    </div>
  );
}
