import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { formatAmount } from '@utils/utils'
import addCircleIcon from '@assets/icon/add_circle.svg'
import goldenCoin from '@assets/icon/golden_coins2.svg'
import silverCoin from '@assets/icon/silver_coins.svg'
import './userBalance.scss'
import { useGetAccountBalanceQuery } from '@features/api/putSlice'

interface UserBalanceProps {
  silverBalance: string | number
  goldBalance: string | number
}

export const UserBalance: FC<UserBalanceProps> = ({
  silverBalance,
  goldBalance,
}) => {
  const navigate = useNavigate()
  const { data, error, isLoading } = useGetAccountBalanceQuery({});

  const silverCoinBalance = data?.balances?.['silver-coins']?.balance;

  return (
    <div className="user-balance">
      <div>DATA - {JSON.stringify(data)}</div>
      <div>SILVER - {silverCoinBalance}</div>
      
      <div className="coins" onClick={() => navigate('/transfer-costs')}>
        <img src={goldenCoin} alt="golden-coin" />
        <p className="coin-balance text-semi-bold">
          {formatAmount(goldBalance)}
        </p>
        <img className="add-coin" src={addCircleIcon} alt="golden-coin" />
      </div>

      <div className="coins" onClick={() => navigate('/exchange-coin')}>
        <img src={silverCoin} alt="golden-coin" />
        <p className="coin-balance text-semi-bold">
          {formatAmount(silverBalance)}
        </p>
        <img className="add-coin" src={addCircleIcon} alt="golden-coin" />
      </div>
    </div>
  )
}
