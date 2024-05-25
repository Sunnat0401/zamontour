
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Offers.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { antalia, china, dubai, eng, sauida, sharm } from '../../assets';
import { useTranslation } from 'react-i18next';

const Offers = () => {
  const {t , i18n} = useTranslation()

  return (
  <>
  
  <div className="offer" id='offer'>
    <div className="container">
           <h1 className="offer-title">
        {t("offer1")}
           </h1>
           <p className="offer-text">
           {t("offer2")}
           </p>
    <Swiper
     slidesPerView={3}
     spaceBetween={1}
     pagination={{
       clickable: true,
     }}
     autoplay={{
       delay: 2000,  // 2 seconds
       disableOnInteraction: false,
     }}
     loop={true}
     modules={[Pagination, Autoplay]}
     className="help-swiper"
     breakpoints={{
       0: {
         slidesPerView: 1,
         spaceBetween: 10,
       },
       500: {
         slidesPerView: 1,
         spaceBetween: 10,
       },
       700: {
         slidesPerView: 1,
         spaceBetween: 10,
       },
       800: {
         slidesPerView: 2,
         spaceBetween: 10,
       },
       1100: {
         slidesPerView: 3,
         spaceBetween: 1,
       },
       1200: {
         slidesPerView: 3,
         spaceBetween: 1,
       }
     }}
     >
    <SwiperSlide className='offer-sliders'>
        <div className="offer-cards">
          <img src={antalia} alt="" className="offer-img" />
          <div className="offer-card">
          <h3 className='offer-subtitle'>Antaliya</h3>
                <p className="offer-text"><i className="fa-solid fa-users"></i> {t("help6")}</p>
                <div className="offer-border"></div>
                <h4 className='offer-headline'>{t("help4")}</h4>
                <p className="offer-text"><i className="fa-solid fa-tag"></i>{t("help7")}</p>
                <p className="offer-text"><i className="fa-regular fa-clock"></i> {t("help8")}</p>
                <p className="offer-text"><i className="fa-solid fa-check"></i> {t("help9")}</p>
                <button className="offer-button">{t("help5")}</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='offer-sliders'> 
      <div className="offer-cards">
          <img src={sharm} alt="" className="offer-img" />
          <div className="offer-card">
          <h3 className='offer-subtitle'>Sharm</h3>
                <p className="offer-text"><i className="fa-solid fa-users"></i> {t("help6")}</p>
                <div className="offer-border"></div>
                <h4 className='offer-headline'>{t("help4")}</h4>
                <p className="offer-text"><i className="fa-solid fa-tag"></i>{t("help7")}</p>
                <p className="offer-text"><i className="fa-regular fa-clock"></i> {t("help8")}</p>
                <p className="offer-text"><i className="fa-solid fa-check"></i> {t("help9")}</p>
                <button className="offer-button">{t("help5")}</button>

          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='offer-sliders'>
      <div className="offer-cards">
          <img src={dubai} alt="" className="offer-img" />
          <div className="offer-card">
          <h3 className='offer-subtitle'>Dubai</h3>
                <p className="offer-text"><i className="fa-solid fa-users"></i> {t("help6")}</p>
                <div className="offer-border"></div>
                <h4 className='offer-headline'>{t("help4")}</h4>
                <p className="offer-text"><i className="fa-solid fa-tag"></i>{t("help7")}</p>
                <p className="offer-text"><i className="fa-regular fa-clock"></i> {t("help8")}</p>
                <p className="offer-text"><i className="fa-solid fa-check"></i> {t("help9")}</p>
                <button className="offer-button">{t("help5")}</button>

          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='offer-sliders'>
      <div className="offer-cards">
          <img src={eng} alt="" className="offer-img" />
          <div className="offer-card">
          <h3 className='offer-subtitle'>AQSH</h3>
                <p className="offer-text"><i className="fa-solid fa-users"></i> {t("help6")}</p>
                <div className="offer-border"></div>
                <h4 className='offer-headline'>{t("help4")}</h4>
                <p className="offer-text"><i className="fa-solid fa-tag"></i>{t("help7")}</p>
                <p className="offer-text"><i className="fa-regular fa-clock"></i> {t("help8")}</p>
                <p className="offer-text"><i className="fa-solid fa-check"></i> {t("help9")}</p>
                <button className="offer-button">{t("help5")}</button>

          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='offer-sliders'>
      <div className="offer-cards">
          <img src={sauida} alt="" className="offer-img" />
          <div className="offer-card">
          <h3 className='offer-subtitle'>Saudia</h3>
                <p className="offer-text"><i className="fa-solid fa-users"></i> {t("help6")}</p>
                <div className="offer-border"></div>
                <h4 className='offer-headline'>{t("help4")}</h4>
                <p className="offer-text"><i className="fa-solid fa-tag"></i>{t("help7")}</p>
                <p className="offer-text"><i className="fa-regular fa-clock"></i> {t("help8")}</p>
                <p className="offer-text"><i className="fa-solid fa-check"></i> {t("help9")}</p>
                <button className="offer-button">{t("help5")}</button>

          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='offer-sliders'>
      <div className="offer-cards">
          <img src={china} alt="" className="offer-img" />
          <div className="offer-card">
          <h3 className='offer-subtitle'>China</h3>
                <p className="offer-text"><i className="fa-solid fa-users"></i> {t("help6")}</p>
                <div className="offer-border"></div>
                <h4 className='offer-headline'>{t("help4")}</h4>
                <p className="offer-text"><i className="fa-solid fa-tag"></i>{t("help7")}</p>
                <p className="offer-text"><i className="fa-regular fa-clock"></i> {t("help8")}</p>
                <p className="offer-text"><i className="fa-solid fa-check"></i> {t("help9")}</p>
                <button className="offer-button">{t("help5")}</button>

          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  
    </div>
  
  </>
  );
}

export default Offers;
