import React from 'react'
import './Contact.css'

const Contact = () => {
  function telegram() {
    window.open('https://t.me/Positive_oo1', '_blank')
  }
  function instagram() {
    window.open('https://www.instagram.com/positive_oo1', '_blank')
  }
  function facebook() {
    window.open('https://www.facebook.com/Abubakr_o1o', '_blank')
  }
  function youtube() {
    window.open('https://www.youtube.com/channel/UCvp3E2U9sJV23vpwE-uCqqg', '_blank');
  }
  return (
    <div>
      <div className='contactSection'>
        <h1>Contact us</h1>
        <p>We will try our best.</p>
        <div className='icons'>
        <i onClick={() => telegram()} class="fa-brands fa-telegram" style={{color: '#2CA2D7'}}></i>
        <i onClick={() => instagram()} class="fa-brands fa-instagram" style={{background: 'linear-gradient(to right, #833ab4, #fd1d1d,#fcb045)'}}></i>
        <i onClick={() => facebook()} class="fa-brands fa-facebook" style={{color: '#0266FF'}}></i>
        <i onClick={() => youtube()} class="fa-brands fa-youtube" style={{color: '#FF0101'}}></i>
        <i class="fa-solid fa-user-tie"></i>
              </div>
      
        <h2>My email: <span>vistulaabubakrsiddik@gmail.com</span></h2>
      </div>
    </div>
  )
}

export default Contact