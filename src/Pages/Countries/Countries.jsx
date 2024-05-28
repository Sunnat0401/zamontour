import React from 'react'
import './Countries.css'

import { airplane, antalia, dubai, istanbul, sharm, train } from '../../assets'
import { t} from 'i18next'
import { useTranslation } from 'react-i18next'
const Countries = () => {
    const { t, i18n } = useTranslation();
  return (
    <div className='countries'>
        <div className="container">
            <h1 className="countries-title">{t("countriesf1")} <br /> {t("countriesf2")}</h1>
            <p className="countries-text">{t("countriesf3")}</p>
            <div className="countries-wrapper">
            <div className="countries-cards">
                <img src={dubai} alt="train "  className='countries-img'/>
                <div className="countries-card">
                    <div className="countries-info">
                        <div className="countries-texts">
                            <h2
                             className="countries-subtitle">Dubai </h2>
                            <p className='countries-paragraph'> Birlashgan Arab Amirliklari
</p>
                        </div>
                        <button className="countries-buttons">{t("homepage6")}</button>
                    </div>
                    <p className='countries-caption'>{t("counter3")}</p>
                    <ul className="countries-lists">
                        <li className="countries-list">
                        <i className="fa-regular fa-user"></i>  8.66 mln {t("counter9")}
                        </li>
                        <li className="countries-list">
                        <i className="fa-solid fa-globe"></i>  41.290 km2
                        </li>
                        <li className="countries-list">
                        <i className="fa-solid fa-house"></i>  $1.100.200
                        </li>
                    </ul>
                     <a href='#' className='countries-links'> {t("counter8")}  <i className="fa-solid fa-arrow-right icons"></i> </a>
                </div>
            </div>
            <div className="countries-cards">
                <img src={antalia} alt="train "  className='countries-img'/>
                <div className="countries-card">
                    <div className="countries-info">
                        <div className="countries-texts">
                            <h2
                             className="countries-subtitle">
                             Antalya </h2>
                            <p className='countries-paragraph'> Turkiya
</p>
                        </div>
                        <button className="countries-buttons">{t("homepage6")}</button>
                    </div>
                    <p className='countries-caption'>{t("counter4")}</p>
                    <ul className="countries-lists">
                        <li className="countries-list">
                        <i className="fa-regular fa-user"></i>  44.48 mln {t("counter9")}
                        </li>
                        <li className="countries-list">
                        <i className="fa-solid fa-globe"></i> 275.400 km2
                        </li>
                        <li className="countries-list">
                        <i className="fa-solid fa-house"></i>  $946.000
                        </li>
                    </ul>
                     <a href='#' className='countries-links'> {t("counter8")}  <i className="fa-solid fa-arrow-right icons"></i> </a>
                </div>
            </div>
            <div className="countries-cards">
                <img src={sharm} alt="train "  className='countries-img'/>
                <div className="countries-card">
                    <div className="countries-info">
                        <div className="countries-texts">
                            <h2
                             className="countries-subtitle">
                             Sharm El-Sheikh </h2>
                            <p className='countries-paragraph'> Misr
</p>
                        </div>
                        <button className="countries-buttons">{t("homepage6")}</button>
                    </div>
                    <p className='countries-caption'>{t("counter5")}</p>
                    <ul className="countries-lists">
                        <li className="countries-list">
                        <i className="fa-regular fa-user"></i>   67.41 mln {t("counter9")}
                        </li>
                        <li className="countries-list">
                        <i className="fa-solid fa-globe"></i> 551.500 km2
                        </li>
                        <li className="countries-list">
                        <i className="fa-solid fa-house"></i>   $425.600
                        </li>
                    </ul>
                     <a href='#' className='countries-links'> {t("counter8")}  <i className="fa-solid fa-arrow-right icons"></i> </a>
                </div>
            </div>
            <div className="countries-cards">
                <img src={istanbul} alt="train "  className='countries-img'/>
                <div className="countries-card">
                    <div className="countries-info">
                        <div className="countries-texts">
                            <h2
                             className="countries-subtitle">
                             Istanbul </h2>
                            <p className='countries-paragraph'> Turkey
</p>
                        </div>
                        <button className="countries-buttons">{t("homepage6")}</button>
                    </div>
                    <p className='countries-caption'>{t("counter6")}</p>
                    <ul className="countries-lists">
                        <li className="countries-list">
                        <i className="fa-regular fa-user"></i>    67.41 mln {t("counter9")}
                        </li>
                        <li className="countries-list">
                        <i className="fa-solid fa-globe"></i> 551.500 km2
                        </li>
                        <li className="countries-list">
                        <i className="fa-solid fa-house"></i>    $425.600
                        </li>
                    </ul>
                     <a href='#' className='countries-links'> {t("counter8")}  <i className="fa-solid fa-arrow-right icons"></i> </a>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Countries