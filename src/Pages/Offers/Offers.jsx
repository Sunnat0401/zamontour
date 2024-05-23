import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Offers.css';
import { canada, eng, India, istanbul, sauida, usa } from "../../assets";
import Button from "../../Component/Button/Button";

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
    <div className='offers'>
      <div className="container">
        <h1 className="offers-title">Eng Yaxshi Haftalik Takliflarimiz</h1>
        <p className="offers-text">Har bir shaharda faqat siz uchun tuzilgan eng yaxshi haftalik takliflarni kashf eting. O'zingizni sarguzashtlar dunyosida his qiling.</p>
      
        <Slider {...settings} className="offer-slider">
          <div className="offer-slide">
            <div className="slider-card">
              <img src={India} alt="india" className="slider-img"/>
              <div className="slider-info">
                <h3>India</h3>
                <p className="slider-text"><i className="fa-solid fa-users"></i> Buyurtmalar</p>
                <div className="slider-border"></div>
                <h4>Tur o'z ichiga oladi</h4>
                <p className="slider-text"><i className="fa-solid fa-car"></i> 5 kunlik sayohat / Mehmonxona</p>
                <p className="slider-text"><i className="fa-solid fa-plane"></i> Aviabilet</p>
                <p className="slider-text"><i className="fa-regular fa-address-book"></i> Manzillar</p>
                <Button width={'150px'} height={'47px'} bg={'#22B3C1'} color={'#fff'} borderRadius={'12px'} />
              </div>
            </div>
          </div>
          <div className="offer-slide">
            <div className="slider-card">
              <img src={sauida} alt="sauida" className="slider-img"/>
              <div className="slider-info">
                <h3>Saudia</h3>
                <p className="slider-text"><i className="fa-solid fa-users"></i> 300 Buyurtmalar</p>
                <div className="slider-border"></div>
                <h4>Tur o'z ichiga oladi</h4>
                <p className="slider-text"><i className="fa-solid fa-car"></i> 5 kunlik sayohat / Mehmonxona</p>
                <p className="slider-text"><i className="fa-solid fa-plane"></i> Aviabilet</p>
                <p className="slider-text"><i className="fa-regular fa-address-book"></i> Manzillar</p>
                <Button width={'150px'} height={'47px'} bg={'#22B3C1'} color={'#fff'} borderRadius={'12px'} />
              </div>
            </div>
          </div>
          <div className="offer-slide">
            <div className="slider-card">
              <img src={usa} alt="usa" className="slider-img"/>
              <div className="slider-info">
                <h3>AQSH</h3>
                <p className="slider-text"><i className="fa-solid fa-users"></i> 500 Buyurtmalar</p>
                <div className="slider-border"></div>
                <h4>Tur o'z ichiga oladi</h4>
                <p className="slider-text"><i className="fa-solid fa-car"></i> 5 kunlik sayohat / Mehmonxona</p>
                <p className="slider-text"><i className="fa-solid fa-plane"></i> Aviabilet</p>
                <p className="slider-text"><i className="fa-regular fa-address-book"></i> Manzillar</p>
                <Button width={'150px'} height={'47px'} bg={'#22B3C1'} color={'#fff'} borderRadius={'12px'} />
              </div>
            </div>
          </div>
          <div className="offer-slide">
            <div className="slider-card">
              <img src={canada} alt="canada" className="slider-img"/>
              <div className="slider-info">
                <h3>Canada</h3>
                <p className="slider-text"><i className="fa-solid fa-users"></i> 735 Buyurtmalar</p>
                <div className="slider-border"></div>
                <h4>Tur o'z ichiga oladi</h4>
                <p className="slider-text"><i className="fa-solid fa-car"></i> 5 kunlik sayohat / Mehmonxona</p>
                <p className="slider-text"><i className="fa-solid fa-plane"></i> Aviabilet</p>
                <p className="slider-text"><i className="fa-regular fa-address-book"></i> Manzillar</p>
                <Button width={'150px'} height={'47px'} bg={'#22B3C1'} color={'#fff'} borderRadius={'12px'} />
              </div>
            </div>
          </div>
          <div className="offer-slide">
            <div className="slider-card">
              <img src={eng} alt="eng" className="slider-img"/>
              <div className="slider-info">
                <h3>Angliya</h3>
                <p className="slider-text"><i className="fa-solid fa-users"></i> 900 Buyurtmalar</p>
                <div className="slider-border"></div>
                <h4>Tur o'z ichiga oladi</h4>
                <p className="slider-text"><i className="fa-solid fa-car"></i> 5 kunlik sayohat / Mehmonxona</p>
                <p className="slider-text"><i className="fa-solid fa-plane"></i> Aviabilet</p>
                <p className="slider-text"><i className="fa-regular fa-address-book"></i> Manzillar</p>
                <Button width={'150px'} height={'47px'} bg={'#22B3C1'} color={'#fff'} borderRadius={'12px'} />
              </div>
            </div>
          </div>
          <div className="offer-slide">
            <div className="slider-card">
              <img src={istanbul} alt="istanbul" className="slider-img"/>
              <div className="slider-info">
                <h3>Istanbul</h3>
                <p className="slider-text"><i className="fa-solid fa-users"></i> 4500 Buyurtmalar</p>
                <div className="slider-border"></div>
                <h4>Tur o'z ichiga oladi</h4>
                <p className="slider-text"><i className="fa-solid fa-car"></i> 5 kunlik sayohat / Mehmonxona</p>
                <p className="slider-text"><i className="fa-solid fa-plane"></i> Aviabilet</p>
                <p className="slider-text"><i className="fa-regular fa-address-book"></i> Manzillar</p>
                <Button width={'150px'} height={'47px'} bg={'#22B3C1'} color={'#fff'} borderRadius={'12px'} />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Offers;
