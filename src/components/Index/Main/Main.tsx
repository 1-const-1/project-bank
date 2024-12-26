import React from 'react'
import AdSection from './AdSection'
import MobileAppSection from './MobileAppSection'
import CreditCalculatorSection from './CreditCalculatorSection'

const Main: React.FC<{}> = () => {
  return (
    <main
      className='body-main'>
      <AdSection />
      <MobileAppSection />
      <CreditCalculatorSection />
    </main>
  )
}

export default Main