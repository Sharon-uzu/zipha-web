import React, { useState } from 'react';
import '../App.css';
// import DropdownMenu from './DropdownMenu';
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import logo from '../Asset/z2.png'

const Header = () => {

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
    setDropdownOpen(!isDropdownOpen);
    document.body.style.overflow = click ? 'auto' : 'hidden'; // Disable or enable scrolling
    
  }

  const closeMenuBar = () => {
    setClick(false);
    document.body.style.overflow = 'auto'; // Enable scrolling

  };


  const [activeNav, setActiveNav] = useState('/')



  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };


  return (
    <div className='navbar'>
      <nav>
        <div className='logo'>
          <Link to='/'>
            {/* <h2>CHATBOT</h2> */}
            <img src={logo} alt="" />
          </Link>
        </div>

        <div className='bars' onClick={handleClick}>
          {click ? (<RiCloseFill id='close' />) : (<FaBars id='bar' />)}
        </div>

        <ul className={click ? 'active' : 'menu'}>

          <a href='#' onClick={closeMenuBar}><li onClick={closeMenuBar}>Home</li></a>
          <a href='#price' onClick={closeMenuBar}><li>Pricing</li></a>
          <a href='#faq' onClick={closeMenuBar}><li>FAQs</li></a>
          <a href='#contact' onClick={closeMenuBar}><li>Contact Us</li></a>
          <a className='reg' href='#register' onClick={closeMenuBar}><li>Register</li></a>


        </ul>




      </nav>
      <div className={click ? 'cover' : 'cover active'}></div>


    </div>
  )
}

export default Header