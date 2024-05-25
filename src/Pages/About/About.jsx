import React from 'react'
import './About.css'
import { airplane, train } from '../../assets'
import { useTranslation } from 'react-i18next'
// import Button from '../../Component/Button/Button'
const About = () => {
    const {t, i18n} = useTranslation()
  return (
    <div className='about' id='about'>
        <div className="container">
            <h1 className="about-title">{t('about1')}<br /> {t('about2')}</h1>
            <p className="about-text"> {t("about3")}<br /> {t("about4")}</p>
            <div className="about-wrapper">
            <div className="about-cards">
                <img src={train} alt="train "  className='about-img'/>
                <div className="about-card">
                    <div className="about-info">
                        <div className="about-texts">
                            <h2
                             className="about-subtitle">{t("about5")}</h2>
                            <p className='about-paragraph'> {t("about6")}</p>
                        </div>
                        <button className="about-buttons">{t("homepage6")} </button>
                    </div>
                    <p className='about-caption'>{t("about7")}</p>
                </div>
            </div>
            <div className="about-cards">
                <img src={airplane} alt="train "  className='about-img'/>
                <div className="about-card">
                    <div className="about-info">
                        <div className="about-texts">
                            <h2
                             className="about-subtitle">{t("about8")}</h2>
                            <p className='about-paragraph'> {t("about6")}</p>
                        </div>
                       <button className="about-buttons">{t("homepage6")}</button>
                    </div>
                    <p className='about-caption'>{t("about7")}</p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About