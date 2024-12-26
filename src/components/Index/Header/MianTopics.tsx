import React from 'react'
import * as mGroups from './mainTopics'

import './MainTopics.sass'

const MainTopics: React.FC<{}> = () => {
  return (
    <div>
      {mGroups.mnGroup.map((v, idx) => {
        return (
          <div
            key={idx}
            className={v.className} 
            >{v.name}</div>
        )
      })}
    </div>
  )
}

export default MainTopics