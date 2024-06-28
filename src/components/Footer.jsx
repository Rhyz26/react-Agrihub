import React from 'react'
import { Link } from 'react-router-dom'
import PointingArrow from './PointingArrow'
import Underline from './Underline'
import Privacy from './Privacy'

function Footer ()  {
  
  
  
  return (
    <div className='bg-[#8FBC8F] pt-12 pb-12 '>
      <div className='flex gap-12 mx-auto max-w-[60%]  footer'>
        <div className='flex flex-col'>
          <h1 className='mb-4'><Link to="/" onClick={(e) => handleClick(e, 'home')}className='underline-effect'><PointingArrow/>The AgriHub</Link></h1>

          <div className='links flex flex-col '>
            <Link to="/about" onClick={(e) => handleClick(e, 'about')} className='underline-effect'><PointingArrow/>About us</Link>
            <Link to="/contact" onClick={(e) => handleClick(e, 'contact')}className='underline-effect'><PointingArrow/>Get in Touch</Link>
            <Link to="/appointment" onClick={(e) => handleClick(e, 'appointment')}className='underline-effect'><PointingArrow/>Appointment</Link>
            
             <Link to="/privacy" className='underline-effect'><PointingArrow/>Privacy</Link>
            
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-[#1E3D3B] mb-4 text-xl">LOCATION</p>
          <p>Plot 26</p>
          <p>Ministers Village</p>
          <p>Ntinda, Kampala.</p>
        </div>
        <div className="flex flex-col ">
          <h1 className="font-bold mb-4 text-xl">CONTACTS</h1>
          <p>PHONE NO: 0703897243</p>
          <p>Email: njagala.raymond@gmail.com</p>
      
        </div>
        <div className='flex flex-col gap-4 '>
          <h1 className='font-bold text-[#1E3D3B] text-xl'> SOCIAL MEDIA</h1>
          <div className='flex gap-4'>
            <a
                href="https://twitter.com/Initial_Rhy"
                target="_blank"
                i
                className="fa-brands fa-x-twitter font-bold text-xl"
              ></a>
              <a
                href="https://www.linkedin.com/in/raymond-njagala-9a6309a8/"
                target="_blank"
                i
                className="fa-brands fa-linkedin font-bold text-xl"
              ></a>
              <a
                href="https://wa.me/256703897243"
                target="_blank"
                i
                className="fa-brands fa-whatsapp text-xl"
              ></a>
              <a href="tel:+256703897243" target="_blank" i className="fa-solid fa-phone text-xl"></a>
      
              <a href="mailto:njagala.raymond@gmail.com" target="_blank" i className="fa-solid fa-envelope text-xl"></a>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Footer