import React from "react";
import Test from "./components/Test";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container App pt-4">
        <Test />
      </div>
    </>
  );
}

export default App;
