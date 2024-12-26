import React from 'react'
import EntrepreneurshipAd from './AdSection/EntrepreneurshipAd'

import './AdSection.sass'
import FamMortgageAd from './AdSection/FamMortgageAd'

const AdSection: React.FC<{}> = () => {

  const [adPos, setAdPos] = React.useState(0)

  const ads: React.JSX.Element[] = [
    <EntrepreneurshipAd />,
    <FamMortgageAd />,
  ]

  const adBtnHandler = (cnt: HTMLElement|null, idx: number) => {
    if (!cnt) return;
    setAdPos(idx)
    cnt.scrollLeft = idx * 1360
  }

  return (
    <div
      className='ads-block'>
      <div
        className='ad-list-cnt'>
        <div
          className='ad-list'>
            <div>
              {ads.map((v, idx) => {
                return <div key={idx}>{v}</div>
              })}
            </div>
        </div>
      </div>
      <div 
        className='ads-circles-cnt'>
          {ads.map((v, idx) => {
            return (
              <div 
                key={idx} 
                onClick={() => adBtnHandler(document.getElementsByClassName('ad-list')[0], idx)}
                className={adPos === idx ? 'selected-ad-circle' : 'ad-circle'}></div>
            )
          })}
      </div>
    </div>
  )
}

export default AdSection