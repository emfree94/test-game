import { FC } from 'react'
import { PlayerProps } from '@pages/ratingPlayers/RatingPlayersPage'
import defaultAvatarIcon from '@assets/icon/avatar2.svg'
import silverCoinIcon from '@assets/icon/silver-coins.svg'
import goldCoinIcon from '@assets/icon/golden-coins.svg'
import firstPlaceIcon from '@assets/icon/players_place_1.svg'
import secondPlaceIcon from '@assets/icon/players_place_2.svg'
import thirdPlaceIcon from '@assets/icon/players_place_3.svg'
import './player.scss'

export const Player: FC<PlayerProps> = ({
  name,
  coinValue,
  flagUrl,
  isSilver,
  rank,
  topThreeRanks,
}) => {
  const getRank = (rank: number) => {
    const ranks = topThreeRanks ?? [] 
    if (ranks.length === 0) return rank

    const highestRank = Math.max(...(ranks.length ? ranks : [rank])) 
    const secondRank = Math.max(...ranks.filter((r) => r < highestRank))
    const thirdRank = Math.min(...ranks)
    if (rank === highestRank)
      return <img src={firstPlaceIcon} alt="First Place" />
    if (rank === secondRank)
      return <img src={secondPlaceIcon} alt="Second Place" />
    if (rank === thirdRank)
      return <img src={thirdPlaceIcon} alt="Third Place" />

    return rank
  }

  return (
    <div className={`player ${!isSilver && 'gold'}`}>
      <div className="player--block">
        <div className="player--block__avatar">
          <img
            className="player--block__avatar--avatar"
            src={defaultAvatarIcon}
            alt="user-avatar"
          />
          <img
            className="player--block__avatar--flag"
            src={flagUrl}
            alt="flag-icon"
          />
        </div>
        <div className="player--block__description">
          <p className="text-bold">{name}</p>
          <span className="coin-value text-tiny-lite">
            {coinValue}
            <img
              src={isSilver ? silverCoinIcon : goldCoinIcon}
              alt="coin-icon"
            />
          </span>
        </div>
      </div>
      <p className="player--rating text-tiny-regular"> {getRank(rank)}</p>
    </div>
  )
}
