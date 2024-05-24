import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// Import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import './HomePages.css';
import Navbar from '../../Components/Navbar/Navbar';
import { antalia, dubai, India, sharm } from '../../assets';

const HomePages = () => {
  return (
    <>
      <div className="homepages">
        <Navbar />
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <div className="container">
          <SwiperSlide>
            <div className="homepages-slide">
              <div className="homepages-background">
                <img src={dubai} alt="dubai" className="homepages-img" />
              </div>
              <div className="homepages-content">
                <h3 className="homepages-title">
                  Siz yoqtirib qolishingiz aniq bo'lgan shahar:
                </h3>
                  <h1 className="homepages-subtitle">Dubai</h1>
                  <button className="homepages-button">Borishni hohlaysizmi</button>
                  <div className="homepages-cards">
                    <div className="homepages-card">
                      <i className="fa-regular fa-user icon"></i>
                      <div className='homepages-info'>
                        <p className="homepages-person">Aholisi</p>
                        <h3 className="homepages-number">67.41 M</h3>
                      </div>
                    </div>
                    <div className="homepages-card">
                      <i className="fa-solid fa-globe icon"></i>
                      <div className='homepages-info'>
                        <p className="homepages-person">Maydoni</p>
                        <h3 className="homepages-number">67.41 M</h3>
                      </div>
                    </div>
                    <div className="homepages-card">
                      <i className="fa-solid fa-house icon"></i>
                      <div className='homepages-info'>
                        <p className="homepages-person">O'rtacha narx</p>
                        <h3 className="homepages-number">$125.600</h3>
                      </div>
                    </div>
                    <button className="homepages-btn">Ko'proq bilish...</button>

                  </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="homepages-slide">
              <div className="homepages-background">
                <img src={antalia} alt="dubai" className="homepages-img" />
              </div>
              <div className="homepages-content">
                <h3 className="homepages-title">
                  Siz yoqtirib qolishingiz aniq bo'lgan shahar:
                </h3>
                  <h1 className="homepages-subtitle">Antaliya</h1>
                  <button className="homepages-button">Borishni hohlaysizmi</button>
                  <div className="homepages-cards">
                    <div className="homepages-card">
                      <i className="fa-regular fa-user icon"></i>
                      <div className='homepages-info '>
                        <p className="homepages-person">Aholisi</p>
                        <h3 className="homepages-number">67.41 M</h3>
                      </div>
                    </div>
                    <div className="homepages-card">
                      <i className="fa-solid fa-globe icon"></i>
                      <div className='homepages-info'>
                        <p className="homepages-person">Maydoni</p>
                        <h3 className="homepages-number">67.41 M</h3>
                      </div>
                    </div>
                    <div className="homepages-card">
                      <i className="fa-solid fa-house icon"></i>
                      <div className='homepages-info'>
                        <p className="homepages-person">O'rtacha narx</p>
                        <h3 className="homepages-number">$325.600</h3>
                      </div>
                    </div>
                    <button className="homepages-btn">Ko'proq bilish...</button>

                  </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="homepages-slide">
              <div className="homepages-background">
                <img src={sharm} alt="dubai" className="homepages-img" />
              </div>
              <div className="homepages-content">
                <h3 className="homepages-title">
                  Siz yoqtirib qolishingiz aniq bo'lgan shahar:
                </h3>
                  <h1 className="homepages-subtitle">Sharm El-Sheikh</h1>
                  <button className="homepages-button">Borishni hohlaysizmi</button>
                  <div className="homepages-cards">
                    <div className="homepages-card">
                      <i className="fa-regular fa-user icon"></i>
                      <div className='homepages-info'>
                        <p className="homepages-person">Aholisi</p>
                        <h3 className="homepages-number">67.41 M</h3>
                      </div>
                    </div>
                    <div className="homepages-card">
                      <i className="fa-solid fa-globe icon"></i>
                      <div className='homepages-info'>
                        <p className="homepages-person">Maydoni</p>
                        <h3 className="homepages-number">67.41 M</h3>
                      </div>
                    </div>

                    <div className="homepages-card">
                      <i className="fa-solid fa-house icon"></i>
                      <div className='homepages-info'>
                        <p className="homepages-person">O'rtacha narx</p>
                        <h3 className="homepages-number">$425.600</h3>
                      </div>
                    </div>
                    <button className="homepages-btn">Ko'proq bilish...</button>
                  </div>
              </div>
            </div>
          </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </>
  );
}

export default HomePages;
