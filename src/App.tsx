import { useState } from "react";
import "./App.css";
import List from "./List";
import New from "./New";

function App() {
  const [mode, setMode] = useState<string>("list");

  return (
    <div>
      <div>
        <button onClick={() => setMode("list")}>List</button>
        <button onClick={() => setMode("new")}>New</button>
      </div>
      <br />
      {mode == "list" && <List />}
      {mode == "new" && <New />}
    </div>
  );
}

export default App;
