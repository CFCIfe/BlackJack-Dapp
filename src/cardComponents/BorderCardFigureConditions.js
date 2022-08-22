<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
=======
>>>>>>> parent of b7a7116... JSX fix done
=======
import React, { Component } from "react";
>>>>>>> parent of 2de51fe... little changes
const BorderCardFigureConditions = ({ number }) => {
  return (
    <p>
      {number === 11 ? "J" : number === 12 ? "Q" : number === 13 ? "K" : number === 1? 'A' : number}
    </p>
  );
};

export default BorderCardFigureConditions;
