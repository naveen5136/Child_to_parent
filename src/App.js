import React, { useState } from "react";
import "./styles.css";
import Child from "./Child";

export default function App() {
  const [data, setData] = useState("This is Parent");
  const parentToChild = (childData) => {
    setData(childData);
  };
  return (
    <div className="App">
      {data}
      <Child parentToChild={parentToChild} />
    </div>
  );
}
