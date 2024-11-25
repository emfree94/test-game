import { NavLink } from 'react-router-dom'
import {
  ActiveGamesIcon,
  CreateGameIcon,
  HomeIcon,
  ProfileIcon,
  TopPlayersIcon,
} from 'icons'
import './navigation.scss'

const navigationList = [
  { url: '/', Icon: HomeIcon },
  { url: '/active-games', Icon: ActiveGamesIcon },
  { url: '/create-game', Icon: CreateGameIcon },
  { url: '/rating-players', Icon: TopPlayersIcon },
  { url: '/profile', Icon: ProfileIcon },
]

export const Navigation = () => {
  return (
    <div className="navigation-wrapper">
      <div className="navigation">
        <nav>
          <ul className="navigation-list">
            {navigationList.map(({ url, Icon }, index) => (
              <li key={index + url}>
                <NavLink to={url}>
                  <Icon />
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
