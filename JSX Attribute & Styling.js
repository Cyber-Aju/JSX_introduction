import React from "react";
import ReactDOM from "react-dom";

const name = "Ajmal Akram";
const d = new Date();
const year = d.getFullYear();
const img = "https://picsum.photos/200";
ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      hey vrooo
    </h1>
    <div>
      <img alt="random" src={img + "?grayscale"} />
    </div>
  </div>,
  document.getElementById("root")
);
