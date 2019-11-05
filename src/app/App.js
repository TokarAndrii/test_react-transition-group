import React from "react";
import TransitionExample from "../transition/Transition";
import List from "../list/List";
import StylesApp from "./StylesApp";

function App() {
  return (
    <StylesApp>
      <div className="app">
        <h1>App</h1>
        <div style={{ width: "500px" }}>
          <TransitionExample size="small"></TransitionExample>
        </div>
        <List />
      </div>
    </StylesApp>
  );
}

export default App;
