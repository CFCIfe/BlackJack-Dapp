import "./styles.css";
import CardsWrapper from "./CardsWrapper";
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
=======
>>>>>>> parent of b7a7116... JSX fix done
=======
import React, { Component } from "react";
>>>>>>> parent of 2de51fe... little changes

function Card() {
  return (
    <div className="App">
      <CardsWrapper cardsNumber="5" />
      <button onClick={() => window.location.reload()}>Reload Cards</button>
    </div>
  );
}

export default Card;
