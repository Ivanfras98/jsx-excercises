import React from "react";
import  ReactDOM  from "react-dom";

export class App extends React.Component {
  render() {
    return (
      <div>
        {helloSomeone("Ciccio")}
      </div>
    );
  }
}

function helloSomeone(name) {
  return <h1>Hello, {name}</h1>;
}

const container = document.querySelector("#root")

const root = ReactDOM.createRoot(container)

root.render(<App />)