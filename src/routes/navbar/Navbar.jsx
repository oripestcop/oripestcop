import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link, Outlet } from 'react-router-dom'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { MdPhoneInTalk, MdLocationOn } from 'react-icons/md'
import NavMenu from '../../containers/navMenu/NavMenu'
import Footer from '../../containers/footer/Footer'
import Banner from '../../components/banner/Banner'

import logo from '../../assets/nav-logo-bl.png'
import './navbar.styles.css'

const navLinkVariants = {
  hover: {
    scale: 1.05,
  },
  click: {
    scale: 0.9,
  }
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <Banner />
      <div className='ori__banner'>
        <div className='ori__banner-location'>
          <MdLocationOn size={20} color='#f2571c' />
          <p>NELLORE / VIJAYAWADA</p>
        </div>
        <div className='ori__banner-call'>
          <MdPhoneInTalk size={24} />
          <span><a href="tel:+919100094789">9100094789</a></span>
          <span><p> Or </p></span>
          <span><a href="tel:+919398808712">9492262019</a></span>
        </div>
      </div>
      <div className='ori__navbar'>
        <div className='ori__navbar-links'>
          <Link to='/'>
            <motion.div variants={navLinkVariants} whileHover='hover' whileTap='click' className='ori__navbar-links_logo'>
              <img src={logo} alt='logo' />
            </motion.div>
          </Link>
        </div>
        <div className='ori__navbar-links_container'>
          <NavMenu />
        </div>
        <div className='ori__navbar-contact'>
          <a href="tel:+919100094789">
            <motion.button 
              className='call-btn' 
              type='button' 
              variants={navLinkVariants} 
              whileHover='hover' 
              whileTap='click'
            >
              Call Now
            </motion.button>
          </a>
          <Link to='/contact-page'>
            <motion.button 
              className='quote-btn' 
              type='button' 
              variants={navLinkVariants} 
              whileHover='hover' 
              whileTap='click'
            >
              Get Quote
            </motion.button>
          </Link>
        </div>
        <div className='ori__navbar-menu'>
          {toggleMenu 
            ? <RiCloseLine color='#042a50' size={27} onClick={() => setToggleMenu(false)} /> 
            : <RiMenu3Line color='#042a50' size={27} onClick={() => setToggleMenu(true)} />
          }

          {toggleMenu && (
            <div className='ori__navbar-menu_container scale-up-center'>
              <div className='ori__navbar-menu_container-links'>
                <NavMenu />
                <div className='ori__navbar-menu_container-links-contact'>
                  <a href="tel:+919100094789"><button className='call-btn' type='button'>Call Now</button></a>
                  <Link to='/contact-page'><button className='quote-btn' type='button'>Get Quote</button></Link>
                </div>
              </div>
            </div>
          )
          }
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  )
}

export default Navbar
