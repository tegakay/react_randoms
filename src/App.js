import React from 'react';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Homepage from './components/Homepage';
import ViewSingle from './components/ViewSingle';
import './App.css';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path = "/" element={<Homepage/>} />
        <Route exact path = "/movies" element={<Container/>} />
        <Route exact path = "/movies/:id" element={<ViewSingle />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
