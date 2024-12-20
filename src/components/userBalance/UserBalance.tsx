import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { formatAmount } from '@utils/utils'
import addCircleIcon from '@assets/icon/add_circle.svg'
import goldenCoin from '@assets/icon/golden_coins2.svg'
import silverCoin from '@assets/icon/silver_coins.svg'
import { useSelector } from 'react-redux'
import { RootState } from '@store/store'
import './userBalance.scss'

export const UserBalance: FC = ({}) => {
  const navigate = useNavigate()
  const balanceData = useSelector((state: RootState) => state.balances.balances)

  const silverCoinBalance = balanceData?.['silver-coins']?.balance || '0'
  const goldCoinBalance = balanceData?.['golden-coins']?.balance || '0'

  return (
    <>
      <div className="user-balance">
        <div className="coins" onClick={() => navigate('/transfer-costs')}>
          <img src={goldenCoin} alt="golden-coin" />
          <p className="coin-balance text-semi-bold">
            {formatAmount(goldCoinBalance)}
          </p>
          <img className="add-coin" src={addCircleIcon} alt="golden-coin" />
        </div>

        <div className="coins" onClick={() => navigate('/exchange-coin')}>
          <img src={silverCoin} alt="golden-coin" />
          <p className="coin-balance text-semi-bold">
            {formatAmount(silverCoinBalance)}
          </p>
          <img className="add-coin" src={addCircleIcon} alt="golden-coin" />
        </div>
      </div>
    </>
  )
}
