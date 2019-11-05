import React from "react";
import TransitionExample from "./transition/Transition";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <h1>App</h1>
      <div style={{ width: "500px" }}>
        <TransitionExample size="small"></TransitionExample>
      </div>
    </div>
  );
}

export default App;
