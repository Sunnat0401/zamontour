
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

const Help = () => {
  return (
    <>
    <div className="help">
    <div className="container">
           <h1 className="help-title">
           Eng Yaxshi Haftalik Takliflarimiz
           </h1>
           <p className="help-text">
           Har bir shaharda faqat siz uchun tuzilgan eng yaxshi  <br /> haftalik takliflarni kashf eting.   <br /> O'zingizni sarguzashtlar dunyosida his qiling.
           </p>
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
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
    >
    <SwiperSlide>
        <div className="help-cards">
          <img src={antalia} alt="" className="help-img" />
          <div className="help-card">
          <h3 className='help-subtitle'>Antaliya</h3>
                <p className="help-text"><i className="fa-solid fa-users"></i> Buyurtmalar</p>
                <div className="help-border"></div>
                <h4 className='help-headline'>Tur o'z ichiga oladi</h4>
                <p className="help-text"><i className="fa-solid fa-tag"></i> Eng arzon narxlar</p>
                <p className="help-text"><i className="fa-regular fa-clock"></i> Tezkor ishlash vaqti</p>
                <p className="help-text"><i className="fa-solid fa-check"></i> Ishonchli yordam</p>
                <button className="help-button">Joy band qilish</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide> 
      <div className="help-cards">
          <img src={sharm} alt="" className="help-img" />
          <div className="help-card">
          <h3 className='help-subtitle'>Sharm</h3>
                <p className="help-text"><i className="fa-solid fa-users"></i> Buyurtmalar</p>
                <div className="help-border"></div>
                <h4 className='help-headline'>Tur o'z ichiga oladi</h4>
                <p className="help-text"><i className="fa-solid fa-tag"></i> Eng arzon narxlar</p>
                <p className="help-text"><i className="fa-regular fa-clock"></i> Tezkor ishlash vaqti</p>
                <p className="help-text"><i className="fa-solid fa-check"></i> Ishonchli yordam</p>
                <button className="help-button">Joy band qilish</button>

          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="help-cards">
          <img src={dubai} alt="" className="help-img" />
          <div className="help-card">
          <h3 className='help-subtitle'>Dubai</h3>
                <p className="help-text"><i className="fa-solid fa-users"></i> Buyurtmalar</p>
                <div className="help-border"></div>
                <h4 className='help-headline'>Tur o'z ichiga oladi</h4>
                <p className="help-text"><i className="fa-solid fa-tag"></i> Eng arzon narxlar</p>
                <p className="help-text"><i className="fa-regular fa-clock"></i> Tezkor ishlash vaqti</p>
                <p className="help-text"><i className="fa-solid fa-check"></i> Ishonchli yordam</p>
                <button className="help-button">Joy band qilish</button>

          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="help-cards">
          <img src={eng} alt="" className="help-img" />
          <div className="help-card">
          <h3 className='help-subtitle'>AQSH</h3>
                <p className="help-text"><i className="fa-solid fa-users"></i> Buyurtmalar</p>
                <div className="help-border"></div>
                <h4 className='help-headline'>Tur o'z ichiga oladi</h4>
                <p className="help-text"><i className="fa-solid fa-tag"></i> Eng arzon narxlar</p>
                <p className="help-text"><i className="fa-regular fa-clock"></i> Tezkor ishlash vaqti</p>
                <p className="help-text"><i className="fa-solid fa-check"></i> Ishonchli yordam</p>
                <button className="help-button">Joy band qilish</button>

          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="help-cards">
          <img src={sauida} alt="" className="help-img" />
          <div className="help-card">
          <h3 className='help-subtitle'>Saudia</h3>
                <p className="help-text"><i className="fa-solid fa-users"></i> Buyurtmalar</p>
                <div className="help-border"></div>
                <h4 className='help-headline'>Tur o'z ichiga oladi</h4>
                <p className="help-text"><i className="fa-solid fa-tag"></i> Eng arzon narxlar</p>
                <p className="help-text"><i className="fa-regular fa-clock"></i> Tezkor ishlash vaqti</p>
                <p className="help-text"><i className="fa-solid fa-check"></i> Ishonchli yordam</p>
                <button className="help-button">Joy band qilish</button>

          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="help-cards">
          <img src={china} alt="" className="help-img" />
          <div className="help-card">
          <h3 className='help-subtitle'>China</h3>
                <p className="help-text"><i className="fa-solid fa-users"></i> Buyurtmalar</p>
                <div className="help-border"></div>
                <h4 className='help-headline'>Tur o'z ichiga oladi</h4>
                <p className="help-text"><i className="fa-solid fa-tag"></i> Eng arzon narxlar</p>
                <p className="help-text"><i className="fa-regular fa-clock"></i> Tezkor ishlash vaqti</p>
                <p className="help-text"><i className="fa-solid fa-check"></i> Ishonchli yordam</p>
                <button className="help-button">Joy band qilish</button>

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