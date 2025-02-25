import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar({ theme }) {
  return (
    <nav className={`landingpage_nav ${theme}`}>
        <ul>
            <li><span>DevQuestPK</span></li>
            <Link to='/'><li>Home</li></Link>
            <Link to='/about'><li>About</li></Link>
            <Link to='/courses'><li>Courses</li></Link>
            <Link to='/contact'><li>Contact Us</li></Link>
        </ul>
        <ul className='Users'>
            <Link to='/login'><li className='alt'>Log In</li></Link>
            {/* <Link to='/signup'><li>Signup</li></Link> */}
        </ul>
    </nav>
  )
}
