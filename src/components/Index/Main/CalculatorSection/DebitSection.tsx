import React {useState, useCallback} from 'react'
import './DebitSection.sass'
import { terms, TermIndex } from './debitSection'



const DebitSection: React.FC<{}> = () => {

  const [deposit, setDeposit] = useState<number>(0)
  const [term, setTerm] = useState<number>(terms[0]?.period || 0)
  const [withdrawal, setWithdrawal] = useState<boolean>(false)
  const [total, setTotal] = useState<number>(0)
  const [income, setIncome] = useState<number>(0)
  const [interestRate, setInterestRate] = useState<number>(0)
  const [accumulationDate, setAccumulationDate] = useState<string>('')

  const calculateAccumulationDate = useCallback((period: number): string => {
    const now = new Date()
    const years = Math.floor(period / 12)
    const months = period % 12
    now.setFullYear(now.getFullYear() + years)
    now.setMonth(now.getMonth() + months)
    return `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`
  }, [])

  const calculateDeposit = useCallback((principal: number, period: number, allowWithdrawal: boolean) => {
    if (principal <= 0 || period <= 0) {
      setTotal(0)
      setIncome(0)
      setInterestRate(0)
      return
    }

    const termDetails: TermIndex | undefined = terms.find((t) => t.period === period)
    if (!termDetails) return

    const rate = allowWithdrawal ? termDetails.wInterest : termDetails.interest
    let accumulated = principal

    for (let i = 0; i < period; i++) {
      accumulated += (accumulated * rate) / 100 / 12
    }

    setInterestRate(rate)
    setIncome(accumulated - principal)
    setTotal(accumulated)
  }, [])

  useEffext(() => {
    setAccumulationDate(calculateAccumulationDate(term))
    calculateDeposit(deposit, term, withdrawal)
  }, [deposit, term, withdrawal, calculateDeposit, calculateAccumulationDate])

  return (
  <div className='credit-calculator-content-cnt'>
    <div>
      <div className='calculator-inp-cnt'>
        <label htmlFor="">Deposit amount</label>
        <input 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDeposit(Number(e.target.value))}
          value={deposit}
          type="text" 
          id='calculator-input-deposit'/>
      </div>
      <div
        className='calculator-inp-cnt'>
        <label htmlFor="">Term</label>
        <select 
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTerm(Number(e.target.value))}
          name="" 
          value={term}
          id="calculator-select-term">{terms.map(({period}, idx) => {
            const isYear = period >= 12
            const l = isYear
              ? `${period / 12} ${period === 12 ? 'year' : 'years'}`
              : `${period} months`

            return (
              <option key={idx} value={period}>{l}</option>
            )
          })}</select>
      </div>
      <div
        className='withdrawal-opt'>
        <input 
          checked={withdrawal}
          id='withdrawl-checkbox'
          type='checkbox'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWithdrawal(e.target.checked)} />
        <label htmlFor="">With withdrawal</label>
      </div>
    </div>
    <div>
      <div
          className='total-view'>
        <p>Accumulate to {accumulationDate}</p>
        <div>{total.toFixed(0)} $</div>
      </div>
      <div
        className='deposit-interest-cnt'>
        <p>Deposit interest</p>
        <span>{interestRate} %</span>
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