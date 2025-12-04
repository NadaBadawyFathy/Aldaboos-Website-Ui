import './App.css'
import React from 'react';
import { Routes, Route} from "react-router-dom";

import Contact from './Pages/Contact';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Services from './Pages/Services';
import Header from './Components/Header';
import Home from './Pages/Home';
import Products from './Pages/Products';

function App() {
  return (
    <div className="max-w-[1440px] mx-auto relative">
      <Header />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </div>
  );
}

export default App;
