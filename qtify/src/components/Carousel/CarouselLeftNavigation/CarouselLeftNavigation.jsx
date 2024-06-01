import React, { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';


const CarouselLeftNavigation = () => {
    const swiper = useSwiper();

  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  useEffect(()=>{
    swiper.on("slideChange", function(){
        setIsBeginning(swiper.isBeginning);
    })
  },[])

  return(

        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKESURBVHgBvVddbtNAEJ4ZOyFKBcoNcE6AIx5on5q8IYREegKOQG9AcgN6g96A8FLxlvQBFSFQzAkwJ8AvVFH8M8w4P3VJSNbJhs9ytI539/t2dmZnjGAIf9xu0KTWddA5ZWSfAT0EaOg7BogQOGSGQO7rrHY7CFqjyGRe3Ep889xzCHsA9GpBaAJmvkw56wcnH0PYRYCu2J0evZXmOewF7n19dtWHMgJmq6YhAnpgASzbk2ZZZ501aIX80wvfJrlC59I5dWGr74rkllf+N9ZZYilA99yZ1seHIr8nonrbWkTJcgvU4Q5NrlAOd1I/v3uGmeldcn7ADpAJQierdLSdUjyUM8EzGZdkaVO3IrfALM53J/98Mgj1zpg/mI51EHMroD/uSrzHv6AkiuT6vIMDR0n1d5NoMu1CSVggV8jRXu8SErdLDLJFnkO24ZQQ6YnpAJvkCkbwSX49k862yefwJArYKMMdgFzRINOeE7kWqMlF2zO5EUQAGhUOrkPv9bjWtlpCLaLbAvshkoVwaNSV0Xfj+tCyiJAwhe/G3S2LQCnhKAUelRlkVQTzNWW16sDUD2yLiKV4paA10IrWOIlsElEmGYn5L7UmyGPp+KbrJRTvlI5lpiBJszNtljkb3KzSVNHLYH765eU7ZH4D/wFSsl98O77K0/HyIEorbs9CXG+Fcjx8UO0tnpcC1BdmlU1JhyxJrhwj4VoRoMj3JHE7h7BEPmdSOVvkk8L/q1CnLFPfmZAXk1kRa5ORdoyrlRYjXsCeUIc7krnWkc/FbcbcGj2xxmswBkYSUQOHK/1/ERsLuCcEpm0gbGdSEki8P76rJTCSD46flEGgR/sjOV2LjrYJfwDw11sb73kmtwAAAABJRU5ErkJggg==" alt="" style={{ position :  "absolute",
        left : "0px",
        top: "40%",
        transform: "translateY(-50%)",
        zIndex: "10",
        cursor: "pointer"}} onClick={()=> swiper.slidePrev()}></img>
  );
}


export default CarouselLeftNavigation