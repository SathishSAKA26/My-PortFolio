import React from "react";
// import in values
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const App = () => {
  return( 
  <div className="" >
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
  </div>
  );
};

export default App;
