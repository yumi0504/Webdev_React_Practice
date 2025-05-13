import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          We bring you the latest updates!
        </p>
        <p className='footer-subscription-text'>
          Would you like to hear from us?
        </p>
        <div className='input-areas'>
          <form>
            <input 
              type="email" 
              name='email' 
              placeholder="Your Email"
              className="footer-input" 
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>

        </div>
      </section>
      <div className="footer-links">
      <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Careers</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Profile Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Story</h2>
            <Link to='/'>Photoes</Link>
            <Link to='/'>Video</Link>
            <Link to='/'>Diary</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Projects</h2>
            <Link to='/'>App(1)</Link>
            <Link to='/'>App(2)</Link>
            <Link to='/'>Website(1)</Link>
            <Link to='/'>Website(2)</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="website-rights">TED and YUMI ©2025</div>
        </div>
      </section>
    </div>
  )
}

export default Footer