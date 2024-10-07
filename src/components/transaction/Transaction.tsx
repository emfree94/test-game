import { FC } from 'react'
import goldenCoin from '@assets/icon/golden_coins2.svg'
import silverCoin from '@assets/icon/silver_coins.svg'
import './transaction.scss'
import { useNavigate } from 'react-router-dom'
import { formatAmount } from '@utils/utils'

export interface TransactionProps {
  id: number | string
  status: string
  price: number
  variant: 'silver' | 'gold'
  transactionText: string
  date: string
  infoReplenishment: string
}

export const Transaction: FC<TransactionProps> = ({
  id,
  status,
  price,
  variant,
  transactionText,
  date,
  infoReplenishment,
}) => {
  const navigate = useNavigate()

  const handleTransactionClick = () => {
    navigate(`/profile/balance/transaction/${id}`, {
      state: {
        id,
        status,
        price,
        variant,
        transactionText,
        date,
        infoReplenishment,
      },
    })
  }

  const formattedAmount = formatAmount(price)
  const isPositive = price > 0

  return (
    <div className='transaction' onClick={handleTransactionClick}>
      <div className="transaction-container">
        <p className="transaction-text text-regular">{transactionText}</p>
        <span className={`status-block ${status}`}>
          <p className={`status-block-text text-tiny-lite ${status}`}>
            {status}
          </p>
        </span>
      </div>
      <div className="transaction-price-block">
        <p className={` price text-bold  ${isPositive && 'positive'}`}>
          {formattedAmount}
        </p>
        <img
          src={variant === 'gold' ? goldenCoin : silverCoin}
          alt="coin-icon"
        />
      </div>
    </div>
  )
}
