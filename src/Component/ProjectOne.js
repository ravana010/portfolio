import React from 'react'
import './ProjectOne.css'
import Home from '../images/project1/home.png'
import Company from '../images/project1/company.png'
import Entry from '../images/project1/entry profile.png'
import Facility from '../images/project1/facility.png'
import Footer from '../images/project1/footer.png'
import Income from '../images/project1/income.png'
import Mission from '../images/project1/mission.png'
import Vision from '../images/project1/vision.png'
function ProjectOne() {
  return (
    <div className='container'>
        <img src={Home} alt='proImage' className='pro1' />
        <img src={Company} alt='proImage' className='pro1'/>
        <img src={Entry} alt='proImage' className='pro1'/>
        <img src={Facility} alt='proImage' className='pro1'/>
        <img src={Income} alt='proImage' className='pro1'/>
        <img src={Mission} alt='proImage' className='pro1'/>
        <img src={Vision} alt='proImage' className='pro1'/>
        <img src={Footer} alt='proImage' className='pro1'/>
    </div>
  )
}

export default ProjectOne