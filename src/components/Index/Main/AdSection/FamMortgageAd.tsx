import React from 'react'

import ad1_img from './img/ad_2.png'

import './AdDefaultStyle.sass'

const FamMortgageAd = () => {
  return (
    <div 
      className='ad-block'>
      <div
        className='ad-content-cnt'>
        <header>FAMILY MORTGAGE</header>
        <p>Special credit and servicing conditions</p>
        <p>Special loan conditions for young families</p>
        <p style={{width: 240}}>Take the first bold step toward a new life</p>
        <p 
          style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'baseline'}}
          >from<span className='green-important'>3.01 %</span></p>
        <a 
          href='' 
          className='yellow-ad-link'>If all conditions are met</a>
        <div
          className='active-ad-section'>
          <button>Apply now</button>
          <a href="">More {'>'}</a>
        </div>
      </div>
      <div
        className='ad-img-cnt'>
        <img src={ad1_img} alt="ad_2" />
      </div>
    </div>
  )
}

export default FamMortgageAd