import { FC } from 'react'
import avatar from '@assets/icon/avatar.svg'
import ratingIcon from '@assets/icon/rating.svg'
import './profileHeader.scss'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'

export const ProfileHeader = (): JSX.Element => {
  const {avatar, name} = useSelector((state: RootState) => state.response.data)
  return (
    <div className="profile-header">
      <div className="avatar">
        <img src={avatar} alt="user-avatar" />
      </div>
      <div className="user-rating">
        <img src={ratingIcon} alt="user-rating" />
        <p className="rating text-tiny-regular">33</p>
      </div>
      <h1 className="nickname title-bold ">{name}</h1>
    </div>
  )
}
