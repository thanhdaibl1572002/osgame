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
    <Router basename='/osgame'>
     <div className="layout-container">
        <Header />
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/install' element={<Install/>} />
          <Route path='/team' element={<Team/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/*' element={<Home/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App