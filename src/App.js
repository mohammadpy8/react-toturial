import React from "react";

import Counter from "./components/counter/Counter";

import "./App.css";
import GetApi from "./components/GetApi";
import GetApiWithReducer from "./components/GetApiWithReducer";
import Reducer from "./components/Reducer";

function App() {
  return (
    <Reducer>
      <Counter />
    </Reducer>
  );
}

export default App;
