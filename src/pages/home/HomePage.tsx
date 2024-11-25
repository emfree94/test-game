import { useNavigate } from 'react-router-dom'
import { sortByDate } from '@utils/utils'
import { ProfileHeader } from '@components/profile/profileHeader/ProfileHeader'
import { UserBalance } from '@components/userBalance/UserBalance'
import { Title } from '@components/title/Title'
import { ButtonArrow } from '@components/buttons/buttonArrow/ButtonArrow'
import { Referral } from '@components/referral/Referral'
import { Button } from '@components/buttons/button/Button'
import { ReferralProps } from '@pages/referrals/ReferralsPage'
import settingsIcon from '@assets/icon/settings2.svg'
import defaultLogo from '@assets/img/defaultUserLogo.png'
import coinIcon from '@assets/icon/golden-coins.svg'
import playIcon from '@assets/icon/play_arrow.svg'
import './homePage.scss'

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

const topPlayer = [
  { name: 'Nickname 2', coinValue: 220, place: 1, id: 2 },
  { name: 'Nickname 1', coinValue: 220, place: 2, id: 1 },
  { name: 'Nickname 3', coinValue: 220, place: 3, id: 3 },
]

export const HomePage = () => {
  const navigate = useNavigate()

  const sortedGames = sortByDate(games).slice(0, 5)

  return (
    <div className="home-page">
      <ProfileHeader />

      <div className="home-page__balance_wrapper">
        <UserBalance silverBalance={20000} goldBalance={220} />

        <div className="home-page__balance_wrapper--settings">
          <img
            onClick={() => navigate('profile/settings')}
            src={settingsIcon}
            alt="settings-icon"
          />
        </div>
      </div>

      <div className="home-page__active_games">
        <div className="home-page__active_games--head">
          <Title text="Активні ігри" marginBottom="0" />
          <ButtonArrow onClick={() => navigate('active-games')} />
        </div>

        <div className="home-page__active_games--body">
          {sortedGames.length > 0 &&
            sortedGames?.map(
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
            )}
        </div>
      </div>

      <div className="home-page__top_day">
        <div className="home-page__top_day--head">
          <Title text="Топ дня" marginBottom="0" />
          <ButtonArrow onClick={() => navigate('rating-players')} />
        </div>

        <div className="home-page__top_day--body">
          {topPlayer?.map(({ id, coinValue, name, place }) => (
            <div
              key={id}
              className={`home-page__top_day--body__player ${
                place === 2 ? 'second-place' : place === 3 ? 'third-place' : ''
              }`}
            >
              <div className="home-page__top_day--body__player--avatar">
                <img src={defaultLogo} alt="user-avatar" />
              </div>
              <p
                className={`${
                  place === 1
                    ? 'text-medium'
                    : place === 2
                    ? 'text-regular'
                    : 'text-tiny-regular'
                }`}
              >
                {name}
              </p>
              <div className="home-page__top_day--body__player--balance">
                <p className="text-tiny-lite">{coinValue}</p>
                <img src={coinIcon} alt="coin-icon" />
              </div>
            </div>
          ))}
        </div>

        <Button
          size="medium"
          text="Перейти в топ"
          colorVariant="yellow"
          buttonIcon={playIcon}
          fontSize="title-semi-bold"
        />
      </div>
    </div>
  )
}
