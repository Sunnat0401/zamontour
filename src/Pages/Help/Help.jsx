import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Help.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { antalia, china, dubai, eng, sauida, sharm } from '../../assets';
import { useTranslation } from 'react-i18next';

const Help = () => {
  const {t, i18n} = useTranslation()
  return (
    <>
      <div className="help">
        <div className="container">
          <h1 className="help-title">{t("help1")}</h1>
          <p className="help-text">
          {t("help2")}<br />{t("help3")}
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

            <SwiperSlide className='help-sliders'>
              <div className="help-cards">
                <img src={antalia} alt="Antaliya" className="help-img" />
                <div className="help-card">
                  <h3 className='help-subtitle'>Antaliya</h3>
                  <p className="help-text"><i className="fa-solid fa-users"></i> {t("help6")}</p>
                  <div className="help-border"></div>
                  <h4 className='help-headline'>{t("help4")}</h4>
                  <p className="help-text"><i className="fa-solid fa-tag"></i> {t("help7")}</p>
                  <p className="help-text"><i className="fa-regular fa-clock"></i> {t("help8")}</p>
                  <p className="help-text"><i className="fa-solid fa-check"></i> {t("help9")}</p>
                  <button className="help-button">{t("help5")}</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide  className='help-sliders'>
              <div className="help-cards">
                <img src={sharm} alt="Sharm" className="help-img" />
                <div className="help-card">
                  <h3 className='help-subtitle'>Sharm</h3>
                  <p className="help-text"><i className="fa-solid fa-users"></i> {t("help6")}</p>
                  <div className="help-border"></div>
                  <h4 className='help-headline'>{t("help4")}</h4>
                  <p className="help-text"><i className="fa-solid fa-tag"></i> {t("help7")}</p>
                  <p className="help-text"><i className="fa-regular fa-clock"></i> {t("help8")}</p>
                  <p className="help-text"><i className="fa-solid fa-check"></i> {t("help9")}</p>
                  <button className="help-button">{t("help5")}</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide  className='help-sliders'>
              <div className="help-cards">
                <img src={dubai} alt="Dubai" className="help-img" />
                <div className="help-card">
                  <h3 className='help-subtitle'>Dubai</h3>
                  <p className="help-text"><i className="fa-solid fa-users"></i> {t("help6")}</p>
                  <div className="help-border"></div>
                  <h4 className='help-headline'>{t("help4")}</h4>
                  <p className="help-text"><i className="fa-solid fa-tag"></i> {t("help7")}</p>
                  <p className="help-text"><i className="fa-regular fa-clock"></i> {t("help8")}</p>
                  <p className="help-text"><i className="fa-solid fa-check"></i> {t("help9")}</p>
                  <button className="help-button">{t("help5")}</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide  className='help-sliders'>
              <div className="help-cards">
                <img src={eng} alt="AQSH" className="help-img" />
                <div className="help-card">
                  <h3 className='help-subtitle'>AQSH</h3>
                  <p className="help-text"><i className="fa-solid fa-users"></i> {t("help6")}</p>
                  <div className="help-border"></div>
                  <h4 className='help-headline'>{t("help4")}</h4>
                  <p className="help-text"><i className="fa-solid fa-tag"></i> {t("help7")}</p>
                  <p className="help-text"><i className="fa-regular fa-clock"></i> {t("help8")}</p>
                  <p className="help-text"><i className="fa-solid fa-check"></i> {t("help9")}</p>
                  <button className="help-button">{t("help5")}</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide  className='help-sliders'>
              <div className="help-cards">
                <img src={sauida} alt="Saudia" className="help-img" />
                <div className="help-card">
                  <h3 className='help-subtitle'>Saudia</h3>
                  <p className="help-text"><i className="fa-solid fa-users"></i> {t("help6")}</p>
                  <div className="help-border"></div>
                  <h4 className='help-headline'>{t("help4")}</h4>
                  <p className="help-text"><i className="fa-solid fa-tag"></i> {t("help7")}</p>
                  <p className="help-text"><i className="fa-regular fa-clock"></i> {t("help8")}</p>
                  <p className="help-text"><i className="fa-solid fa-check"></i> {t("help9")}</p>
                  <button className="help-button">{t("help5")}</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide  className='help-sliders'>
              <div className="help-cards">
                <img src={china} alt="China" className="help-img" />
                <div className="help-card">
                  <h3 className='help-subtitle'>China</h3>
                  <p className="help-text"><i className="fa-solid fa-users"></i> {t("help6")}</p>
                  <div className="help-border"></div>
                  <h4 className='help-headline'>{t("help4")}</h4>
                  <p className="help-text"><i className="fa-solid fa-tag"></i> {t("help7")}</p>
                  <p className="help-text"><i className="fa-regular fa-clock"></i> {t("help8")}</p>
                  <p className="help-text"><i className="fa-solid fa-check"></i> {t("help9")}</p>
                  <button className="help-button">{t("help5")}</button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Help
