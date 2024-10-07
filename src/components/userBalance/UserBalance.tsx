import addCircleIcon from '@assets/icon/add_circle.svg'
import goldenCoin from '@assets/icon/golden_coins2.svg'
import silverCoin from '@assets/icon/silver_coins.svg'
import './userBalance.scss'
import { FC } from 'react'

interface UserBalanceProps {
  silverBalance: string | number
  goldBalance: string | number
}

export const UserBalance: FC<UserBalanceProps> = ({
  silverBalance,
  goldBalance,
}) => {
  return (
    <div className="user-balance">
      <div className="coins">
        <p className="coin-balance text-semi-bold">{goldBalance}</p>
        <img src={goldenCoin} alt="golden-coin" />
        <img className="add-coin" src={addCircleIcon} alt="golden-coin" />
      </div>

      <div className="coins">
        <p className="coin-balance text-semi-bold"> {silverBalance}</p>
        <img src={silverCoin} alt="golden-coin" />
        <img className="add-coin" src={addCircleIcon} alt="golden-coin" />
      </div>
    </div>
  )
}
