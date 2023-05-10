import React from "react";

function App() {
  return (
    <div className="App">
      <p>{process.env.NODE_ENV === "development" ? "dev" : "prod"} test</p>
    </div>
  );
}

export default App;
