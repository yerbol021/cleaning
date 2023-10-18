import React from "react";
import TopNavBar from "./components/TopNavBar";

const App = () => {
  return (
    <div className="app">
      <TopNavBar />
      <div className="content">
        <h3>Here is the page</h3>
      </div>
    </div>
  );
};

export default App;
