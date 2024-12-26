import React from 'react'

import ad1_img from './img/ad_1.png'

import './AdDefaultStyle.sass'

const EntrepreneurshipAd = () => {
  return (
    <div 
      className='ad-block'>
      <div
        className='ad-content-cnt'>
        <header>ENTREPRENEURSHIP SUPPORT</header>
        <p>Special credit and servicing conditions</p>
        <p
          className='program-description'>Your Growth, Our Priority: <span>'Grow Together'</span> Program Special Offers!</p>
        <div
          className='active-ad-section'>
          <button>Apply now</button>
          <a href="">More {'>'}</a>
        </div>
      </div>
      <div
        className='ad-img-cnt'>
        <img src={ad1_img} alt="ad_1" />
      </div>
    </div>
  )
}

export default EntrepreneurshipAd