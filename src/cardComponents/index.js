import "./styles.css";
import CardsWrapper from "./CardsWrapper";
import React from "react";

function Card() {
  return (
    <div className="App">
      <CardsWrapper cardsNumber="5" />
      <button onClick={() => window.location.reload()}>Reload Cards</button>
    </div>
  );
}

export default Card;
