import './App.css';
import React from 'react'
import Navbar from './components/Navbar/Navbar';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
// import {Outlet} from 'react-router-dom'
import Hero from './components/Hero/Hero';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Navbar/>
      <Hero/>
    </StyledEngineProvider>
  );
}

export default App;
