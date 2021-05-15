import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React from "react";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

const elemen1 = React.createElement("div", null, "hello");
ReactDOM.render(elemen1, rootElement);

const peopl2 = [{ name: "siva" }, { name: "siva1" }, { name: "siva2" }];
const elemenMap = React.createElement(
  "div",
  null,
  peopl2.map((x) => React.createElement("li", null, x.name))
);
ReactDOM.render(elemenMap, rootElement);

// jsx
const elementJSX = (
  <ol>
    {peopl2.map((x) => (
      <li key={x.name}> {x.name} </li>
    ))}
  </ol>
);

ReactDOM.render(elementJSX, rootElement);

class contactList extends React.Component {
  render() {
    const peopl3 = [{ name: "siva" }, { name: "bharathi" }, { name: "siva2" }];
    return (
      <ol>
        {peopl3.map((x) => (
          <li key={x.name}> {x.name} </li>
        ))}
      </ol>
    );
  }
}
