import React from 'react'
import Logo from './Logo'
import ClientGroup from './ClientGroup'
import StandardGroup from './StandardGroup'

import './Header.sass'

/**
 * This components represents the container with all 
 * necessary navigation links of the web-application
 * @returns 
 */
const Header: React.FC<{}> = () => {
  return (
    <header
      className='body-header'>
      <div>
        <Logo/>
        <ClientGroup />
      </div>
      <div>
        <StandardGroup />
      </div>
    </header>
  )
}

export default Header