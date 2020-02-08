import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import SmurfCard from "../components/SmurfCard";
import SmurfForm from "../components/SmurfForm";
import { SmurfContext } from "../contexts/SmurfContext";

function App() {
  const [smurfs, setSmurfs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3333/smurfs").then(res => {
      console.log(res.data);
      setSmurfs(res.data);
    });
  }, []);

  return (
    <SmurfContext.Provider value={{ smurfs }}>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm />
        <SmurfCard smurfs={smurfs} />
      </div>
    </SmurfContext.Provider>
  );
}

export default App;
