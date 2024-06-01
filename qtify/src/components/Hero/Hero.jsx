import React from 'react'
import Headphones from '../../assets/headphones.png'
import { Box,Typography } from '@mui/material'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    
      <Box className={styles.outerBox}>
          <Typography variant="h4" className={styles.text}>
          100 Thousand Songs, ad-free 
          <br/>
          Over thousands podcast episodes
          </Typography>
          <Box className={styles.image}><img src={Headphones} alt="Headphones" /></Box> 
      </Box>
  )
}

export default Hero