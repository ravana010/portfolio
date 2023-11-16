import React from 'react'
import './flutterpro.css'
import two from '../images/flutter/2nd.jpeg'
import three from '../images/flutter/3rd.jpeg'
import fourth from '../images/flutter/4th.jpeg'
import Faq from '../images/flutter/Faq.jpeg'
import faqhelp from '../images/flutter/faqhelp.jpeg'
import login from '../images/flutter/login.jpeg'
import mainscreen from '../images/flutter/mainscreen.jpeg'
import privacy from '../images/flutter/privacy policy.jpeg'
import register from '../images/flutter/register.jpeg'
import splashscreen from '../images/flutter/splashscreen.jpeg'
function Flutterpro() {
  return (
    <div className='flut'>
        <img src={splashscreen} alt='whatever' className='flutterimg'/>
        <img src={mainscreen} alt='whatever' className='flutterimg'/>
        <img src={two} alt='whatever' className='flutterimg'/>
        <img src={three} alt='whatever' className='flutterimg'/>
        <img src={fourth} alt='whatever' className='flutterimg'/>
        <img src={faqhelp} alt='whatever' className='flutterimg'/>
        <img src={Faq} alt='whatever' className='flutterimg'/>
        <img src={login} alt='whatever' className='flutterimg'/>
        <img src={register} alt='whatever' className='flutterimg'/>
        <img src={privacy} alt='whatever' className='flutterimg'/>
    </div>
  )
}

export default Flutterpro