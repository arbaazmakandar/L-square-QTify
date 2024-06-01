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
    <div style={{ position :  "absolute",
        left : "0px",
        top: "40%",
        transform: "translateY(-50%)",
        zIndex: "10",
        cursor: "pointer"}}>
        {!isBeginning && <LeftArrow onClick={()=> swiper.slidePrev()}/>}
    </div>
  );
}


export default CarouselLeftNavigation