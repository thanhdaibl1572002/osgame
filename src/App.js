import React from 'react'

import Header from './components/Header'
import Footer from './components/Footer'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Install from './pages/Install';
import Team from './pages/Team';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
     <div className="layout-container">
        <Header />
        <Routes>
          <Route path='/osgame/home' element={<Home/>} />
          <Route path='/osgame/install' element={<Install/>} />
          <Route path='/osgame/team' element={<Team/>} />
          <Route path='/osgame/contact' element={<Contact/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/osgame' element={<Home/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App