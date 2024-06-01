import './App.css';
import React, { useEffect } from 'react'
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import { Outlet } from 'react-router';
import { useState } from 'react';
import { fetchTopAlbums, fetchSongs, fetchNewAlbums} from './api/api'

function App() {
  const [data,setData] = useState({});

  const generateData = (key,source) => {
    source().then((data)=>{
      console.log(data);
      setData((prevState)=>{
        return {...prevState, [key]:data}
      })
    })
  };

  useEffect(()=>{
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    generateData("songs", fetchSongs);
  },[]);


  const {topAlbums = [], newAlbums = [], songs = []} = data;

  return (
    <StyledEngineProvider injectFirst>
      <Navbar/>
      <Outlet context={{data:{topAlbums, newAlbums, songs}}}/>
    </StyledEngineProvider>
  );
}

export default App;
