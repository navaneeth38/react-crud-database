import "./App.css";
import React from "react";
import { Create } from "./components/create/Create";
import Read from "./components/read/Read";
import { Routes,Route } from "react-router-dom";
import Update from "./components/update/Update";

function App() {
  return (
    <div className="main">
        <h2 className="main-header">Student Database</h2>
    <Routes>
      <Route path="/create" element={<Create/>} />
      <Route path="/read" element={<Read/>} />
      <Route path="/update" element={<Update/>} />
      

        
    </Routes>
    </div>
  );
}

export default App;
