import React from 'react'
import Logo from './Logo'
import ClientGroup from './ClientGroup'
import StandardGroup from './StandardGroup'

import './Header.sass'
import MainTopics from './MianTopics'

/**
 * This components represents the container with all 
 * necessary navigation links of the web-application
 * @returns 
 */
const Header: React.FC<{}> = () => {
  return (
    <header
      className='body-header'>
      <div
        className='main-nav-links'>
        <div>
          <Logo/>
          <ClientGroup />
        </div>
        <div>
          <StandardGroup />
        </div>
      </div>
      <div
        className='topics-nav-links'>
        <MainTopics />
      </div>
    </header>
  )
}

export default Header