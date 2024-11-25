import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { formatAmount } from '@utils/utils'
import minusIcon from '@assets/icon/minus.svg'
import addCircleIcon from '@assets/icon/add_circle2.svg'
import goldenCoin from '@assets/icon/golden_coins2.svg'
import silverCoin from '@assets/icon/silver_coins.svg'
import './coins.scss'

interface CoinsProps {
  variant?: 'silver' | 'golden'
  amount: string | number
  isHiddenIcon?: boolean
  handlePass?: () => void
}

export const Coins: FC<CoinsProps> = ({
  variant = 'golden',
  amount,
  isHiddenIcon,
  handlePass
}) => {
  const formattedAmount = formatAmount(amount)
  const navigate = useNavigate()

  return (
    <div className={`coin ${variant} ${isHiddenIcon && 'hide-icon'}`}>
      {variant === 'golden' && !isHiddenIcon && (
        <img className="coin-icon" src={minusIcon} alt="minus-icon" />
      )}
      <div className="quantity-coin-wrapper" onClick={handlePass}>
        <img
          className="quantity-coin"
          src={variant === 'golden' ? goldenCoin : silverCoin}
        />
        <p className="quantity text-semi-bold">{formattedAmount}</p>
      </div>

      {!isHiddenIcon && (
        <img className="coin-icon" src={addCircleIcon} alt="add-icon" />
      )}
    </div>
  )
}
