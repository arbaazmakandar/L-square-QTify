import React, { useEffect, useState } from 'react';
import {useSwiper, useSwiperSlide} from 'swiper/react';


const CarouselRightNavigation = () => {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd);

    useEffect(()=>{
        swiper.on("slideChange", function(){
            setIsEnd(swiper.isEnd);
        });
    },[])
  return (
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKISURBVHgBvVZdbtNAEJ5Z2yFKBcoNcE6AIx5on5q8IYREOAFHoDcguQG9QblBeKl4S/qAihAo5gSYE+AXoii2d5hxYjclSbv+CV/kaDfO7vfN7M4PgiG8Wa+tFs2BhdYpIXkE6CJAW94RQIhAARH4/Fzp5nzsd6ehyb54L/H1c9dSOARQrzJCExDRRUJ65J98CqCMALHYXh694+EZVAINvz27HEERASur1QQBXagBxMeTaN3f5Q21Rf75hVcnuUD2kj3FsO13m+Q1W/4vdnkiFyBnbi1bs0OR3xLRmHezKMmPQC7cockFwmEvWmc3c1i53lbWT7MNILC005dxoqIJ5wAXSiDWSUeOIvXAKs7NQJo+fDkZB/KIEBEEJWAhpl5AbzbgeI9+G69E8mNn3s/O8Ph64Jb0RBg3/nSUWiwHhZYRenbUmsillWkFT3Bqbw0UKupBUdQkgo/hVCGqJ1AGNYggBE/xtwtlUV2Ey1FAxhWuiAjD1W0FNQAJ281FOzdkwR9TsAA0ahz2kq8Tk1gu86yeGC4PFcsPoCT2kRdI6YHCBH5ACdRAzraDrxKgKRREHeQpiK6UbjbGRe5BbeSMiJtX5XfH0tF+NF2UFaOq5Oz+C6knaTmWghKryKgcZ12NjKt0T7Z2OmJI3hE9/fryPRK9hf8AbtnPvx9fpuU4T0SJYw/L1vYiEI6HDxrDbJ4LkLuwSqHVEtN95MIxZa4tAYL0TGK7fwhPpHvGzuvsAm/8vo0KXc5e8s3Q3cTOYiR/jBpOlxDPoSLkwh3xXrvI1+LuxtobQ/bGGzAGhhxRY4uc0T5iYwG3hMCyBwp7mnMQx//jm14CQ84Pv5QGX1L7I86umxftLvwFq4RjNxc2DWkAAAAASUVORK5CYII=" alt="" style={{    cursor: "pointer",
    position: "absolute",
    right: "20px",
    top:"45%",
    transform: "translateY(-50%)",
    zIndex: "10"}} onClick={() => swiper.slideNext()}>

    </img>
  )
}

export default CarouselRightNavigation