import React, { useEffect, useState } from 'react';
import {useSwiper, useSwiperSlide} from 'swiper/react';
import {ReactComponent as RightArrow} from "../../../assets/RightArrow.svg"


const CarouselRightNavigation = () => {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd);

    useEffect(()=>{
        swiper.on("slideChange", function(){
            setIsEnd(swiper.isEnd);
        });
    },[])
  return (
    <RightArrow style={{    cursor: "pointer",
      position: "absolute",
      right: "25px",
      top:"45%",
      // transform: "translateY(-50%)",
      zIndex: "10"}} onClick={() => swiper.slideNext()}/>
  )
}

export default CarouselRightNavigation