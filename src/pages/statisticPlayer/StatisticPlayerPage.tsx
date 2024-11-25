import { ProfileHeader } from '@components/profile/profileHeader/ProfileHeader'
import { UserBalance } from '@components/userBalance/UserBalance'
// import { ContentMessage } from '@components/contentMessage/ContentMessage'
import goldenCoin from '@assets/icon/golden_coins3.svg'
import silverCoin from '@assets/icon/silver_coins2.svg'
import groupIcon from '@assets/icon/group.svg'
import './statisticPlayerPage.scss'

interface GameInfo {
  id: number
  title: string
  coin?: 'silver' | 'golden'
  isIcon?: boolean
  amount: string | number
}

const gameInfo: GameInfo[] = [
  {
    id: 1,
    amount: '1 000 000',
    title: 'Зіграні ігри',
  },
  {
    id: 2,
    amount: '20 000',
    title: 'Зароблені SC',
    coin: 'silver',
  },
  {
    id: 3,
    amount: '20 000',
    title: 'Зароблені GD',
    coin: 'golden',
  },
  {
    id: 4,
    amount: '1 000',
    title: 'Зароблені USDT',
  },
  {
    id: 5,
    amount: '15',
    title: 'Реферали',
    isIcon: true,
  },
  {
    id: 6,
    amount: '150',
    title: 'Зароблено за рефералів',
    isIcon: true,
    coin: 'golden',
  },
]

export const StatisticPlayerPage = () => {
  return (
    <div className="statistic-player">
      <div className="statistic-player-head">
        <ProfileHeader />
        <UserBalance />
      </div>

      <div className="statistic-info">
        <ul className="statistic-info-list">
          {gameInfo?.map(({ isIcon, coin, title, amount, id }) => (
            <div className="statistic-info-list-wrapper" key={id}>
              <li className="list-item">
                <span>
                  {isIcon && (
                    <img
                      className="icon-group"
                      src={groupIcon}
                      alt="info-icon"
                    />
                  )}
                  <p className="list-title text-regular">{title}</p>
                </span>

                <span>
                  {coin && (
                    <img
                      className="coin-icon"
                      src={coin === 'golden' ? goldenCoin : silverCoin}
                      alt="info-icon"
                    />
                  )}
                  <p className="text-regular">{amount}</p>
                </span>
              </li>
            </div>
          ))}
        </ul>
      </div>

      {/* {gameInfo.length > 0 ? (
        <ContentMessage
          description="Але їх завжди можна покращити"
          text="Маєш гарні результати"
          buttonText="Грати"
        />
      ) : (
        <ContentMessage
          text="У тебе ще не має статистики"
          variant="fail"
          buttonText="Грати"
        />
      )} */}
    </div>
  )
}
