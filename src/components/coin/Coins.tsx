import { FC } from 'react'
import { formatAmount } from '@utils/utils'
import minusIcon from '@assets/icon/minus.svg'
import addCircleIcon from '@assets/icon/add_circle2.svg'
import goldenCoin from '@assets/icon/golden_coins2.svg'
import silverCoin from '@assets/icon/silver_coins.svg'
import './coins.scss'

interface CoinsProps {
  variant?: 'silver' | 'golden'
  amount: string | number
}

export const Coins: FC<CoinsProps> = ({ variant = 'golden', amount }) => {
  const formattedAmount = formatAmount(amount)

  return (
    <div className={`coin ${variant}`}>
      {variant === 'golden' && (
        <img className="coin-icon" src={minusIcon} alt="minus-icon" />
      )}
      <div className="quantity-coin-wrapper">
        <img
          className="quantity-coin"
          src={variant === 'golden' ? goldenCoin : silverCoin}
        />
        <p className="quantity text-semi-bold">{formattedAmount}</p>
      </div>
      <img className="coin-icon" src={addCircleIcon} alt="add-icon" />
    </div>
  )
}
