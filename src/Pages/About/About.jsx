import React from 'react'
import './About.css'
import { airplane, train } from '../../assets'
import Button from '../../Component/Button/Button'
const About = () => {
  return (
    <div className='about'>
        <div className="container">
            <h1 className="about-title">Chiptalarni Biz Bilan <br /> Arzon Va Oson Toping</h1>
            <p className="about-text">Har bir shaharda eng yaxshi temir yo‘l va aviachipta  <br />biletlarini biz bilan toping</p>
            <div className="about-wrapper">
            <div className="about-cards">
                <img src={train} alt="train "  className='about-img'/>
                <div className="about-card">
                    <div className="about-info">
                        <div className="about-texts">
                            <h2
                             className="about-subtitle">Temir Yo‘l Biletlari Biz Bilan</h2>
                            <p className='about-paragraph'> Butun dunyo bo'ylab</p>
                        </div>
                        <Button width={'155px'} height={'47px'} bg={'#22B3C1'} color={'#fff'} borderRadius={'12px'} />
                    </div>
                    <p className='about-caption'>Temir yo'l orqali biz bilan sarguzashtlarni kashf eting! Baland tog'larni, betakror tabiat manzalarni, qadimiy va navqiron shaharlarni, takrorlanmas landshaflarni biz bilan birga toping. Qiziqarlimi? Biz bilan bog'laning.</p>
                </div>
            </div>
            <div className="about-cards">
                <img src={airplane} alt="train "  className='about-img'/>
                <div className="about-card">
                    <div className="about-info">
                        <div className="about-texts">
                            <h2
                             className="about-subtitle">Aviabiletlar Biz Bilan Arzon</h2>
                            <p className='about-paragraph'> Butun dunyo bo'ylab</p>
                        </div>
                        <Button width={'155px'} height={'47px'} bg={'#22B3C1'} color={'#fff'} borderRadius={'12px'} />
                    </div>
                    <p className='about-caption'>Temir yo'l orqali biz bilan sarguzashtlarni kashf eting! Baland tog'larni, betakror tabiat manzalarni, qadimiy va navqiron shaharlarni, takrorlanmas landshaflarni biz bilan birga toping. Qiziqarlimi? Biz bilan bog'laning.</p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About