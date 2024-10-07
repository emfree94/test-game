import { Link } from 'react-router-dom'
import { FC } from 'react'
import { ProfileHeader } from '@components/profile/profileHeader/ProfileHeader'
import { UserBalance } from '@components/userBalance/UserBalance'
import settingsIcon from '@assets/icon/settings.svg'
import achievsIcon from '@assets/icon/hotel_class.svg'
import walletIcon from '@assets/icon/account_balance_wallet.svg'
import friendsIcon from '@assets/icon/group.svg'
import analyticsIcon from '@assets/icon/analytics.svg'
import referralsIcon from '@assets/icon/person.svg'
import './profilePage.scss'

interface ProfileMenuItem {
  icon: string
  menuText: string
  url: string
}

const profileMenu: ProfileMenuItem[] = [
  { icon: settingsIcon, menuText: 'Налаштування', url: '/profile/settings' },
  { icon: walletIcon, menuText: 'Баланс', url: '/profile/balance' },
  { icon: achievsIcon, menuText: 'Досягнення', url: '/profile/achievs' },
  { icon: friendsIcon, menuText: 'Друзі', url: '/profile/friends' },
  { icon: analyticsIcon, menuText: 'Статистика', url: '/profile/statistic' },
  { icon: referralsIcon, menuText: 'Реферали', url: '/profile/referrals' },
]

export const ProfilePage: FC = () => {
  return (
    <div className="profile">
      <div className="profile-wrapper">
        <div className="user-data-wrapper">
          <ProfileHeader />
          <UserBalance silverBalance={3000} goldBalance={20000} />
        </div>
        <div className="profile-menu">
          <ul className="menu-list">
            {profileMenu.map(({ url, icon, menuText }) => (
              <li key={url}>
                <Link className="text-semi-bold" to={url}>
                  <img src={icon} alt={referralsIcon} />
                  {menuText}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
