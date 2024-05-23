import React from 'react'
import './Countries.css'
import Button from '../../Component/Button/Button'
import { airplane, antalia, dubai, istanbul, sharm, train } from '../../assets'
const Countries = () => {
  return (
    <div className='countries'>
        <div className="container">
            <h1 className="countries-title">Shaharlardan Biriga Hoziroq <br /> Tashrif Buyuring</h1>
            <p className="countries-text">Har bir shahardagi eng yaxshi takliflarimizni kashf eting,<br /> faqat siz uchun. O'zingiz uchun yangi dunyosni oching va  <br /> misli ko'rilmagan sarguzashtlar ega bo'ling.</p>
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
                        <Button width={'155px'} height={'47px'} bg={'#22B3C1'} color={'#fff'} borderRadius={'12px'} />
                    </div>
                    <p className='countries-caption'>Dubay - Birlashgan Arab Amirliklaridagi shahar va amirlik, hashamatli xaridlar, ultramodern arxitektura va jonli tungi hayot sahnasi bilan mashhur. Balandligi 830 m bo'lgan Burj Xalifa minorasi osmono'par binolar bilan to'ldirilgan osmon chizig'ida hukmronlik qiladi. Uning etagida musiqaga xoreografiya qilingan samolyotlar va chiroqlar bilan jihozlangan Dubay favvorasi joylashgan. Sun'iy orollarda Atlantis, Palm, suv va dengiz hayvonlari bog'lari joylashgan kurort joylashgan.</p>
                    <ul className="countries-lists">
                        <li className="countries-list">
                        <i className="fa-regular fa-user"></i>  8.66 mln kishi
                        </li>
                        <li className="countries-list">
                        <i className="fa-solid fa-globe"></i>  41.290 km2
                        </li>
                        <li className="countries-list">
                        <i className="fa-solid fa-house"></i>  $1.100.200
                        </li>
                    </ul>
                     <a href='#' className='countries-links'> Qiziqarlimi  <i className="fa-solid fa-arrow-right icons"></i> </a>
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
                        <Button width={'155px'} height={'47px'} bg={'#22B3C1'} color={'#fff'} borderRadius={'12px'} />
                    </div>
                    <p className='countries-caption'>Antaliya Turkiyaning eng tez rivojlanayotgan shahri bo'lib, butun dunyodan kelgan sayyohlar uning ajoyib plyajlari va an'anaviy turk madaniyatining ajoyib aralashmasini kashf qilmoqdalar. Bolalarga Aqua Land (suvli slaydni yaxshi ko'radiganlar orzusi) va Dolphin Land (delfinlar, dengiz sherlari va oq kitlarning uyi) o'rin olgan Beach Park yoqadi. Eski shahar markazini o'rganing va Hadrian darvozasini ko'ring.</p>
                    <ul className="countries-lists">
                        <li className="countries-list">
                        <i className="fa-regular fa-user"></i>  44.48 mln kishi
                        </li>
                        <li className="countries-list">
                        <i className="fa-solid fa-globe"></i> 275.400 km2
                        </li>
                        <li className="countries-list">
                        <i className="fa-solid fa-house"></i>  $946.000
                        </li>
                    </ul>
                     <a href='#' className='countries-links'> Qiziqarlimi  <i className="fa-solid fa-arrow-right icons"></i> </a>
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
                        <Button width={'155px'} height={'47px'} bg={'#22B3C1'} color={'#fff'} borderRadius={'12px'} />
                    </div>
                    <p className='countries-caption'>Sharm El Sheikh - Sinay yarim orolidagi sayyohlik markazi bo'lib, unda dunyodagi eng yaxshi sho'ng'in joylari mavjud. Sharm shahrini butunlay boshqa darajaga olib chiqqan Ras Muhammad milliy bog'ining suv osti mo''jizalari. Shaharda Qizil dengiz tubidagi parallel dengiz hayotini kashf qilish uchun dunyoning turli burchaklaridan ilg'or va rekreatsion g'avvoslarni jalb qiladigan sho'ng'in va kema halokat joylari mavjud.</p>
                    <ul className="countries-lists">
                        <li className="countries-list">
                        <i className="fa-regular fa-user"></i>   67.41 mln kishi
                        </li>
                        <li className="countries-list">
                        <i className="fa-solid fa-globe"></i> 551.500 km2
                        </li>
                        <li className="countries-list">
                        <i className="fa-solid fa-house"></i>   $425.600
                        </li>
                    </ul>
                     <a href='#' className='countries-links'> Qiziqarlimi  <i className="fa-solid fa-arrow-right icons"></i> </a>
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
                        <Button width={'155px'} height={'47px'} bg={'#22B3C1'} color={'#fff'} borderRadius={'12px'} />
                    </div>
                    <p className='countries-caption'>Istanbul Turkiyaning eng gavjum shahri va uning madaniy, iqtisodiy va tarixiy markazidir. U Turkiyaning shimoli-g'arbiy qismida joylashgan bo'lib, Marmara va Qora dengizni bog'laydigan Bosfor bo'g'ozi orqali Yevropa va Osiyo tomoniga bo'linadi. Bu ikki qit'ada joylashgan dunyodagi yagona shahar.</p>
                    <ul className="countries-lists">
                        <li className="countries-list">
                        <i className="fa-regular fa-user"></i>    67.41 mln kishi
                        </li>
                        <li className="countries-list">
                        <i className="fa-solid fa-globe"></i> 551.500 km2
                        </li>
                        <li className="countries-list">
                        <i className="fa-solid fa-house"></i>    $425.600
                        </li>
                    </ul>
                     <a href='#' className='countries-links'> Qiziqarlimi  <i className="fa-solid fa-arrow-right icons"></i> </a>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Countries