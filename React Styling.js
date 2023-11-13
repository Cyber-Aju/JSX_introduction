import React from "react";
import ReactDOM from "react-dom";

let greet = "";
const customStyle = {
  color: ""
};
const d = new Date();
const hrs = d.getHours();
if (hrs >= 1 && hrs < 12) {
  greet = "Good Morning";
  customStyle.color = "red";
} else if (hrs >= 12 && 18) {
  greet = "Good Afternoon";
  customStyle.color = "green";
} else {
  greet = "Good Evening";
  customStyle.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {greet}
    </h1>
  </div>,
  document.getElementById("root")
);

