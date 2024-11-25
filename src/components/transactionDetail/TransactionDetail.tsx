import { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { formatAmount } from '@utils/utils'
import { Title } from '@components/title/Title'
import { TransactionProps } from '@components/transaction/Transaction'
import { ButtonArrow } from '@components/buttons/buttonArrow/ButtonArrow'
import goldenCoin from '@assets/icon/golden_coins2.svg'
import silverCoin from '@assets/icon/silver_coins.svg'
import './transactionDetail.scss'

export const TransactionDetailPage: FC = () => {
  const { state } = useLocation() as { state: TransactionProps }

  const { date, transactionText, variant, price, status, infoReplenishment } =
    state

  const navigate = useNavigate()

  if (!state) {
    navigate('/profile/balance')
    return null
  }

  const formattedAmount = formatAmount(price)
  const isPositive = price > 0

  const handleBackUrl = () => {
    navigate(-1)
  }

  return (
    <div className="transaction-detail">
      <div className="transaction-detail-wrapper">
        <ButtonArrow arrowBack onClick={handleBackUrl} />
        <Title text="Деталі транзакції" marginBottom="0px" />
      </div>
      <div className="transaction-detail-data">
        <p className="transaction-data--date text-tiny-regular">{date}</p>
        <div className={`transaction--coin ${variant}`}>
          <img src={variant === 'silver' ? silverCoin : goldenCoin} />
          <p className={`price title-medium ${isPositive && 'positive'}`}>
            {formattedAmount}
          </p>
        </div>
        <div className="transaction-container">
          <div className="transaction-description">
            <p className="transaction-description-text text-regular">Сума</p>
            <p className={`amount text-regular ${isPositive && 'positive'}`}>
              {formattedAmount} USDT
            </p>
          </div>
          <div className="transaction-description">
            <p className="transaction-description-text text-regular">Опис</p>
            <p className="text-regular">{transactionText}</p>
          </div>

          <div className="transaction-description">
            <p className="transaction-description-text text-regular">Статус</p>

            <div className={`status-block ${status}`}>
              <p className={`status-block-text text-tiny-lite ${status}`}>
                {status}
              </p>
            </div>
          </div>
          <div className="transaction-description">
            <p className="transaction-description-text text-regular">Деталі</p>
            <p className="text-regular">{infoReplenishment}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
