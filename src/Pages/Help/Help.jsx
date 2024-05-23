import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Help.css';
import { canada, eng, istanbul, oman, sharm, usa } from "../../assets";
import Button from "../../Component/Button/Button";

const Help = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '0',
  };

  return (
    <div className="swiper-top">
      <div className='help'>
        <div className="container">
          <h1 className="help-title">Visa olishga yordam beramiz !</h1>
          <p className="help-text">Biz sizga oson, tez fursatda va albatta ishonchli viza olishga yordam beramiz.</p>
  <Slider {...settings} className="help-slider">
          <div className="help-slide">
            <div className="slider-card">
              <img src={sharm} alt="Sharm" className="slider-img" />
              <div className="slider-info">
                <h3>Sharm</h3>
                <p className="slider-text"><i className="fa-solid fa-users"></i> Buyurtmalar</p>
                <div className="slider-border"></div>
                <h4>Bizning xizmatlar o'z ichiga oladi</h4>
                <p className="slider-text"><i className="fa-solid fa-tag"></i> Eng arzon narxlar</p>
                <p className="slider-text"><i className="fa-regular fa-clock"></i> Tezkor ishlash vaqti</p>
                <p className="slider-text"><i className="fa-solid fa-check"></i> Ishonchli yordam</p>
                <Button width={'150px'} height={'47px'} bg={'#22B3C1'} color={'#fff'} borderRadius={'12px'} />
              </div>
            </div>
          </div>
          <div className="help-slide">
            <div className="slider-card">
              <img src={oman} alt="Oman" className="slider-img" />
              <div className="slider-info">
                <h3>Oman</h3>
                <p className="slider-text"><i className="fa-solid fa-users"></i> 300 Buyurtmalar</p>
                <div className="slider-border"></div>
                <h4>Bizning xizmatlar o'z ichiga oladi</h4>
                <p className="slider-text"><i className="fa-solid fa-tag"></i> Eng arzon narxlar</p>
                <p className="slider-text"><i className="fa-regular fa-clock"></i> Tezkor ishlash vaqti</p>
                <p className="slider-text"><i className="fa-solid fa-check"></i> Ishonchli yordam</p>
                <Button width={'150px'} height={'47px'} bg={'#22B3C1'} color={'#fff'} borderRadius={'12px'} />
              </div>
            </div>
          </div>
          <div className="help-slide">
            <div className="slider-card">
              <img src={usa} alt="USA" className="slider-img" />
              <div className="slider-info">
                <h3>AQSH</h3>
                <p className="slider-text"><i className="fa-solid fa-users"></i> 500 Buyurtmalar</p>
                <div className="slider-border"></div>
                <h4>Bizning xizmatlar o'z ichiga oladi</h4>
                <p className="slider-text"><i className="fa-solid fa-tag"></i> Eng arzon narxlar</p>
                <p className="slider-text"><i className="fa-regular fa-clock"></i> Tezkor ishlash vaqti</p>
                <p className="slider-text"><i className="fa-solid fa-check"></i> Ishonchli yordam</p>
                <Button width={'150px'} height={'47px'} bg={'#22B3C1'} color={'#fff'} borderRadius={'12px'} />
              </div>
            </div>
          </div>
          <div className="help-slide">
            <div className="slider-card">
              <img src={eng} alt="England" className="slider-img" />
              <div className="slider-info">
                <h3>Angliya</h3>
                <p className="slider-text"><i className="fa-solid fa-users"></i> 735 Buyurtmalar</p>
                <div className="slider-border"></div>
                <h4>Bizning xizmatlar o'z ichiga oladi</h4>
                <p className="slider-text"><i className="fa-solid fa-tag"></i> Eng arzon narxlar</p>
                <p className="slider-text"><i className="fa-regular fa-clock"></i> Tezkor ishlash vaqti</p>
                <p className="slider-text"><i className="fa-solid fa-check"></i> Ishonchli yordam</p>
                <Button width={'150px'} height={'47px'} bg={'#22B3C1'} color={'#fff'} borderRadius={'12px'} />
              </div>
            </div>
          </div>
          <div className="help-slide">
            <div className="slider-card">
              <img src={canada} alt="Canada" className="slider-img" />
              <div className="slider-info">
                <h3>Canada</h3>
                <p className="slider-text"><i className="fa-solid fa-users"></i> 900 Buyurtmalar</p>
                <div className="slider-border"></div>
                <h4>Bizning xizmatlar o'z ichiga oladi</h4>
                <p className="slider-text"><i className="fa-solid fa-tag"></i> Eng arzon narxlar</p>
                <p className="slider-text"><i className="fa-regular fa-clock"></i> Tezkor ishlash vaqti</p>
                <p className="slider-text"><i className="fa-solid fa-check"></i> Ishonchli yordam</p>
                <Button width={'150px'} height={'47px'} bg={'#22B3C1'} color={'#fff'} borderRadius={'12px'} />
              </div>
            </div>
          </div>
          <div className="help-slide">
            <div className="slider-card">
              <img src={istanbul} alt="Istanbul" className="slider-img" />
              <div className="slider-info">
                <h3>Istanbul</h3>
                <p className="slider-text"><i className="fa-solid fa-users"></i> 4500 Buyurtmalar</p>
                <div className="slider-border"></div>
                <h4>Bizning xizmatlar o'z ichiga oladi</h4>
                <p className="slider-text"><i className="fa-solid fa-tag"></i> Eng arzon narxlar</p>
                <p className="slider-text"><i className="fa-regular fa-clock"></i> Tezkor ishlash vaqti</p>
                <p className="slider-text"><i className="fa-solid fa-check"></i> Ishonchli yordam</p>
                <Button width={'150px'} height={'47px'} bg={'#22B3C1'} color={'#fff'} borderRadius={'12px'} />
              </div>
            </div>
          </div>
        </Slider>
  </div>
      </div>
    </div>
  );
}

export default Help;
