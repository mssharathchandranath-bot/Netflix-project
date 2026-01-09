import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'
import logo from '../assets/logo.png'

function Nav() {
  return (
    <>
        <div className='header'>
          <li><img className='pic' src={logo} alt="Netflix logo" /></li>
          <Link to={"/Home"} className='link'>
            <li>Home</li>
          </Link>

          <Link to={"/Shows"} className='link'>
            <li>Shows</li>
          </Link>

          <Link to={"/Movies"} className='link'>
            <li>Movies</li>
          </Link>

          <Link to={"/New & Popular"} className='link'>
            <li>New & Popular</li>
          </Link>

          <Link to={"/Mylist"} className='link'>
            <li>Mylist</li>
          </Link>

          <Link to={"/Browse by Language"} className='link'>
            <li>Browse by Language</li>
          </Link>
          
          <Link to={"/"} className='link'>
            <li className='link'>Logout</li>
          </Link>
    
        </div>
    </>
  )
}

export default Nav