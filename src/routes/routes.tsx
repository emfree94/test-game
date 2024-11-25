import { createBrowserRouter } from "react-router-dom";
import { App } from "App";
import { TransactionDetailPage } from "@components/transactionDetail/TransactionDetail";
import { ActiveGamesPage } from "@pages/activeGames/ActiveGamesPage";
import { BalancePage } from "@pages/balance/BalancePage";
import { ChangeNicknamePage } from "@pages/changeNickname/ChangeNicknamePage";
import { ChangePasswordPage } from "@pages/changePassword/ChangePasswordPage";
import { ExchangeCoinPage } from "@pages/exchangeCoin/ExchangeCoinPage";
import { FriendsPage } from "@pages/friends/FriendsPage";
import { FriendsRequestsPage } from "@pages/friendsRequests/FriendsRequestsPage";
import { GamesGoldenFilterPage } from "@pages/gamesGoldenFilter/GamesGoldenFilterPage";
import { GamesSilverFilterPage } from "@pages/gamesSilverFilter/GamesSilverFilterPage";
import { HomePage } from "@pages/home/HomePage";
import { PayoutDetailPage } from "@pages/payoutDetail/PayoutDetailPage";
import { ProfilePage } from "@pages/profile/ProfilePage";
import { ProfileSettingsPage } from "@pages/profileSettings/ProfileSettingsPage";
import { RatingPlayersPage } from "@pages/ratingPlayers/RatingPlayersPage";
import { ReferralsPage } from "@pages/referrals/ReferralsPage";
import { RefillAccountPage } from "@pages/refillAccount/RefillAccountPage";
import { StatisticPlayerPage } from "@pages/statisticPlayer/StatisticPlayerPage";
import { TransferCostsPage } from "@pages/transferCosts/TransferCostsPage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: 'create-game', element: <div>Hello new games</div> },
      { path: 'rating-players', element: <RatingPlayersPage /> },
      { path: 'exchange-coin', element: <ExchangeCoinPage /> },
      { path: 'active-games', element: <ActiveGamesPage /> },
      { path: 'active-games/filter-gold', element: <GamesGoldenFilterPage /> },
      { path: 'active-games/filter-silver', element: <GamesSilverFilterPage /> },
      { path: 'transfer-costs', element: <TransferCostsPage /> },
      { path: 'transfer-costs/refill-account', element: <RefillAccountPage /> },
      { path: 'transfer-costs/payout-detail', element: <PayoutDetailPage /> },
      { path: 'profile', element: <ProfilePage /> },
      { path: 'profile/settings', element: <ProfileSettingsPage /> },
      { path: 'profile/settings/nickname', element: <ChangeNicknamePage /> },
      { path: 'profile/settings/password', element: <ChangePasswordPage /> },
      { path: 'profile/friends', element: <FriendsPage /> },
      { path: 'profile/friends/requests', element: <FriendsRequestsPage /> },
      { path: 'profile/statistic', element: <StatisticPlayerPage /> },
      { path: 'profile/referrals', element: <ReferralsPage /> },
      { path: 'profile/balance', element: <BalancePage /> },
      { path: 'profile/balance/transaction/:id', element: <TransactionDetailPage /> },
    ],
  },
])