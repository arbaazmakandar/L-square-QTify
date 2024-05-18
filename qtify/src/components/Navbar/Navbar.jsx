import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import {Link} from 'react-router-dom'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import Search from '../Search/Search'
import styles from './Navbar.module.css'


export default function Navbar() {

  return (
      <AppBar className={styles.navbar}>
        <Link to="/"> 
          <Logo/> 
        </Link> 
        <Search placeholder="Search a song of your choice" />
        <Button>Give Feedback</Button>
      </AppBar>
  );
}