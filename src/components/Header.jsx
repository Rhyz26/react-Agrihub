import React from 'react'
import { Link } from 'react-router-dom'

function Header (){
  return (
    <div className='header'>
        <ul>
            <li className='text-black bg-white font-extrabold h-7 hover:text-[#ADD8E6]'>
                <Link to="/">The AgriHub</Link>
            </li>
            
            <li className='text-white font-extrabold hover:border-b-4 hover:text-[#ADD8E6]'>
                <Link to="/">Home</Link>
            </li>
            {/* #33691E */}
            <li className='text-white font-extrabold hover:border-b-4 hover:text-[#ADD8E6]'>
                <Link to="/about">About</Link>
            </li>
            <li className='text-white font-extrabold hover:border-b-4 hover:text-[#ADD8E6]'>
                <Link to="/services">Services</Link>
            </li>

            <li className='text-white font-extrabold hover:border-b-4 hover:text-[#ADD8E6]'>
                <Link to="/blog">Blog</Link>
            </li>

            <li className='text-white font-extrabold hover:border-b-4 hover:text-[#ADD8E6]'>
                <Link to="/contact">Get in Touch</Link>
            </li>
            <li className='text-white font-extrabold hover:border-b-4 hover:text-[#ADD8E6]'>
                <Link to="/appointment">Appointment</Link>
            </li>
        </ul>

    </div>
  )
}

export default Header;