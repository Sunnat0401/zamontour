import Button from '../Button/Button'
import './Footer.css'
const Footer = () => {

  return (
    <div className='footer'>
        <div className="container">
    <div className="footer-information">
                  <div className="footer-cards">
                    <h1 className="footer-title">SAYOHAT QILISHNI XOHLAYSIZMI?</h1>
                    <h3 className="footer-subtitle">Unda biz bilan hoziroq bog'laning</h3>
                  </div>
        <Button width={'155px'} height={'47px'} bg={'#22B3C1'} color={'#fff'} borderRadius={'12px'} />

            </div>
    </div>
           <div className="footer-bottom">
           <p className='footer-text'>Copyright © 2024 Zamon Business Tour. All rights reserved.</p>
           </div>
        </div>
  )
}

export default Footer