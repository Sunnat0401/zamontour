import Sliders from '../Slider/Slider';
import './Adress.css'
import React, { useState } from 'react';
const Adress = () => {

  return (
    <div className='adress'>
        <div className="container">
            <h1 className="adress-title">Eng Yaxshi Manzillar</h1>
            <p className='adress-text'>Har bir shahardagi eng yaxshi takliflarimizni kashf eting, <br /> faqat siz uchun. O'zingiz uchun yangi dunyosni oching va <br /> misli ko'rilmagan sarguzashtlar ega bo'ling.</p>
          <Sliders/>
        </div>
    </div>
  )
}

export default Adress