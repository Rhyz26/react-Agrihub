import React from 'react'
import { Link } from 'react-router-dom'

function Footer ()  {
  return (
    <div className='bg-[#A2AC8E] pt-12 pb-12'>
      <div className='flex gap-14 mx-auto max-w-[80%] footer'>
        <div className='flex flex-col'>
          <h1 className='mb-4'><Link to="/">The AgriHub</Link></h1>
          <p>Empowering Agriculture, One Connection at a Time</p>
          <div className='links flex flex-col'>
            <Link to="/about">About us</Link>
            <Link to="/contact">Get in Touch</Link>
            <Link to="/appointment">Appointment</Link>
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