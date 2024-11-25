import { useState } from 'react'
import { Button } from '@components/buttons/button/Button'
import { Player } from '@components/player/Player'
import './ratingPlayersPage.scss'

export interface PlayerProps {
  name: string
  coinValue: number
  isSilver: boolean
  rank: number
  flagUrl: string
  id?: number
  timePeriod?: 'day' | 'week' | 'season'
  topThreeRanks?: number[]
}

interface ButtonsData {
  text: string
  variantRank: string
}

const players: PlayerProps[] = [
  {
    id: 1,
    name: 'Player 1',
    coinValue: 1000,
    isSilver: true,
    rank: 120,
    flagUrl: 'https://flagcdn.com/w320/ua.png',
    timePeriod: 'day',
  },
  {
    id: 2,
    name: 'Player 2',
    coinValue: 1000,
    isSilver: false,
    rank: 950,
    flagUrl: 'https://flagcdn.com/w320/us.png',
    timePeriod: 'day',
  },
  {
    id: 3,
    name: 'Player 3',
    coinValue: 1000,
    isSilver: true,
    rank: 450,
    flagUrl: 'https://flagcdn.com/w320/fr.png',
    timePeriod: 'day',
  },
  {
    id: 4,
    name: 'Player 4',
    coinValue: 1000,
    isSilver: false,
    rank: 1340,
    flagUrl: 'https://flagcdn.com/w320/de.png',
    timePeriod: 'day',
  },
  {
    id: 5,
    name: 'Player 5',
    coinValue: 1000,
    isSilver: true,
    rank: 700,
    flagUrl: 'https://flagcdn.com/w320/pl.png',
    timePeriod: 'day',
  },
  {
    id: 6,
    name: 'Player 6',
    coinValue: 1000,
    isSilver: false,
    rank: 1500,
    flagUrl: 'https://flagcdn.com/w320/it.png',
    timePeriod: 'day',
  },
  {
    id: 7,
    name: 'Player 7',
    coinValue: 1000,
    isSilver: true,
    rank: 350,
    flagUrl: 'https://flagcdn.com/w320/es.png',
    timePeriod: 'day',
  },
  {
    id: 8,
    name: 'Player 8',
    coinValue: 1000,
    isSilver: false,
    rank: 1000,
    flagUrl: 'https://flagcdn.com/w320/gb.png',
    timePeriod: 'day',
  },
  {
    id: 9,
    name: 'Player 9',
    coinValue: 1000,
    isSilver: true,
    rank: 150,
    flagUrl: 'https://flagcdn.com/w320/ca.png',
    timePeriod: 'day',
  },
  {
    id: 10,
    name: 'Player 10',
    coinValue: 1000,
    isSilver: false,
    rank: 1300,
    flagUrl: 'https://flagcdn.com/w320/au.png',
    timePeriod: 'day',
  },
  {
    id: 11,
    name: 'Player 11',
    coinValue: 1000,
    isSilver: true,
    rank: 250,
    flagUrl: 'https://flagcdn.com/w320/jp.png',
    timePeriod: 'week',
  },
  {
    id: 12,
    name: 'Player 12',
    coinValue: 1000,
    isSilver: false,
    rank: 900,
    flagUrl: 'https://flagcdn.com/w320/br.png',
    timePeriod: 'week',
  },
  {
    id: 13,
    name: 'Player 13',
    coinValue: 1000,
    isSilver: true,
    rank: 800,
    flagUrl: 'https://flagcdn.com/w320/mx.png',
    timePeriod: 'week',
  },
  {
    id: 14,
    name: 'Player 14',
    coinValue: 1000,
    isSilver: false,
    rank: 400,
    flagUrl: 'https://flagcdn.com/w320/kr.png',
    timePeriod: 'week',
  },
  {
    id: 15,
    name: 'Player 15',
    coinValue: 1000,
    isSilver: true,
    rank: 350,
    flagUrl: 'https://flagcdn.com/w320/ar.png',
    timePeriod: 'week',
  },
  {
    id: 16,
    name: 'Player 16',
    coinValue: 1000,
    isSilver: false,
    rank: 850,
    flagUrl: 'https://flagcdn.com/w320/ru.png',
    timePeriod: 'week',
  },
  {
    id: 17,
    name: 'Player 17',
    coinValue: 1000,
    isSilver: true,
    rank: 950,
    flagUrl: 'https://flagcdn.com/w320/in.png',
    timePeriod: 'season',
  },
  {
    id: 18,
    name: 'Player 18',
    coinValue: 1000,
    isSilver: false,
    rank: 1100,
    flagUrl: 'https://flagcdn.com/w320/za.png',
    timePeriod: 'season',
  },
  {
    id: 19,
    name: 'Player 19',
    coinValue: 1000,
    isSilver: true,
    rank: 500,
    flagUrl: 'https://flagcdn.com/w320/nz.png',
    timePeriod: 'season',
  },
  {
    id: 20,
    name: 'Player 20',
    coinValue: 1000,
    isSilver: false,
    rank: 1350,
    flagUrl: 'https://flagcdn.com/w320/se.png',
    timePeriod: 'season',
  },
]

const buttonsData: ButtonsData[] = [
  {
    text: 'Топ дня',
    variantRank: 'day',
  },
  {
    text: 'Топ тижня',
    variantRank: 'week',
  },
  {
    text: 'Топ сезону',
    variantRank: 'season',
  },
]

export const RatingPlayersPage = () => {
  const [activeComponent, setActiveComponent] = useState('silver')
  const [activeTimeFilter, setActiveTimeFilter] = useState('day')

  const filteredPlayers = players
    .filter(
      (player) =>
        (activeComponent === 'silver' ? player.isSilver : !player.isSilver) &&
        player.timePeriod === activeTimeFilter
    )
    .sort((a, b) => b.rank - a.rank)

  const topThreeRanks = filteredPlayers.slice(0, 3).map((player) => player.rank)

  return (
    <div className="top-players">
      <div className="top-players--filter-coins">
        <Button
          text="Silver"
          size="medium"
          className={activeComponent === 'silver' ? 'font-weight-medium' : ''}
          colorVariant={activeComponent === 'silver' ? 'yellow' : 'light'}
          onClick={() => setActiveComponent('silver')}
        />
        <Button
          text="Golden"
          size="medium"
          className={activeComponent === 'gold' ? 'font-weight-medium' : ''}
          colorVariant={activeComponent === 'gold' ? 'yellow' : 'light'}
          onClick={() => setActiveComponent('gold')}
        />
      </div>

      <div className="top-players--filter-buttons">
        {buttonsData.map(({ text, variantRank }, index) => (
          <Button
            key={index}
            text={text}
            fontSize={
              activeTimeFilter === variantRank
                ? 'text-tiny-medium'
                : 'text-tiny-regular'
            }
            size="small"
            colorVariant={activeTimeFilter === variantRank ? 'yellow' : 'light'}
            onClick={() => setActiveTimeFilter(variantRank)}
          />
        ))}
      </div>

      <div className="top-players--wrapper">
        {filteredPlayers.map(
          ({ name, coinValue, rank, isSilver, flagUrl, id }) => (
            <Player
              key={id}
              name={name}
              coinValue={coinValue}
              isSilver={isSilver}
              rank={rank}
              flagUrl={flagUrl}
              topThreeRanks={topThreeRanks}
            />
          )
        )}
      </div>
    </div>
  )
}
