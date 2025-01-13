import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FiPhoneCall } from 'react-icons/fi'
import Button from '../../components/buttons/miscButtons/Button'
import './callToAction.styles.css'
import { MdPhoneInTalk } from 'react-icons/md'

const CallToAction = () => {
  const navigate = useNavigate()
  return (
    <div className='ori__cta'>
      <div className='ori__cta-heading'>
        <h1>Contact Us</h1>
      </div>
      <div className='ori__cta_container'>
        <div className='ori__cta_container-num'>
          <span><FiPhoneCall size={22} color='#fff' /></span>
          <a href="tel:+91">9492262019</a>
        </div>
        <div className='ori__cta_container-callback'>
          <Button onClick={() => navigate('contact-page')} text='Schedule Inspection' />
        </div>
      </div>
    </div>  
  )
}

export default CallToAction
