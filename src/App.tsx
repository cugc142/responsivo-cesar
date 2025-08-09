import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import AcercaDe from './components/AcercaDe';
import Servicios from './components/Servicios';
import CardSection from './components/CardSection';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <AcercaDe />
      <Servicios />
      <CardSection />
      <Footer />
    </>
  );
}

export default App;