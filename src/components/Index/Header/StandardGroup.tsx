import React from 'react'
import * as sGroup from './standardGroup'
import OnlineBankLink from './OnlineBankLink'
import SearchButton from './SearchButton'

import './StandardGroup.sass'

/**
 * The component is designed to provide users with quick access
 * to important informational links related to offices locations,
 * ATMs, exchange rates, and language site options.
 * @returns 
 */
const StandardGroup: React.FC<{}> = () => {
  return (
    <div
      className='standard-group-cnt'>
      {sGroup.standardGroup.map((v, idx) => {
        return (
          <a
            key={idx}
            className={v.className} 
            href="">{v.name}</a>
        )
      })}
      <OnlineBankLink />
      <SearchButton />
    </div>
  )
}

export default StandardGroup