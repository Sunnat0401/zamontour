import { useTranslation } from 'react-i18next';
import { Logo } from '../../assets';
import './Navbar.css';
import TemporaryDrawer from '../Hamburger/Hamburger';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [color, setColor] = useState(false);
  const languages = localStorage.getItem('i18nextLng') || 'uz';

  const handleChange = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  const changeColor = () => {
    setColor(window.scrollY >= 800);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColor);
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  return (
    <div className={`navbar ${color ? 'navbar-active' : ''}`}>
      <div className="container">
        <a href="#"><img src={Logo} alt="Logo" className="navbar-logo" /></a>
        <ul className="navbar-lists">
          <li className="navbar-list"><a href="#" className="navbar-sublink">{t("main")}</a></li>
          <li className="navbar-list"><a href="#about" className="navbar-sublink">{t("about")}</a></li>
          <li className="navbar-list"><a href="#offer" className="navbar-sublink">{t("species")}</a></li>
          <li className="navbar-list"><a href="#favorites" className="navbar-sublink">{t("contact")}</a></li>
        </ul>
        <select name="Lng" id="lng" onChange={handleChange} value={languages} className="navbar-select">
          <option value="uz">Uz</option>
          <option value="en">En</option>
          <option value="ru">Ru</option>
        </select>
        <ul className="navbar-bnts">
          <li className="navbar-btn"><a href="https://t.me/zamonbiznestour" className="navbar-link"><i className="fa-brands fa-telegram"></i></a></li>
          <li className="navbar-btn"><a href="https://www.instagram.com/zamontour" className="navbar-link"><i className="fa-brands fa-instagram"></i></a></li>
        </ul>
        <div className="modal">
          <TemporaryDrawer />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
