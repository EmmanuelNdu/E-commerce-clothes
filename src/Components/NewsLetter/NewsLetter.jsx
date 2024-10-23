import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offer on your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div className='input-box'>
            <input type='email' placeholder='Enter your email id'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter