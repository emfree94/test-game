import { FC } from 'react'
import linkIcon from '@assets/icon/copy.svg'
import './referralLink.scss'

interface ReferralLink {
  isMargin?: boolean
}

export const ReferralLink: FC<ReferralLink> = ({ isMargin }) => {
  const handleCopyClick = () => {
    navigator.clipboard.writeText('9548t8459utnfjn49584845')
    alert('Link copied to clipboard!')
  }
  return (
    <div className={`referrals-link-block ${isMargin && 'margin'}`}>
      <p className="text-medium">Запрошення</p>
      <div className="referrals-link-container">
        <p className="user-link-id text-regular">9548t8459utnfjn49584845</p>
        <img src={linkIcon} alt="link-icon" onClick={handleCopyClick} />
      </div>
    </div>
  )
}
