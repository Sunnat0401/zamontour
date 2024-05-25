import { useTranslation } from 'react-i18next'
import './Footer.css'
const Footer = () => {
  const {t} = useTranslation()
  return (
    <div className='footer'>
        <div className="container">
    <div className="footer-information">
                  <div className="footer-cards">
                    <h1 className="footer-title">{t("footer1")}</h1>
                    <h3 className="footer-subtitle">{t("footer2")}</h3>
                  </div>
             <button className='footer-btn'>{t("footer3")}</button>
            </div>
    </div>
           <div className="footer-bottom">
           <p className='footer-text'>Copyright © 2024 Zamon Business Tour. All rights reserved.</p>
           </div>
        </div>
  )
}

export default Footer