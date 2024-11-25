import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { sortByDate } from '@utils/utils'
import { ProfileHeader } from '@components/profile/profileHeader/ProfileHeader'
import { Title } from '@components/title/Title'
import {
  Transaction,
  TransactionProps,
} from '@components/transaction/Transaction'
import { Coins } from '@components/coin/Coins'
import ContentMessage from '@components/contentMessage/ContentMessage'
import './balancePage.scss'

const transactions: TransactionProps[] = [
  // {
  //   id: 1,
  //   status: 'Completed',
  //   price: 9500,
  //   variant: 'gold',
  //   transactionText: 'Нараховано за рефералів',
  //   date: formatDate('2024-09-18T23:04:00'),
  //   infoReplenishment: 'Поповнення через Pilisio',
  // },
  // {
  //   id: 2,
  //   status: 'Completed',
  //   price: 7800,
  //   variant: 'silver',
  //   transactionText: 'Нараховано за рефералів',
  //   date: formatDate('2024-09-17T22:00:00'),
  //   infoReplenishment: 'Поповнення через Pilisio',
  // },
  // {
  //   id: 3,
  //   status: 'Failed',
  //   price: -1000,
  //   variant: 'gold',
  //   transactionText: 'Виведено кошти',
  //   date: formatDate('2024-09-20T20:30:00'),
  //   infoReplenishment: 'Поповнення через Pilisio',
  // },
  // {
  //   id: 4,
  //   status: 'Failed',
  //   price: -500,
  //   variant: 'silver',
  //   transactionText: 'Поповнення балансу',
  //   date: formatDate('2024-09-16T19:00:00'),
  //   infoReplenishment: 'Поповнення через Pilisio',
  // },
  // {
  //   id: 5,
  //   status: 'Progress',
  //   price: 6200,
  //   variant: 'gold',
  //   transactionText: 'Поповнення балансу',
  //   date: formatDate('2024-09-15T18:45:00'),
  //   infoReplenishment: 'Поповнення через Pilisio',
  // },
  // {
  //   id: 6,
  //   status: 'Progress',
  //   price: 8500,
  //   variant: 'silver',
  //   transactionText: 'Поповнення балансу',
  //   date: formatDate('2024-09-19T17:15:00'),
  //   infoReplenishment: 'Поповнення через Pilisio',
  // },
  // {
  //   id: 7,
  //   status: 'New',
  //   price: -800,
  //   variant: 'gold',
  //   transactionText: 'Виведено кошти',
  //   date: formatDate('2024-09-14T16:50:00'),
  //   infoReplenishment: 'Поповнення через Pilisio',
  // },
  // {
  //   id: 8,
  //   status: 'New',
  //   price: 5000,
  //   variant: 'silver',
  //   transactionText: 'Поповнення балансу',
  //   date: formatDate('2024-09-18T16:20:00'),
  //   infoReplenishment: 'Поповнення через Pilisio',
  // },
  // {
  //   id: 9,
  //   status: 'Completed',
  //   price: 3000,
  //   variant: 'gold',
  //   transactionText: 'Нараховано за рефералів',
  //   date: formatDate('2024-09-13T15:35:00'),
  //   infoReplenishment: 'Поповнення через Pilisio',
  // },
  // {
  //   id: 10,
  //   status: 'Failed',
  //   price: -1500,
  //   variant: 'silver',
  //   transactionText: 'Виведено кошти',
  //   date: formatDate('2024-09-12T14:10:00'),
  //   infoReplenishment: 'Поповнення через Pilisio',
  // },
  // {
  //   id: 11,
  //   status: 'Progress',
  //   price: 10000,
  //   variant: 'gold',
  //   transactionText: 'Поповнення балансу',
  //   date: formatDate('2024-09-11T13:25:00'),
  //   infoReplenishment: 'Поповнення через Pilisio',
  // },
  // {
  //   id: 12,
  //   status: 'New',
  //   price: -900,
  //   variant: 'silver',
  //   transactionText: 'Поповнення балансу',
  //   date: formatDate('2024-09-10T12:40:00'),
  //   infoReplenishment: 'Поповнення через Pilisio',
  // },
  // {
  //   id: 13,
  //   status: 'Completed',
  //   price: 7500,
  //   variant: 'gold',
  //   transactionText: 'Нараховано за рефералів',
  //   date: formatDate('2024-09-19T12:05:00'),
  //   infoReplenishment: 'Поповнення через Pilisio',
  // },
  // {
  //   id: 14,
  //   status: 'Failed',
  //   price: -1200,
  //   variant: 'silver',
  //   transactionText: 'Виведено кошти',
  //   date: formatDate('2024-09-08T11:45:00'),
  //   infoReplenishment: 'Поповнення через Pilisio',
  // },
  // {
  //   id: 15,
  //   status: 'New',
  //   price: -1100,
  //   variant: 'gold',
  //   transactionText: 'Поповнення балансу',
  //   date: formatDate('2024-09-09T10:30:00'),
  //   infoReplenishment: 'Поповнення через Pilisio',
  // },
]

export const BalancePage: FC = () => {
  const sortedTransactions = sortByDate(transactions)
  const navigate = useNavigate()

  return (
    <div className="balance-page">
      <div className="balance-page-wrapper">
        <ProfileHeader />
        <div className="coins">
          <Coins amount={220} handlePass={() => navigate('/transfer-costs')} />
          <Coins
            amount={100000}
            variant="silver"
            handlePass={() => navigate('/exchange-coin')}
          />
        </div>
        <Title text="Транзакції" />
      </div>

      {transactions.length !== 0 ? (
        sortedTransactions.map(
          ({
            status,
            price,
            variant,
            transactionText,
            id,
            date,
            infoReplenishment,
          }) => (
            <Transaction
              key={id}
              id={id}
              status={status}
              price={price}
              variant={variant}
              transactionText={transactionText}
              date={date}
              infoReplenishment={infoReplenishment}
            />
          )
        )
      ) : (
        <ContentMessage
          variant="fail"
          text="У тебе ще немає транзакцій"
          buttonText="Поповнити рахунок"
        />
      )}
    </div>
  )
}
