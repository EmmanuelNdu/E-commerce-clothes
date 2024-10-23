import React from 'react'
import './Footer.css'
const footer_logo = '/Assets/logo.png'
const instagram_icon = '/Assets/instagram_icon.png'
const pintester_icon = '/Assets/pintester_icon.png'
const whatsapp_icon = '/Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt='' height={'60px'} width={'50px'}/>
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt=''/>
        </div>
        <div className="footer-icons-container">
          <img src={pintester_icon} alt=''/>
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt=''/>
        </div>
      </div>
      <div className="footer-copyright">
        <hr/>
        <p>Copyright @ 2024 - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer