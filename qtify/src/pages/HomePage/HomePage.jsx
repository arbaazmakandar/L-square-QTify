import React, { useEffect } from 'react'
import Hero from '../../components/Hero/Hero';
import CardComponent from '../../components/Card/Card';
import Section from '../../components/Section/Section'
import { useOutletContext } from 'react-router';
import { useState } from 'react';
import axios from 'axios';
import styles from './HomePage.modules.css'
import { fetchFilters } from '../../api/api';


const HomePage = () => {

  const {data} = useOutletContext();
  const {newAlbums, topAlbums, songs} = data;

  

  return (
    <div>
      <Hero/>
      <div className={styles.wrapper}>
        <Section title="Top Albums" data = {topAlbums} type ="album"/>
        <Section title="New Albums" data = {newAlbums} type ="album"/>  
        <Section
            title="Songs"
            data={songs}
            filterSource={fetchFilters}
            type = "song"
        />
      </div>

    </div>
  )
}

export default HomePage