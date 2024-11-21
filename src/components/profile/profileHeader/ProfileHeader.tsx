import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import avatarImg from '@assets/icon/avatar.svg';
import ratingIcon from '@assets/icon/rating.svg';
import './profileHeader.scss';

export const ProfileHeader: FC = (): JSX.Element => {
  const { avatar, name } = useSelector((state: RootState) => state.userData.data) ?? {};


  return (
    <div className="profile-header">
      <div className="avatar">
        <img src={avatar || avatarImg} alt="user-avatar" />
      </div>
      <div className="user-rating">
        <img src={ratingIcon} alt="user-rating" />
        <p className="rating text-tiny-regular">33</p>
      </div>
      <h1 className="nickname title-bold ">{name || 'Nickname'}</h1>
    </div>
  );
};

