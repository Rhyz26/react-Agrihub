import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Appointment from "./components/Appointment";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
