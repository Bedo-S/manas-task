import React from 'react';
import Navbar from './components/navbar';
import Header from './components/header';
import About from './components/about';
import Projects from './components/projects';
import Sponsors from './components/sponsors';
import Footer from './components/footer';

const App = () => {
  return (
    <div>
      <div><Navbar /></div>
      <div><Header /></div>
      <div><About /></div>
      <div><Projects /></div>
      <div><Sponsors /></div>
      <div><Footer /></div>
    </div>
  );
};

export default App;