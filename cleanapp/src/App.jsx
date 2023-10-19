import React from "react";
import TopNavBar from "./components/TopNavBar";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <TopNavBar />
      <div className="content">
        <h3>Here is the page</h3>
        <table>
          <thead>
            <tr>
              <th>Type1</th>
              <th>Type2</th>
              <th>Type3</th>
              <th>Type4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>some info1</td>
              <td>some info2</td>
              <td>some info3</td>
              <td>some info4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
