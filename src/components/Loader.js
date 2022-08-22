<<<<<<< HEAD
import React from "react";
=======
>>>>>>> parent of b7a7116... JSX fix done
import "./loader.css";

export default function Loader(props) {
  return (
    <div className="Loader">
        <h2 className="loader-text">{props.children}</h2>
      <div class="overflow dark" id="preload">
        <div class="circle-line">
          <div class="circle-red">&nbsp;</div>
          <div class="circle-blue">&nbsp;</div>
          <div class="circle-green">&nbsp;</div>
          <div class="circle-yellow">&nbsp;</div>
        </div>
      </div>
    
    </div>
  );
}
