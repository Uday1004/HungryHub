import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { banner } from "../../Data/Prodinfo";
import 'swiper/css';
import 'swiper/css/navigation';
import Sliderfor from './Sliderfor';


const MainSlider = () => {
  return (
    <div className='banner d-flex flex-wrap' >
      <Swiper
        // navigation={true}
        modules={[Autoplay, Navigation]}
        grabCursor={true}
        spaceBetween={5}
        slidesPerView={'auto'}
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        className='myswiper'
      >
        {banner.map((val, i) => (
          <SwiperSlide key={i}>
            <Sliderfor 
              title={val.title}
              desc={val.desc}
              image={val.image}>
            </Sliderfor>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default MainSlider