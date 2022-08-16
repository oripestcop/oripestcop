import React from 'react'
import { FaFacebook, FaWhatsapp, FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa'
import ContactForm from '../../containers/contactForm/ContactForm'
import cpHero from '../../assets/contact-page/contact-page-hero.png'
import './contactPage.styles.css'

const ContactPage = () => {
  return (
    <div className='ori__contactPage'>
      <div className='ori__contactPage-hero'>
        <div className='ori__contactPage-hero_img'>
          <img src={cpHero} alt="cpHero" />
        </div>
        <div className='ori__contactPage-hero_content'>
          <h1>Ori Pest Cop</h1>
          <h3>PEST PROBLEM? WE CAN HELP</h3>
          <div className='ori__pestControl-hero_content-socials'>
            <a href='https://www.facebook.com/oripestservice' target='_blank' rel="noreferrer"><FaFacebook size={24} /></a>
            <a href='https://wa.me/message/RE3RCGX3NMFDP1' target='_blank' rel="noreferrer"><FaWhatsapp size={24} /></a>
            <a href='https://youtube.com/channel/UCDck-_3SmiS36pUmOSV22Gw' target='_blank' rel="noreferrer"><FaYoutube size={24} /></a>
            <a href='https://www.linkedin.com/in/ori-pest-cop-372175218' target='_blank' rel="noreferrer"><FaLinkedin size={24} /></a>
            <a href="https://www.instagram.com/oripestcop/" target='_blank' rel="noreferrer"><FaInstagram size={24} /></a>
          </div>
        </div>
      </div>
      <div className='ori__contactPage-contact'>
        <div className='ori__contactPage-contact_content'>
          <p>GET A QUOTE</p>
          <h1>Get your free, personalized, no obligation quote.</h1>
          <p>
            Our technicians are trained to diagnose and treat all types of pest problems. 
            Because every home is different, they work with you to design a unique 
            program for your situation.
          </p>
        </div>
        <div className='ori__contactPage-contact_form'>
         <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default ContactPage