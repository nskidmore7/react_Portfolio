import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./components/About";
import Contact from "./components/Contact";
import { Nav } from "react-bootstrap";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";


function App() {
  return (
    <div>
      <Header />
      <About />
      <Contact />
      <Nav />
      <Portfolio />
      <Resume />
      <Footer />
    </div>
  );}

export default App;
