import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { copyTextToClipboard } from '@utils/utils'
import { ButtonArrow } from '@components/buttons/buttonArrow/ButtonArrow'
import { Title } from '@components/title/Title'
import { Button } from '@components/buttons/button/Button'
import ContentMessage from '@components/contentMessage/ContentMessage'
import linkIcon from '@assets/icon/copy.svg'
import qrImage from '@assets/img/qrCode.png'
import './refillAccountPage.scss'

export const RefillAccountPage = () => {
  const [statusTransaction, setStatusTransaction] = useState('')

  const navigate = useNavigate()

  const walletId = '9548t8459utnfjn49584845'
  const amount = 15

  const handleTransaction = () => {
    setStatusTransaction('pending')
  }

  return (
    <div className="refill-account">
      <div className="refill-account--head">
        {statusTransaction === 'pending' ? (
          <ButtonArrow arrowBack onClick={() => navigate('/profile')} />
        ) : (
          <>
            <ButtonArrow arrowBack onClick={() => navigate(-1)} />
            <Title text="Рахунок для поповнення" marginBottom="0px" />
          </>
        )}
      </div>

      {statusTransaction !== 'pending' ? (
        <>
          <div className="refill-account--qr-block">
            <img className="qr-image" src={qrImage} alt="qr-code-image" />
          </div>

          <div className="refill-account--info-transaction">
            <div className="refill-account-transaction">
              <p className="transaction-title text-medium">Код гаманця</p>
              <div className="transaction-wrapper">
                <p className="user-wallet-id text-regular">
                  9548t8459utnfjn49584845
                </p>
                <img
                  src={linkIcon}
                  alt="icon-copy-wallet-number"
                  onClick={() => copyTextToClipboard(walletId)}
                />
              </div>
            </div>

            <div className="refill-account-transaction">
              <p className="transaction-title text-medium">Сума</p>
              <div className="transaction-wrapper">
                <p className="text-semi-bold text-regular">15</p>
                <img
                  src={linkIcon}
                  alt="icon-copy-wallet-number"
                  onClick={() => copyTextToClipboard(amount.toString())}
                />
              </div>
            </div>

            <Button
              text="Поповнити"
              size="large"
              fontSize="title-semi-bold"
              colorVariant="yellow"
              onClick={handleTransaction}
            />
          </div>
        </>
      ) : (
        <ContentMessage
          text="Оплата обробляється"
          description="Це може зайняти кілька хвилин"
          buttonText="Переглянути статус платежу"
          hideButtonIcon
        />
      )}
    </div>
  )
}
