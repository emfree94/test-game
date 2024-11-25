import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { formatAmount } from '@utils/utils'
import addCircleIcon from '@assets/icon/add_circle.svg'
import goldenCoin from '@assets/icon/golden_coins2.svg'
import silverCoin from '@assets/icon/silver_coins.svg'
import { useGetAccountBalanceQuery } from '@features/api/putSlice'
import { setBalances } from '@features/response/balanceSlice'
import { useDispatch } from 'react-redux'
import './userBalance.scss'

interface UserBalanceProps {
  silverBalance: string | number
  goldBalance: string | number
}

export const UserBalance: FC<UserBalanceProps> = ({
  silverBalance,
  goldBalance,
}) => {
  const navigate = useNavigate()
  const { data, error, isLoading } = useGetAccountBalanceQuery({})
  const dispatch = useDispatch()
  

  // Dispatch data to the store once fetched
  useEffect(() => {
    if (data) {
      dispatch(setBalances(data?.data.balances));
    }
  }, [data, dispatch]);

  const silverCoinBalance = data?.data?.balances?.['silver-coins']?.balance

  return (
    <>
      <div className="user-balance">
        <div className="coins" onClick={() => navigate('/transfer-costs')}>
          <img src={goldenCoin} alt="golden-coin" />
          <p className="coin-balance text-semi-bold">
            {formatAmount(silverCoinBalance)}
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
    </>
  )
}
