import { Link, NavLink } from 'react-router-dom'
import homeIcon from '@assets/icon/home.svg'
import activeGamesIcon from '@assets/icon/navbar_elements.svg'
import createGameIcon from '@assets/icon/navbar_elements2.svg'
import topPlayersIcon from '@assets/icon/navbar_elements3.svg'
import profileIcon from '@assets/icon/Navbar_elements4.svg'
import './navigation.scss'
import {
  ActiveGamesIcon,
  CreateGameIcon,
  HomeIcon,
  ProfileIcon,
  TopPlayersIcon,
} from 'icons'

export const Navigation = () => {
  return (
    <div className="navigation-wrapper">
      <div className="navigation">
        <nav>
          <ul className="navigation-list">
            <li>
              <NavLink to="/">
                <HomeIcon />
              </NavLink>
            </li>
            <li>
              <NavLink to="/active-gamers">
                <ActiveGamesIcon />
              </NavLink>
            </li>
            <li>
              <NavLink to="/create-game">
                <CreateGameIcon />
              </NavLink>
            </li>
            <li>
              <NavLink to="/rating-players">
                <TopPlayersIcon />
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile">
                <ProfileIcon />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
