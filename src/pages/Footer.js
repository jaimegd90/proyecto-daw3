import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import './Footer.css'


function Footer() {
  return (
    <div className='footer'>
        <div className='icon'>
            <a href='tel:+34682650524' className='icon1' target='blank'><FaWhatsapp  /></a>
            <a href='https://www.instagram.com/'  target='blank' className='icon1'><FaInstagram /></a>
            <a href='https://www.facebook.com/' target='blank' className='icon1'><CiFacebook /></a>
            <a href='https://x.com/' target='blank' className='icon1'><FaXTwitter /></a>
            <a href='https://www.linkedin.com/' target='blank' className='icon1'><CiLinkedin /></a>
            <a href='mailto:jaimegd90@gmail.com' target='blank' className='icon1'><CiMail /></a>
        </div>
    </div>
  )
}

export default Footer
