import React from 'react'

import './CreditCalculatorSection.sass'
import DebitSection from './CalculatorSection/DebitSection'
import CreditFields from './CalculatorSection/CreditFields'

const CreditCalculatorSection: React.FC<{}> = () => {

  const [modeOption, setModeOption] = React.useState(0)
  
  const modeOptionBtns: string[] = ['Deposit', 'Credit']
  const sections: React.JSX.Element[] = [<DebitSection />, <CreditFields />]

  const handleOptionMode = (idx: number): void => {
    setModeOption(idx)
  }

  return (
  <div
    className='credit-calculator-cnt'>
    <div
      className='credit-calculator-section'>
      <header>
        <div>Let us help you calculate</div>
        <div
          className='calculator-select-option-cnt'>
            {modeOptionBtns.map((v, idx) => {
              return (
                <button
                key={idx}
                onClick={() => handleOptionMode(idx)}
                  className={idx === modeOption ? 'calculator-selected-option' : 'calculator-unselected-option'}>{v}</button>
              )
            })}
        </div>
      </header>
      {sections.map((v, idx) => {
        if (idx === modeOption)
          return (
            <div key={idx}>{v}</div>
          )
      })}
    </div>
  </div>
  )
}

export default CreditCalculatorSection