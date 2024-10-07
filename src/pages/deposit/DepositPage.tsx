import { Button } from '@components/buttons/button/Button'

import './depositPage.scss'
import { useState } from 'react'
import { Deposit } from '@components/deposit/Deposit'

export const DepositPage = () => {
  const [activeComponent, setActiveComponent] = useState('deposit')

  return (
    <div className="deposit">
      <div className="deposit-buttons">
        <Button
          text="Поповнення"
          size="medium"
          colorVariant={activeComponent === 'deposit' ? 'yellow' : 'gray'}
          onClick={() => setActiveComponent('deposit')}
        />
        <Button
          text="Вивід"
          size="medium"
          colorVariant={activeComponent === 'withdraw' ? 'yellow' : 'gray'}
          onClick={() => setActiveComponent('withdraw')}
        />
      </div>

      {activeComponent === 'deposit' ? <Deposit /> : null}
    </div>
  )
}
