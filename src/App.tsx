import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/home/Home'
import Traveler from './pages/single-project/Traveler'
import Furnitura from './pages/single-project/Furnitura'
import Recettes from './pages/single-project/Recettes-en-pot'
import Timdesign from './pages/single-project/Timdesign'
import PageNotFound from './pages/404/404'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="traveler" element={<Traveler />} />
          <Route path="furnitura" element={<Furnitura />} />
          <Route path="recettes-en-pot" element={<Recettes />} />
          <Route path="timdesign" element={<Timdesign />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
