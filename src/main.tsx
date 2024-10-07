import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from 'App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ChangeNicknamePage } from '@pages/changeNickname/ChangeNicknamePage'
import { ChangePasswordPage } from '@pages/changePassword/ChangePasswordPage'
import { BalancePage } from '@pages/balance/BalancePage'
import { FriendsPage } from '@pages/friends/FriendsPage'
import { TransactionDetail } from '@components/transactionDetail/TransactionDetail'
import { FriendsRequestsPage } from '@pages/friendsRequests/FriendsRequestsPage'
import { ProfileSettingsPage } from '@pages/profileSettings/ProfileSettingsPage'
import { ProfilePage } from '@pages/profile/ProfilePage'
import { FriendManagementPage } from '@pages/friendManagement/FriendManagementPage'
import './index.scss'
import { StatisticPlayerPage } from '@pages/statisticPlayer/StatisticPlayerPage'
import { ReferralsPage } from '@pages/referrals/ReferralsPage'
import { DepositPage } from '@pages/deposit/DepositPage'
import { ActiveGamesPage } from '@pages/activeGames/ActiveGamesPage'
import { GamesGoldenFilterPage } from '@pages/gamesGoldenFilter/GamesGoldenFilterPage'
import { GamesSilverFilterPage } from '@pages/gamesSilverFilter/GamesSilverFilterPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <div>Hello home</div> },
      { path: 'active-gamers', element: <div>Hello top gamers</div> },
      { path: 'create-game', element: <div>Hello new games</div> },
      { path: 'rating-players', element: <div>Hello rating players</div> },
      { path: 'profile', element: <ProfilePage /> },
      { path: 'profile/settings', element: <ProfileSettingsPage /> },
      { path: 'profile/settings/nickname', element: <ChangeNicknamePage /> },
      { path: 'profile/settings/password', element: <ChangePasswordPage /> },
      { path: 'profile/balance', element: <BalancePage /> },
      { path: 'profile/friends', element: <FriendsPage /> },
      { path: 'profile/friends/requests', element: <FriendsRequestsPage /> },
      { path: 'profile/friends_requests', element: <FriendManagementPage /> },
      { path: 'profile/statistic', element: <StatisticPlayerPage /> },
      { path: 'profile/referrals', element: <ReferralsPage /> },
      { path: 'profile/deposit', element: <DepositPage /> },
      { path: 'profile/active-games', element: <ActiveGamesPage /> },
      { path: 'profile/active-games/filter-gold', element: <GamesGoldenFilterPage /> },
      { path: 'profile/active-games/filter-silver', element: <GamesSilverFilterPage /> },
      {
        path: 'profile/balance/transaction/:id',
        element: <TransactionDetail />,
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
