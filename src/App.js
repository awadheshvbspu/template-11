import './App.css';
import React from 'react';
import TopBar from './component/TopBar';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Activity from './component/Activity';
import Booking from './component/Booking';
import Gallery from './component/Gallery';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <>
     <TopBar/>
     <Navbar/>
     <Hero/>
     <Activity/>
     <Booking/>
     <Gallery/>
     <Contact/>
     <Footer/> 
    </>
  );
}

export default App;
