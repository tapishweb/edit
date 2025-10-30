
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  return (
    <div className="bg-[#0A0A0A] text-white overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black via-transparent to-[#0A0A0A] z-0"></div>
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,194,255,0.15),rgba(255,255,255,0))]"></div>

      <main className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
        <Chatbot />
      </main>
    </div>
  );
};

export default App;
