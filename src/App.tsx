import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MarketProjects from './components/MarketProjects';
import OpenSource from './components/OpenSource';
import Articles from './components/Articles';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <MarketProjects />
      <OpenSource />
      <Articles />
      <About />
      <Footer />
    </div>
  );
}

export default App;