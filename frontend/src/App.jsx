import { useState } from "react";
import Header from "./components/Header";
import NoteListPage from "./components/NoteListPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NotePage } from "./components/NotePage";
import "./App.css";

function App() {
  return (
    // <>
    <Router>
      <div className="container dark">
        <div className="app">
          <Header></Header>
          <Routes>
            <Route exact path="/" element={<NoteListPage />} />
            <Route path="/note/:id" element={<NotePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
