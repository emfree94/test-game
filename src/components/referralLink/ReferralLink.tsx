import { FC } from 'react'
import { copyTextToClipboard } from '@utils/utils'
import linkIcon from '@assets/icon/copy.svg'
import './referralLink.scss'

export const ReferralLink: FC = () => {

  const walletId = '9548t8459utnfjn49584845';

  return (
    <div className="referrals-link-block">
      <p className="text-medium">Запрошення</p>
      <div className="referrals-link-container">
        <p className="user-wallet-id text-regular">9548t8459utnfjn49584845</p>
        <img src={linkIcon} alt="link-icon" onClick={() => copyTextToClipboard(walletId)} />
      </div>
    </div>
  )
}
