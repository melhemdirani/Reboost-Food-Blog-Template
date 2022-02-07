import React from "react";
import Footer from "./components/Navbar/Footer"
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import './App.css';

function App() {
  return (
    <div className="App">
        
        
        <Navbar />
        <HomePage />
        <Footer/>
    </div>
  );
}

export default App;
