import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { formatAmount, formatDate } from '@utils/utils'
import { Button } from '@components/buttons/button/Button'
import { ButtonArrow } from '@components/buttons/buttonArrow/ButtonArrow'
import { Title } from '@components/title/Title'
import { StatusBlock } from '@components/statusBlock/StatusBlock'
import { ContentMessage } from '@components/contentMessage/ContentMessage'
import goldenCoin from '@assets/icon/golden_coins2.svg'
import goldenCoinSmall from '@assets/icon/golden-coins.svg'
import './payoutDetailPage.scss'

type PayoutDetail = {
  price: number
  withdrawal: number
  description: string
  status: 'Progress' | 'Completed' | 'Failed' | 'New'
  network: string
  walletId: string
  date: string
}

const payoutDetail: PayoutDetail[] = [
  {
    price: -1500,
    withdrawal: 15,
    description: 'Виведено кошти',
    status: 'Progress',
    network: 'Мережа 1',
    walletId: '9548t8459utnfjn49584845',
    date: formatDate('2024-09-08T11:45:00'),
  },
]

export const PayoutDetailPage: FC = () => {
  const navigate = useNavigate()

  const { price, withdrawal, description, status, network, date, walletId } =
    payoutDetail[0]

  const formattedAmount = formatAmount(price)

  // const handleBackUrl = () => {
  //   navigate(-1)
  // }

  return (
    <div className="payout-detail">
      <div className="payout-detail__head">
        <ButtonArrow arrowBack onClick={() => navigate(-1)} />
        <Title text="Деталі транзакції" marginBottom="0px" />
      </div>
      <div className="detail-block">
        <p className="detail-block__date text-tiny-regular">{date}</p>
        <div className="detail-block__balance">
          <p className="detail-block__balance--price title-medium">
            {formattedAmount}
          </p>
          <img src={goldenCoin} alt="golden-coin-icon" />
        </div>

        <div className="detail-block__transaction">
          <div className="detail-block__transaction--wrapper">
            <p className="description text-regular">Сума</p>
            <span className="text-semi-bold ">
              {formattedAmount}
              {price && <img src={goldenCoinSmall} alt="golden-coin-icon" />}
            </span>
          </div>

          <div className="detail-block__transaction--wrapper">
            <p className="description text-regular">Виведено</p>
            <span className="withdrawal text-regular">+ {withdrawal} USDT</span>
          </div>

          <div className="detail-block__transaction--wrapper">
            <p className="description text-regular">Опис</p>
            <span className="text-regular">{description}</span>
          </div>

          <div className="detail-block__transaction--wrapper">
            <p className="description text-regular">Опис</p>
            <StatusBlock status={status} />
          </div>

          <div className="detail-block__transaction--wrapper">
            <p className="description text-regular">Мережа</p>
            <span className="text-regular">{network}</span>
          </div>

          <div className="detail-block__transaction--wrapper">
            <p className="description text-regular">Гаманець</p>
            <span className="text-regular">{walletId}</span>
          </div>
        </div>

        <Button
          text="Поповнити"
          size="large"
          fontSize="title-semi-bold"
          colorVariant="yellow"
          onClick={() => navigate('/profile')}
          marginBottom="28px"
        />
      </div>
      <ContentMessage
        text="Перевірте гаманець для виведення"
        description="Та підтвердьте транзакцію"
        hideButton
      />
    </div>
  )
}
