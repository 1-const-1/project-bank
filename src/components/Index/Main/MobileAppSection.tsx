import React from 'react'
import { FaAndroid } from 'react-icons/fa'
import { FaApple } from 'react-icons/fa'

import goldPhone from './MobileApp/gold-phone.png'

import './MobileAppSection.sass'

const MobileAppSection: React.FC<{}> = () => {
  return (
    <div
      className='mobile-app-block'>
        <div>
          <div
            className='mobile-app-content'>
              <header>Meet our mobile app</header>
              <p>Your trusted bank, right in your pocket. Take control and manage everything the way you want, anytime, anywhere.</p>
              <div>
                <button>
                  <FaAndroid /> Android
                </button>
                <button>
                  <FaApple /> iOS
                </button>
              </div>
          </div>
          <img className='gold-phone' src={goldPhone} alt="" />
        </div>
    </div>
  )
}

export default MobileAppSection