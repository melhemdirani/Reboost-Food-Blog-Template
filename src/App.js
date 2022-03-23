import React from "react";
// import Blog from "./components/Navbar/Blog"
import Blog from "./components/Blog/Blog";
// import Footer from "./components/Navbar/Footer"
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Blog />
      {/* <Footer/> */}
    </div>
  );
}

export default App;
