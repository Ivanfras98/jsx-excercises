import React from "react";

import ReactDOM from "react-dom";

const container = document.querySelector("#root");

const root = ReactDOM.createRoot(container);

function sum(a, b) {
  return <h2>{a + b}</h2>;
}

root.render(sum(2, 5));
