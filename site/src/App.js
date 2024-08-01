import React from 'react';
import './App.css';
import Header from './components/Header';
import { Hero } from './components/Hero';
import Sobre from './components/Sobre';
import Projetos from './components/Projetos';
import Skills from './components/Skills';
import Contato from './components/Contato';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Sobre />
      <Projetos />
      <Skills />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
