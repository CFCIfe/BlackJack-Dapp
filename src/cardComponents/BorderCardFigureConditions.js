<<<<<<< HEAD
import React from "react";
=======
>>>>>>> parent of b7a7116... JSX fix done
const BorderCardFigureConditions = ({ number }) => {
  return (
    <p>
      {number === 11 ? "J" : number === 12 ? "Q" : number === 13 ? "K" : number === 1? 'A' : number}
    </p>
  );
};

export default BorderCardFigureConditions;
