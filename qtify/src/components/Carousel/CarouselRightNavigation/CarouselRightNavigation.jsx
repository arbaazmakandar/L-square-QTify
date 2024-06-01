import React, { useEffect, useState } from 'react';
import {useSwiper, useSwiperSlide} from 'swiper/react';
import {ReactComponent as RightArrow} from "../../../assets/RightArrow.svg"
import styles from './CarouselRightNavigation.modules.css'


const CarouselRightNavigation = () => {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd);

    useEffect(()=>{
        swiper.on("slideChange", function(){
            setIsEnd(swiper.isEnd);
        });
    },[])
  return (
    <div style={{    cursor: "pointer",
      position: "absolute",
      right: "10px",
      top:"40%",
      transform: "translateY(-50%)",
      zIndex: "10"}}>
        {!isEnd && <RightArrow onClick={() => swiper.slideNext()}/>}
    </div>
  )
}

export default CarouselRightNavigation