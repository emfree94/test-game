import { FC } from 'react'
import { ReferralProps } from '@pages/referrals/ReferralsPage'
import silverCoinIcon from '@assets/icon/silver-coins.svg'
import goldenCoinIcon from '@assets/icon/golden-coins.svg'
import defaultUserLogo from '@assets/icon/avatar2.svg'
import rankIcon from '@assets/icon/rewarded_ads.svg'
import './referral.scss'

export const Referral: FC<ReferralProps> = ({
  nickname,
  userLogoUrl,
  userCountryFlag,
  silverCoin,
  goldCoin,
  isGames,
  type,
  coinValue,
  rating,
}) => {
  return (
    <div className={`referral-block ${type}`} key={nickname}>
      <div className="referral-block-left">
        <div className="wrapper-img">
          <img
            className="user-img"
            src={userLogoUrl ? userLogoUrl : defaultUserLogo}
            alt="user-img"
          />
          {userCountryFlag && (
            <img
              className="user-country-img"
              src={userCountryFlag && userCountryFlag}
              alt="user-country-img"
            />
          )}
        </div>

        <p className="text-regular">{nickname}</p>
      </div>

      <div className="coins-wrapper">
        {isGames ? (
          type === 'silver' && (
            <>
              <span className="coin-block">
                <p className="referral-coin text-medium">{coinValue}</p>
                <img src={silverCoinIcon} alt="silver-coin-icon" />
              </span>
              <span className="rank-block">
                <p className="text-tiny-regular">{rating}</p>
                <img src={rankIcon} alt="rang-icon" />
              </span>
            </>
          )
        ) : (
          <span className="coin-block">
            <p className="referral-coin text-medium">
              {silverCoin ? silverCoin : 0}
            </p>
            <img src={silverCoinIcon} alt="silver-coin-icon" />
          </span>
        )}

        {isGames ? (
          type === 'gold' && (
            <>
              <span className="coin-block">
                <p className="referral-coin text-medium">{coinValue}</p>
                <img src={goldenCoinIcon} alt="silver-coin-icon" />
              </span>

              <span className="rank-block">
                <p className="text-tiny-regular">{rating}</p>
                <img src={rankIcon} alt="rang-icon" />
              </span>
            </>
          )
        ) : (
          <span className="coin-block">
            <p className="referral-coin text-medium">
              {goldCoin ? goldCoin : 0}
            </p>
            <img src={goldenCoinIcon} alt="silver-coin-icon" />
          </span>
        )}
      </div>
    </div>
  )
}
