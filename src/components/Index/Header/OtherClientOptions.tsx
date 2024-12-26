import React from 'react'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'

import './OtherClientOptions.sass'

const OtherClientOptions = () => {

  const [clicked, setClicked] = React.useState(false)

  const handleClick = (): void => {
    setClicked(!clicked)
  }

  return (
    <div
      onClick={handleClick}
      className='other-client-opt-cnt'>
      <div>other</div>
      {!clicked ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}
    </div>
  )
}

export default OtherClientOptions