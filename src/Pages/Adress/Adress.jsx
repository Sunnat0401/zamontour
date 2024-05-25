import { useTranslation } from 'react-i18next';
import SliderExam from '../Slider/Slider';
import './Adress.css'
import React, { useState } from 'react';
const Adress = () => {
  const {t, i18n} = useTranslation()
  return (
    <div className='adress'>
        <div className="container">
            <h1 className="adress-title">{t("adress1")}</h1>
            <p className='adress-text'>{t("adress2")}<br /> {t("adress3")}</p>
          <SliderExam/>
        </div>
    </div>
  )
}

export default Adress