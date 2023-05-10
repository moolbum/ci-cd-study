import React from "react";

function App() {
  return (
    <div className="App">
      <p>{process.env.PORT}</p>
      <p>{process.env.NODE_ENV}</p>
      <p>{process.env.REACT_APP_ENV_MODE}</p>
      <p>
        현재 배포{" "}
        {process.env.REACT_APP_ENV_MODE === "dev" ? "개발배포" : "운영배포"}
      </p>
    </div>
  );
}

export default App;
