import { Button } from '@components/buttons/button/Button'
import { Referral } from '@components/referral/Referral'
import { ReferralProps } from '@pages/referrals/ReferralsPage'
import { useState } from 'react'
import './activeGamesPage.scss'
import { sortByDate } from '@utils/utils'
import { useNavigate } from 'react-router-dom'
import filterIcon from '@assets/icon/tune.svg'
import { ContentMessage } from '@components/ContentMessage/ContentMessage'

const games: ReferralProps[] = [
  {
    userLogoUrl: '',
    nickname: 'Nickname1',
    type: 'silver',
    coinValue: 550,
    userCountryFlag: 'https://flagcdn.com/us.svg',
    rating: 5,
    date: '2024-09-20',
  },
  {
    userLogoUrl: '',
    nickname: 'Nickname2',
    type: 'gold',
    coinValue: 1001,
    userCountryFlag: 'https://flagcdn.com/ca.svg',
    rating: 5,
    date: '2024-09-18',
  },
  {
    userLogoUrl: '',
    nickname: 'Nickname3',
    type: 'silver',
    coinValue: 1000,
    userCountryFlag: 'https://flagcdn.com/gb.svg',
    rating: 5,
    date: '2024-09-21',
  },
  {
    userLogoUrl: '',
    nickname: 'Nickname4',
    type: 'gold',
    coinValue: 1000,
    userCountryFlag: 'https://flagcdn.com/fr.svg',
    date: '2024-09-19',
  },
  {
    userLogoUrl: '',
    nickname: 'Nickname5',
    type: 'silver',
    coinValue: 1000,
    userCountryFlag: 'https://flagcdn.com/de.svg',
    rating: 5,
    date: '2024-09-17',
  },
  {
    userLogoUrl: '',
    nickname: 'Nickname6',
    type: 'gold',
    coinValue: 1000,
    rating: 5,
    userCountryFlag: 'https://flagcdn.com/jp.svg',
    date: '2024-09-16',
  },
  {
    userLogoUrl: '',
    nickname: 'Nickname7',
    type: 'silver',
    coinValue: 1000,
    userCountryFlag: 'https://flagcdn.com/in.svg',
    rating: 4,
    date: '2024-09-15',
  },
  {
    userLogoUrl: '',
    nickname: 'Nickname8',
    type: 'gold',
    coinValue: 1000,
    userCountryFlag: 'https://flagcdn.com/au.svg',
    rating: 4,
    date: '2024-09-14',
  },
  {
    userLogoUrl: '',
    nickname: 'Nickname9',
    type: 'silver',
    coinValue: 3000,
    userCountryFlag: 'https://flagcdn.com/ru.svg',
    rating: 4,
    date: '2024-09-13',
  },
  {
    userLogoUrl: '',
    nickname: 'Nickname10',
    type: 'gold',
    coinValue: 1000,
    userCountryFlag: 'https://flagcdn.com/cn.svg',
    rating: 3,
    date: '2024-09-12',
  },
  {
    userLogoUrl: '',
    nickname: 'Nickname11',
    type: 'silver',
    coinValue: 1000,
    userCountryFlag: 'https://flagcdn.com/it.svg',
    rating: 3,
    date: '2024-09-11',
  },
  {
    userLogoUrl: '',
    nickname: 'Nickname12',
    type: 'gold',
    coinValue: 1000,
    userCountryFlag: 'https://flagcdn.com/es.svg',
    rating: 3,
    date: '2024-09-10',
  },
  {
    userLogoUrl: '',
    nickname: 'Nickname13',
    type: 'silver',
    coinValue: 1000,
    userCountryFlag: 'https://flagcdn.com/kr.svg',
    rating: 2,
    date: '2024-09-09',
  },
  {
    userLogoUrl: '',
    nickname: 'Nickname14',
    type: 'gold',
    coinValue: 1000,
    userCountryFlag: 'https://flagcdn.com/br.svg',
    rating: 2,
    date: '2024-09-08',
  },
  {
    userLogoUrl: '',
    nickname: 'Nickname15',
    type: 'silver',
    coinValue: 1000,
    userCountryFlag: 'https://flagcdn.com/za.svg',
    rating: 1,
    date: '2024-09-07',
  },
  {
    userLogoUrl: '',
    nickname: 'Nickname16',
    type: 'silver',
    coinValue: 1000,
    userCountryFlag: 'https://flagcdn.com/nl.svg',
    rating: 2,
    date: '2024-09-06',
  },
  {
    userLogoUrl: '',
    nickname: 'Nickname17',
    type: 'gold',
    coinValue: 1000,
    userCountryFlag: 'https://flagcdn.com/se.svg',
    rating: 1,
    date: '2024-09-05',
  },
  {
    userLogoUrl: '',
    nickname: 'Nickname18',
    type: 'silver',
    coinValue: 1000,
    userCountryFlag: 'https://flagcdn.com/mx.svg',
    rating: 2,
    date: '2024-09-04',
  },
  {
    userLogoUrl: '',
    nickname: 'Nickname19',
    type: 'silver',
    coinValue: 1000,
    userCountryFlag: 'https://flagcdn.com/ar.svg',
    rating: 1,
    date: '2024-09-03',
  },
  {
    userLogoUrl: '',
    nickname: 'Nickname20',
    type: 'silver',
    coinValue: 1000,
    userCountryFlag: 'https://flagcdn.com/ua.svg',
    rating: 3,
    date: '2024-09-02',
  },
]

export const ActiveGamesPage = () => {
  const [activeComponent, setActiveComponent] = useState('')

  const navigate = useNavigate()

  const sortedGames = sortByDate(games)

  const filteredGames = sortedGames.filter((game) => {
    if (activeComponent === 'gold') {
      return game.type === 'gold' && game.coinValue > 0
    } else if (activeComponent === 'silver') {
      return game.type === 'silver' && game.coinValue > 0
    }
    return true
  })

  const handleNavigate = () => {
    activeComponent &&
      navigate(`/profile/active-games/filter-${activeComponent}`)
  }

  return (
    <div className="active-games">
      <div className="active-games-buttons">
        <div className="buttons-wrapper">
          <Button
            text="Silver"
            size="medium"
            colorVariant={activeComponent === 'silver' ? 'yellow' : 'light'}
            onClick={() => setActiveComponent('silver')}
          />
          <Button
            text="Golden"
            size="medium"
            colorVariant={activeComponent === 'gold' ? 'yellow' : 'light'}
            onClick={() => setActiveComponent('gold')}
          />
        </div>
        <Button
          text="Фільтр"
          size="small"
          colorVariant="yellow"
          buttonIcon={filterIcon}
          onClick={handleNavigate}
        />
      </div>

      <div className="active-games-block">
        {filteredGames.length > 0 ? (
          filteredGames?.map(
            (
              {
                rating,
                userCountryFlag,
                nickname,
                userLogoUrl,
                type,
                coinValue,
              },
              index
            ) => (
              <Referral
                key={index}
                userLogoUrl={userLogoUrl}
                nickname={nickname}
                userCountryFlag={userCountryFlag}
                rating={rating}
                type={type}
                coinValue={coinValue}
                isGames
              />
            )
          )
        ) : (
          <ContentMessage
            text="Нажаль зараз немає ігор"
            description="Почекай або зміни фільтр"
            variant="fail"
            hideButton
          />
        )}
      </div>
    </div>
  )
}
