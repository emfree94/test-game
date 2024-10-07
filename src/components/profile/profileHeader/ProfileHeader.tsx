import { FC } from 'react'
import avatar from '@assets/icon/avatar.svg'
import ratingIcon from '@assets/icon/rating.svg'
import './profileHeader.scss'

export const ProfileHeader = (): JSX.Element => {
  return (
    <div className="profile-header">
      <div className="avatar">
        <img src={avatar} alt="user-avatar" />
      </div>
      <div className="user-rating">
        <img src={ratingIcon} alt="user-rating" />
        <p className="rating text-tiny-regular">33</p>
      </div>
      <h1 className="nickname title-bold ">Nickname</h1>
    </div>
  )
}
