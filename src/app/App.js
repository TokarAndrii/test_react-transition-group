import React from "react";
import TransitionExample from "../transition/Transition";
import StylesApp from "./StylesApp";

function App() {
  return (
    <StylesApp>
      <div className="app">
        <h1>App</h1>
        <div style={{ width: "500px" }}>
          <TransitionExample size="small"></TransitionExample>
        </div>
      </div>
    </StylesApp>
  );
}

export default App;
