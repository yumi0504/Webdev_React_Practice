import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src="/videos/video-2.mp4" autoPlay loop muted /> */}
      <h1>SOMEONE HAD TO CARE</h1>
      <p>To Infinity and Beyond</p>
      <div className="hero-btns">
        <Button 
          className='btns'
          buttonStyle='btn--outline'
          bottonSize='btn--large'
        >
          ABOUT 
        </Button>
        <Button 
          className='btns'
          buttonStyle='btn--primary'
          bottonSize='btn--large'
        >
          PROFILE<i className='far fa-play-cycle' />
        </Button>
      </div>
    </div>
  )
}


export default HeroSection
