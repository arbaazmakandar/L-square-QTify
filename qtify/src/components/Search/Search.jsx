import { Box,Input } from '@mui/material'
import React from 'react'
import searchicon from '../../assets/searchicon.png'
import styles from './Search.module.css'

const Search = ({placeholder, searchData}) => {
  return (
    <form onSubmit={(e)=>{e.preventDefault()}}>
    <Box className={styles.search}>
      <Box className={styles.inputContainer}>
      <Input placeholder={placeholder} className={styles.input}/>
      </Box>
      <button className={styles.searchIcon}> <img src={searchicon}/> </button>
    </Box>
    </form>
  )
}

export default Search