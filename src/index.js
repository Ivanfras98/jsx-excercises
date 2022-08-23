import React from "react";

import  ReactDOM  from "react-dom/client";

const container = document.querySelector("#root")

const root = ReactDOM.createRoot(container)

const hello = <h1> Hello, World!!!</h1>

root.render(hello)