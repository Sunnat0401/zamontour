import React, { useState } from 'react'
import './FavoriteConnect.css'
import Button from '../Button/Button'
import axios from 'axios'
import { message } from 'antd'
const FavoriteConnect = () => {
  const [loading , setLoading] = useState(false)
  const SendMessage = ( event) =>{
    setLoading(true)
    event.preventDefault();
    const token = "7004900393:AAGYHAnQhdDlkbJxo4xs-vRbpISIgoTxWR8"
    const chat_id = 6856618212  ;
    const url = ` https://api.telegram.org/bot${token}/sendMessage`
    const name =document.getElementById("name").value
    const nambers =document.getElementById("numbers").value
    const person =document.getElementById("chooseGuests").value
    const dates =document.getElementById("iasdas").value
    const adress =document.getElementById("chooseCategory").value
    const visa =document.getElementById("visa").value
    
    const sendMessageContent = `Ismi: ${name} \n Familiyasi: ${nambers} necha kishiligi : ${person} \n sanasi: ${dates}manzil : ${adress} \n visa: ${visa}`
    axios({
      url : url ,
      method: 'POST',
      data: {
        "chat_id" : chat_id,
        "text":sendMessageContent
      }
    }).then((res) => {
      message.success("Muvaffaqiyatli")
      document.getElementById("myForm").reset()
    }).catch((err) => {
      message.error("yuborishda xatolik", err)
    }).finally(()=>setLoading(false))
  }
  return (
    <div className='favorite-connect'>
    <h1 className='favorite-subject'>O'z <span className='headline'>joyingizni </span> band <span className='headline'>qiling </span></h1>
    <form className='form-container ' onSubmit={SendMessage} id="myForm">
    <div className="form-wrapper" >
    <div className="form-row">
    <div class="form-group">
            <label htmlFor="sfds" className='form-label'>Ismingiz </label> 
            <input type="text"  className='form-input' placeholder="Muhammad" id="name"/>
            <label htmlFor="iasdas" className='form-label'>Telefon raqamingiz</label>
            <input type="text" className='form-input' placeholder='+998 90 124 95 71'  id="numbers" />
        </div>
        <div class="form-group">
            <label htmlFor="sfds" className='form-label'>Necha kishisiz </label> 
            <select id="chooseGuests" name="Guests" className="form-input " aria-label="Default select example" onchange="this.form.click()">
                    <option selected="">ex. 3 or 4 or 5</option>
                    <option type="checkbox" name="option1" value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4+">4+</option>
                  </select>
            <label htmlFor="iasdas" className='form-label'>Uchish sanasi </label>
            <input type="date" id="iasdas"className='form-input' />
        </div>
        </div>
         
 <div className='form-bottom'>
<label for="chooseDestination" class="form-label">Manzilingizni tanlang</label>
<select id="chooseCategory" name="Destination" class="form-select" aria-label="Default select example" onchange="this.form.click()">
  <option selected="">Antalya</option>
  <option value="Istanbul">Istanbul</option>
  <option value="Dubai">Dubai</option>
  <option value="Sharm El-Sheikh">Sharm El-Sheikh</option>
  <option value="Kuala Lumpur">Kuala Lumpur</option>
  <option value="Kanada">Kanada</option>
  <option value="England">Angliya</option>
  <option value="USA">AQSh</option> 
</select>
</div>
<div  className='form-bottom'>
  <label for="chooseDestination" className="form-label">Visa turini tanlang</label>
  <select name="Destination" className="form-select" aria-label="Default select example" id="visa" onchange="this.form.click()">
    <option selected="">Country</option> 
    <option value="Europe">Europe</option>
    <option value="England">England</option>
    <option value="Japan">Japan</option>
    <option value="Oman">Oman</option> 
    <option value="USA">USA</option> 
    <option value="Saudiya Arabistoni">Saudi Arabia</option> 
    <option value="India">India</option> 
    <option value="China">China</option> 
    <option value="HongKong">Hong Kong</option>  
  </select>
</div> 
<Button width={'100%'} height={'47px'} bg={'#22B3C1'} color={'#fff'} borderRadius={'12px'} type="submit" />
    </div>
        
    

       </form>
  </div>
  )
}

export default FavoriteConnect

