
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

const Offers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 996,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
  <>
  
  <div className="offer">
    <div className="container">
           <h1 className="offer-title">
          Visa olishga yordam beramiz 
           </h1>
           <p className="offer-text">
           Biz sizga oson, tez fursatda va albatta ishonchli viza olishga yordam beramiz.
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
      className="offer-swiper"
    >
    <SwiperSlide>
        <div className="offer-cards">
          <img src={antalia} alt="" className="offer-img" />
          <div className="offer-card">
          <h3 className='offer-subtitle'>Antaliya</h3>
                <p className="offer-text"><i className="fa-solid fa-users"></i> Buyurtmalar</p>
                <div className="offer-border"></div>
                <h4 className='offer-headline'>Tur o'z ichiga oladi</h4>
                <p className="offer-text"><i className="fa-solid fa-tag"></i> Eng arzon narxlar</p>
                <p className="offer-text"><i className="fa-regular fa-clock"></i> Tezkor ishlash vaqti</p>
                <p className="offer-text"><i className="fa-solid fa-check"></i> Ishonchli yordam</p>
                <button className="offer-button">Joy band qilish</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide> 
      <div className="offer-cards">
          <img src={sharm} alt="" className="offer-img" />
          <div className="offer-card">
          <h3 className='offer-subtitle'>Sharm</h3>
                <p className="offer-text"><i className="fa-solid fa-users"></i> Buyurtmalar</p>
                <div className="offer-border"></div>
                <h4 className='offer-headline'>Tur o'z ichiga oladi</h4>
                <p className="offer-text"><i className="fa-solid fa-tag"></i> Eng arzon narxlar</p>
                <p className="offer-text"><i className="fa-regular fa-clock"></i> Tezkor ishlash vaqti</p>
                <p className="offer-text"><i className="fa-solid fa-check"></i> Ishonchli yordam</p>
                <button className="offer-button">Joy band qilish</button>

          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="offer-cards">
          <img src={dubai} alt="" className="offer-img" />
          <div className="offer-card">
          <h3 className='offer-subtitle'>Dubai</h3>
                <p className="offer-text"><i className="fa-solid fa-users"></i> Buyurtmalar</p>
                <div className="offer-border"></div>
                <h4 className='offer-headline'>Tur o'z ichiga oladi</h4>
                <p className="offer-text"><i className="fa-solid fa-tag"></i> Eng arzon narxlar</p>
                <p className="offer-text"><i className="fa-regular fa-clock"></i> Tezkor ishlash vaqti</p>
                <p className="offer-text"><i className="fa-solid fa-check"></i> Ishonchli yordam</p>
                <button className="offer-button">Joy band qilish</button>

          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="offer-cards">
          <img src={eng} alt="" className="offer-img" />
          <div className="offer-card">
          <h3 className='offer-subtitle'>AQSH</h3>
                <p className="offer-text"><i className="fa-solid fa-users"></i> Buyurtmalar</p>
                <div className="offer-border"></div>
                <h4 className='offer-headline'>Tur o'z ichiga oladi</h4>
                <p className="offer-text"><i className="fa-solid fa-tag"></i> Eng arzon narxlar</p>
                <p className="offer-text"><i className="fa-regular fa-clock"></i> Tezkor ishlash vaqti</p>
                <p className="offer-text"><i className="fa-solid fa-check"></i> Ishonchli yordam</p>
                <button className="offer-button">Joy band qilish</button>

          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="offer-cards">
          <img src={sauida} alt="" className="offer-img" />
          <div className="offer-card">
          <h3 className='offer-subtitle'>Saudia</h3>
                <p className="offer-text"><i className="fa-solid fa-users"></i> Buyurtmalar</p>
                <div className="offer-border"></div>
                <h4 className='offer-headline'>Tur o'z ichiga oladi</h4>
                <p className="offer-text"><i className="fa-solid fa-tag"></i> Eng arzon narxlar</p>
                <p className="offer-text"><i className="fa-regular fa-clock"></i> Tezkor ishlash vaqti</p>
                <p className="offer-text"><i className="fa-solid fa-check"></i> Ishonchli yordam</p>
                <button className="offer-button">Joy band qilish</button>

          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="offer-cards">
          <img src={china} alt="" className="offer-img" />
          <div className="offer-card">
          <h3 className='offer-subtitle'>China</h3>
                <p className="offer-text"><i className="fa-solid fa-users"></i> Buyurtmalar</p>
                <div className="offer-border"></div>
                <h4 className='offer-headline'>Tur o'z ichiga oladi</h4>
                <p className="offer-text"><i className="fa-solid fa-tag"></i> Eng arzon narxlar</p>
                <p className="offer-text"><i className="fa-regular fa-clock"></i> Tezkor ishlash vaqti</p>
                <p className="offer-text"><i className="fa-solid fa-check"></i> Ishonchli yordam</p>
                <button className="offer-button">Joy band qilish</button>

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
