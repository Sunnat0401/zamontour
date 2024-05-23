// src/pages/HomePages/HomePages.js
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import './HomePages.css';
import SwiperSlideCard from '../../Component/SwiperSlideCard/SwiperSlideCard';
import { sliderItem } from '../../Util/const';
import Navbar from '../../Component/Navbar/Navbar';

const HomePages = () => {
  return (
    <>
      <Navbar />
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[EffectFade, Navigation, Pagination]}
        autoplay={{ delay: 2000, disableOnInteraction: false }} // autoplay settings with loop and 2-second delay
        loop={true} // Enable looping
        className="mySwiper"
      >
        {sliderItem && sliderItem.map((item) => (
          <SwiperSlide key={item?.id}>
            <div className="swiper-slide-content" style={{ backgroundImage: `url(${item?.img})` }}>
              <SwiperSlideCard {...item} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HomePages;
  