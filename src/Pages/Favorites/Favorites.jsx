import React from 'react'
import './Favorites.css'
import FavoriteConnect from '../../Components/FavoriteConnect/FavoriteConnect'
import { useTranslation } from 'react-i18next'
const Favorites = () => {
  const {t} = useTranslation()
  return (
    <>
     <div className='favorites' id='favorites'>
      <div className="container">
        <h2 className='favorites-title'>{t("favorite1")}</h2>
        <h1 className='favorites-subtitle'>{t("favorite2")}</h1>
        <button className='favorites-btn'>{t("homepage6")}</button>
     
     
      </div>
    </div>
    <div className="container">
    <div className='favorite-cards'>
        <div className="favorite-card">
        <i class="fa-solid fa-phone"></i>
        <h3 className='favorite-text'>{t("favorite3")}</h3>
         <span className='favorite-number'>+998 99 299 99 96</span>
        </div>
        <div className="favorite-card">
        <i class="fa-regular fa-envelope"></i>
        <h3 className='favorite-text'>{t("favorite4")}
</h3>
         <span className='favorite-number'>zamonbiznestour@mail.ru</span>
        </div>
        <div className="favorite-card">
        <i class="fa-solid fa-location-dot"></i>
        <h3 className='favorite-text'> {t("favorite5")}</h3>
         <span className='favorite-number'>15/25, Chilanzar - 9, Tashkent city</span>
        </div>
      </div>
   
    <div className='favorite-map'>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.70448359862!2d69.28197871134266!3d41.337038971186615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b5261aef9ef%3A0x82a0cb91e48981c0!2z0JHQvtC00LDQvNC30LDRgA!5e0!3m2!1sru!2s!4v1716210367024!5m2!1sru!2s"
    width="100%"
    height="400"
    frameborder="0"
  ></iframe>
  
</div>
 <FavoriteConnect/>
    </div>
    </>
   
    
  )
}

export default Favorites