import React from 'react' 

import './Logo.sass'

/**
 * This components serves as a reusable and customizable branding
 * element. It combines the company's logo and name into a cohensive 
 * and visually appealing structure.
 * @returns 
 */
const Logo: React.FC<{}> = () => {
  return (
    <div 
      className='company-logo-cnt'>
      <div
        className='company-logo'>OB</div>
      <div
        className='company-name'>ONLINE BANK</div>
    </div>
  )
}

export default Logo