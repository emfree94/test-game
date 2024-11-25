import { Title } from '@components/title/Title'
import { ReferralLink } from '@components/referralLink/ReferralLink'
import { Referral } from '@components/referral/Referral'
import ContentMessage from '@components/contentMessage/ContentMessage'
import './referralsPage.scss'

export interface ReferralProps {
  userLogoUrl: string
  nickname: string
  silverCoin?: number
  goldCoin?: number
  userCountryFlag: string
  rating?: string | number
  isGames?: boolean
  type?: 'silver' | 'gold'
  coinValue?: number
  date?: string
}

const referrals: ReferralProps[] = [
  {
    userLogoUrl: '',
    nickname: 'Nickname1',
    silverCoin: 1000,
    goldCoin: 1000,
    userCountryFlag: 'https://flagcdn.com/us.svg',
  },
  {
    userLogoUrl: '',
    nickname: 'Nickname2',
    goldCoin: 1000,
    silverCoin: 0,
    userCountryFlag: 'https://flagcdn.com/ca.svg',
  },
  {
    userLogoUrl: '',
    nickname: 'Nickname3',
    goldCoin: 0,
    silverCoin: 1000,
    userCountryFlag: 'https://flagcdn.com/gb.svg',
  },
  {
    userLogoUrl: '',
    nickname: 'Nickname4',
    silverCoin: 1000,
    goldCoin: 1000,
    userCountryFlag: 'https://flagcdn.com/fr.svg',
  },
  {
    userLogoUrl: '',
    nickname: 'Nickname5',
    silverCoin: 1000,
    userCountryFlag: 'https://flagcdn.com/de.svg',
  },
  {
    userLogoUrl: '',
    nickname: 'Nickname6',
    goldCoin: 1000,
    silverCoin: 0,
    userCountryFlag: 'https://flagcdn.com/jp.svg',
  },
  {
    userLogoUrl: '',
    nickname: 'Nickname7',
    silverCoin: 1000,
    goldCoin: 1000,
    userCountryFlag: 'https://flagcdn.com/in.svg',
  },
  {
    userLogoUrl: '',
    nickname: 'Nickname8',
    silverCoin: 1000,
    goldCoin: 1000,
    userCountryFlag: 'https://flagcdn.com/au.svg',
  },
  {
    userLogoUrl: '',
    nickname: 'Nickname9',
    silverCoin: 1000,
    userCountryFlag: 'https://flagcdn.com/ru.svg',
  },
  {
    userLogoUrl: '',
    nickname: 'Nickname10',
    goldCoin: 1000,
    userCountryFlag: 'https://flagcdn.com/cn.svg',
  },
  {
    userLogoUrl: '',
    nickname: 'Nickname11',
    silverCoin: 1000,
    goldCoin: 1000,
    userCountryFlag: 'https://flagcdn.com/it.svg',
  },
  {
    userLogoUrl: '',
    nickname: 'Nickname12',
    silverCoin: 1000,
    goldCoin: 1000,
    userCountryFlag: 'https://flagcdn.com/es.svg',
  },
  {
    userLogoUrl: '',
    nickname: 'Nickname13',
    goldCoin: 1000,
    userCountryFlag: 'https://flagcdn.com/kr.svg',
  },
  {
    userLogoUrl: '',
    nickname: 'Nickname14',
    silverCoin: 1000,
    userCountryFlag: 'https://flagcdn.com/br.svg',
  },
  {
    userLogoUrl: '',
    nickname: 'Nickname15',
    silverCoin: 1000,
    goldCoin: 1000,
    userCountryFlag: 'https://flagcdn.com/za.svg',
  },
  {
    userLogoUrl: '',
    nickname: 'Nickname16',
    goldCoin: 1000,
    userCountryFlag: 'https://flagcdn.com/nl.svg',
  },
  {
    userLogoUrl: '',
    nickname: 'Nickname17',
    silverCoin: 1000,
    userCountryFlag: 'https://flagcdn.com/se.svg',
  },
  {
    userLogoUrl: '',
    nickname: 'Nickname18',
    goldCoin: 1000,
    userCountryFlag: 'https://flagcdn.com/mx.svg',
  },
  {
    userLogoUrl: '',
    nickname: 'Nickname19',
    goldCoin: 1000,
    userCountryFlag: 'https://flagcdn.com/ar.svg',
  },
  {
    userLogoUrl: '',
    nickname: 'Nickname20',
    silverCoin: 1000,
    goldCoin: 1000,
    userCountryFlag: 'https://flagcdn.com/ua.svg',
  },
]

export const ReferralsPage = () => {
  return (
    <div className="referrals">
      <div className="referrals-wrapper">
        {referrals?.length > 0 && (
          <div className="referrals-link">
            <Title text="Запрошення гравців" />
            <ReferralLink />
          </div>
        )}

        <div className="referrals-lists">
          <Title text="Реферали" />
          {referrals.length === 0 ? (
            <ContentMessage
              text="У тебе ще немає рефералів"
              description="Поділись запрошенням зі своїми друзями"
            >
              <ReferralLink />
            </ContentMessage>
          ) : (
            referrals?.map(
              (
                {
                  userLogoUrl,
                  userCountryFlag,
                  nickname,
                  silverCoin,
                  goldCoin,
                },
                index
              ) => (
                <Referral
                  key={index}
                  userLogoUrl={userLogoUrl}
                  userCountryFlag={userCountryFlag}
                  nickname={nickname}
                  silverCoin={silverCoin}
                  goldCoin={goldCoin}
                />
              )
            )
          )}
        </div>
      </div>
    </div>
  )
}
