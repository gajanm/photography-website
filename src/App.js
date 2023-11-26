import React from 'react'
import Navbar from './components/Navbar'
import Hero from "./components/Hero"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Buildings from './components/Buildings'
import Sunsets from './components/Sunsets'
import CityScapes from './components/CityScapes'
import Portraits from './components/Portraits'
import Nature from './components/Nature'
import NightSkies from './components/NightSkies'


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/portfolio/buildings" element={<Buildings/>} />
          <Route path="/portfolio/sunsets" element={<Sunsets/>} />
          <Route path="/portfolio/city-scapes" element={<CityScapes/>} />
          <Route path="/portfolio/portraits" element={<Portraits/>} />
          <Route path="/portfolio/nature" element={<Nature/>} />
          <Route path="/portfolio/night-skies" element={<NightSkies/>} />
          <Route path='/contact' element={<Contact/>} />
          
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}


export default App;
