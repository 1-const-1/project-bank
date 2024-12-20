import React from 'react'
import * as cGroups from './clientGroup'

import './ClientGroup.sass'

/**
 * This component represents a container with the list of
 * different types of clients.
 * @returns
 */
const ClientGroup: React.FC<{}> = () => {
  return (
    <div
      className='client-group-cnt'>
      {cGroups.clientGroup.map((v, idx) => {
        return (
          <a 
            key={idx}
            className={v.className}
            href="">{v.name}</a>
        )
      })}
    </div>
  )
}

export default ClientGroup