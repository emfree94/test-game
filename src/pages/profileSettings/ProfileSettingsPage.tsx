import { ProfileHeader } from '@components/profile/profileHeader/ProfileHeader'
import { UserProfile } from '@components/profile/profileUser/ProfileUser'
import { Settings } from '@components/profile/settings/Settings'
import { Verification } from '@components/profile/verification/Verification'
import { UserBalance } from '@components/userBalance/UserBalance'
import './profileSettingsPage.scss'


export const ProfileSettingsPage = () => {
  return (
    <div className="profile-settings">
      <div className="settings-wrapper">
        <div className="user-data-wrapper">
          <ProfileHeader />
          <UserBalance goldBalance={2000} silverBalance={300000} />
        </div>

        <UserProfile />
        <Verification />
        <Settings />
      </div>
    </div>
  )
}
