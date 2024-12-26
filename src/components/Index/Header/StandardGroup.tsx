import React from 'react'
import * as sGroup from './standardGroupList'
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
            href="">
              {!v.img ? null  : <v.img />}
            <p>{v.name}</p>
          </a>
        )
      })}
      <OnlineBankLink />
      <SearchButton />
    </div>
  )
}

export default StandardGroup