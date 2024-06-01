import React, { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
import {ReactComponent as LeftArrow} from "../../../assets/LeftArrow.svg"
import styles from './CarouselLeftNavigation.modules.css'


const CarouselLeftNavigation = () => {
    const swiper = useSwiper();

  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  useEffect(()=>{
    swiper.on("slideChange", function(){
        setIsBeginning(swiper.isBeginning);
    })
  },[])

  return(
    <button className={styles.leftNavigation}>
        {!isBeginning && <LeftArrow onClick={()=> swiper.slidePrev()}/>}
    </button>
  );
}


export default CarouselLeftNavigation