import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { antalia, dubai, eng, India, istanbul, sharm, usa } from '../../assets';
import './Slider.css';
import { EffectCoverflow,Pagination, Navigation } from 'swiper/modules';

const SliderExam = () => {
  return (
    <div className="container">
     <div className="sliderexam-wrapper">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img className='swiperexam-img'   src={dubai} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='swiperexam-img'   src={eng} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='swiperexam-img'   src={India} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='swiperexam-img'   src={istanbul} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img  className='swiperexam-img'  src={sharm} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img  className='swiperexam-img'  src={dubai} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img  className='swiperexam-img'  src={antalia} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
    </div>
  );
};

export default SliderExam;
