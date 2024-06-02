import React, { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
import {ReactComponent as LeftArrow} from "../../../assets/LeftArrow.svg"


const CarouselLeftNavigation = () => {
    const swiper = useSwiper();

  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  useEffect(()=>{
    swiper.on("slideChange", function(){
        setIsBeginning(swiper.isBeginning);
    })
  },[])

  return(
    <LeftArrow style={{ position :  "absolute",
        left : "25px",
        top: "45%",
        // transform: "translateY(-50%)",
        zIndex: "10",
        cursor: "pointer"}} onClick={()=> swiper.slidePrev()}/>

        
  );
}


export default CarouselLeftNavigation