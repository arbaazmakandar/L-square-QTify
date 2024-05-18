import './App.css';
import React from 'react'
import Navbar from './components/Navbar/Navbar';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
// import {Outlet} from 'react-router-dom'

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Navbar/>
    </StyledEngineProvider>
  );
}

export default App;
