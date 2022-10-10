import React from "react";
import {
  BrowserRouter as Router,
  Routes, //instead of switch
  Route,
  Link,
} from "react-router-dom";
import Header from './header'
import Cart from './cart'
import Photos from './photos'


import './App.css'

function App() {

  return (
    <Router>

        <Header />

        <Routes>
          <Route exact path="/" element={<Photos />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

    </Router>
  )
}

export default App
