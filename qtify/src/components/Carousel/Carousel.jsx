import React,{useEffect, useRef} from "react";
import styles from "./Carousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useSwiper } from "swiper/react";
import {Pagination, Navigation } from "swiper/modules";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";


const Controls =({data}) =>{
    const swiper = useSwiper();

    useEffect(()=>{
        swiper.slideTo(0);
    },[data]);

    return <></>
}

const Carousel = ({ data, renderComponent }) => {
  return (
    // <div className={styles.wrapper}>
      <Swiper
        style={{padding:"0px 0px"}}
        initialSlide={0}
        modules={{ Navigation }}
        slidesPerView={"auto"}
        spaceBetween={"5"}
        allowTouchMove
      >
        <Controls data={data}/>
        <CarouselLeftNavigation />
        <CarouselRightNavigation />
        {data?.map((item) => (
          <SwiperSlide key={item?.id} className={styles.swiperSlide}>{renderComponent(item)}</SwiperSlide>
        ))}
      </Swiper>
    //  </div>
  );
};

export default Carousel;