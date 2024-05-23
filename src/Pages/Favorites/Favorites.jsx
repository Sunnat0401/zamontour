import React from 'react'
import Button from '../../Component/Button/Button'
import './Favorites.css'
import FavoiteMap from '../../Component/FavoiteMap/FavoiteMap'
import FavoriteConnect from '../../Component/FavoriteConnect/FavoriteConnect'
const Favorites = () => {
  return (
    <>
     <div className='favorites'>
      <div className="container">
        <h2 className='favorites-title'>O'zingiz yoqtirganingizni tanlang</h2>
        <h1 className='favorites-subtitle'>O'z joyingizni band qiling</h1>
        <Button width={'155px'} height={'47px'} bg={'#22B3C1'} color={'#fff'} borderRadius={'12px'} />
     
     
      </div>
    </div>
    <div className="container">
    <div className='favorite-cards'>
        <div className="favorite-card">
        <i class="fa-solid fa-phone"></i>
        <h3 className='favorite-text'>Telefon raqam</h3>
         <span className='favorite-number'>+998 99 299 99 96</span>
        </div>
        <div className="favorite-card">
        <i class="fa-regular fa-envelope"></i>
        <h3 className='favorite-text'>Bizga email orqali bog'laning
</h3>
         <span className='favorite-number'>zamonbiznestour@mail.ru</span>
        </div>
        <div className="favorite-card">
        <i class="fa-solid fa-location-dot"></i>
        <h3 className='favorite-text'> Ofisimizga tashrif buyuring</h3>
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