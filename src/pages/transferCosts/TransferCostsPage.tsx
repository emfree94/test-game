import { useState } from 'react'
import { Deposit } from '@components/deposit/Deposit'
import { Payout } from '@components/payout/Payout'
import './transferCostsPage.scss'


export const TransferCostsPage = () => {
  const [activeComponent, setActiveComponent] = useState('deposit')

  return (
    <div className="transfer">
      {activeComponent === 'deposit' ? (
        <Deposit
          activeComponent={activeComponent}
          setActiveComponent={setActiveComponent}
        />
      ) : (
        <Payout
          activeComponent={activeComponent}
          setActiveComponent={setActiveComponent}
        />
      )}
    </div>
  )
}
