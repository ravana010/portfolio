import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <h1>Get In Touch</h1>
        <div className='message'>Hello everyone have a great day :), feel free to contact me</div>
        <div className='location'>
            <i class="fa-solid fa-location-dot"></i>
            Pauri Garhwal,Uttarakhand
        </div>
        <div className='linkdin'>
            <i class="fa-brands fa-linkedin"></i>
            <a href='https://www.linkedin.com/in/aman-deep-7a6a18207'>Linkdin</a>
        </div>
        <div className='gmail'>
            <i class="fa-solid fa-envelope"></i>
            7618deep@gmail.com
        </div>
    </div>
    
  )
}

export default Footer