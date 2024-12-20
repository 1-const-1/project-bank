import React from 'react'

/**
 * The component represents a link or button that allows users
 * to redirect to the authentication page to login to user's
 * account.
 * @returns 
 */
const OnlineBankLink: React.FC<{}> = () => {

  const appName: string = 'Online Bank'

  return (
      <a 
        className='online-bank-a-cnt'
        href="">{appName}</a>
  )
}

export default OnlineBankLink