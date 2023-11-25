import React from 'react'
import Navbar from './components/Navbar'
import Hero from "./components/Hero"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path='/contact' element={<Contact/>} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}


export default App;
