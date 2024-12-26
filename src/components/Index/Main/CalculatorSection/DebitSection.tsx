import React from 'react'

import './DebitSection.sass'
import { terms } from './debitSection'

const DebitSection: React.FC<{}> = () => {

  const [income, setIncome] = React.useState(0)
  const [interest, setInterest] = React.useState(0)
  const [total, setTotal] = React.useState(0)
  const date = React.useRef('')

  const t = terms

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const elm = document.getElementById('calculator-select-term') as HTMLSelectElement
    const ckbox = document.getElementById('withdrawl-checkbox') as HTMLInputElement

    countDeposit(Number(e.target.value), Number(elm.value), ckbox.checked)
  }

  const selectOnChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const elm = document.getElementById('calculator-input-deposit') as HTMLInputElement
    const ckbox = document.getElementById('withdrawl-checkbox') as HTMLInputElement

    countDeposit(Number(elm.value), Number(e.target.value), ckbox.checked)
    date.current = getDate()
  } 

  const checkboxOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const elm1 = document.getElementById('calculator-select-term') as HTMLSelectElement
    const elm2 = document.getElementById('calculator-input-deposit') as HTMLInputElement

    countDeposit(Number(elm2.value), Number(elm1.value), e.target.checked)
  }

  const getDate = (): string => {
    const elm = document.getElementById('calculator-select-term') as HTMLSelectElement

    const now = new Date(Date.now())
    const y = Math.floor(Number(elm.value) / 12)
    const m = Number(elm.value) % 12

    return `${(now.getMonth() + m + 1 > 12 ? now.getMonth() + m + 1 - 12 : now.getMonth() + m + 1)}.${now.getDate()}.${now.getFullYear() + y}`
  }

  const countDeposit = (s:number, p: number, w: boolean): void => {
    let sum = s
    const idx = terms.find(v => v.period === p)

    if (!idx || !p) {
      setTotal(0)
      return;
    }

    const interest = w ? idx.wInterest : idx.interest

    for (let i = 0; i < p; i++) {
      const inc = sum * interest / 100
      sum += inc
    }
  
    setInterest(interest)
    setIncome(sum - s)
    setTotal(sum)
  }

  return (
  <div
    className='credit-calculator-content-cnt'>
    <div>
      <div
        className='calculator-inp-cnt'>
        <label htmlFor="">Deposit amount</label>
        <input 
          onChange={inputOnChange}
          type="text" 
          id='calculator-input-deposit'/>
      </div>
      <div
        className='calculator-inp-cnt'>
        <label htmlFor="">Term</label>
        <select 
          onChange={selectOnChange}
          name="" 
          id="calculator-select-term">{t.map((v, idx) => {
          let p: string = v.period < 12 ? 'months' : (v.period === 12 ? 'year' : 'years') 
          let d: number = v.period / 12 < 1 ? v.period : v.period / 12

          return (
            <option
              value={v.period}
              key={idx}>{d} {p}</option>
          )
        })}</select>
      </div>
      <div
        className='withdrawal-opt'>
        <input 
          onChange={checkboxOnChange}
          id='withdrawl-checkbox'
          type='checkbox' />
        <label htmlFor="">With withdrawal</label>
      </div>
    </div>
    <div>
      <div
          className='total-view'>
        <p>Accumulate to {date.current}</p>
        <div>{total.toFixed(0)} $</div>
      </div>
      <div
        className='deposit-interest-cnt'>
        <p>Deposit interest</p>
        <span>{interest} %</span>
      </div>
      <div
        className='income-cnt'>
        <p>You earn</p>
        <span>{income.toFixed(0)} $</span>
      </div>
    </div>
  </div>
  )
}

export default DebitSection