import React, { useState, useEffect } from "react";
import "./App.css";
import Display from "./components/Display";
import Navbar from "./components/Navbar";

function App() {
  const [searchEntry, setSearchEntry] = useState("");

  const handleSubmit = (value) => {
    setSearchEntry(value);
  };

  useEffect(() => {
    console.log(searchEntry);
  }, [searchEntry]);

  return (
    <div className="App">
      <Navbar handleSubmit={handleSubmit} />
      {searchEntry}
      <Display />
    </div>
  );
}

export default App;
