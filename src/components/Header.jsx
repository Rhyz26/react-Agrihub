import React from 'react'
import { Link } from 'react-router-dom'

function Header (){
  return (
    <div>
        <ul>
            <li className=''>
                <Link to="/">The AgriHub</Link>
            </li>
            <li className=''>
                <Link to="/">Home</Link>
            </li>
            <li className=''>
                <Link to="/about">About</Link>
            </li>
            <li className=''>
                <Link to="/services">Services</Link>
            </li>

            <li className=''>
                <Link to="/blog">Blog</Link>
            </li>

            <li className=''>
                <Link to="/contact">Contact</Link>
            </li>
            <li className=''>
                <Link to="/appointment">Appointment</Link>
            </li>
        </ul>

    </div>
  )
}

export default Header;