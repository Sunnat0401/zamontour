import React from 'react'
import HomePages from './Pages/HomePages/HomePages'
import Help from './Pages/Help/Help'
import Offers from './Pages/Offers/Offers'
import About from './Pages/About/About'
import Countries from './Pages/Countries/Countries'
import Adress from './Pages/Adress/Adress'
import Favorites from './Pages/Favorites/Favorites'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <>
    <HomePages/>
    <Help/>
    <Offers/>
    <About/>
    <Countries/>
    <Adress/>
    <Favorites/>
    <Footer/>
    </>
  )

}

export default App