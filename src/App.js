import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hovedside from "./components/Hovedside";
import Omoss from "./components/Omoss";
import Kontaktoss from "./components/Kontaktoss";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Hovedside />} />
          <Route path="/om-oss" element={<Omoss />} />
          <Route path="/kontakt-oss" element={<Kontaktoss />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
