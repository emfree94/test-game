import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Title } from '@components/title/Title'
import editIcon from '@assets/icon/edit.svg'
import cameraIcon from '@assets/icon/photo_camera.svg'
import './profileUser.scss'


export const UserProfile: FC = () => {
  const navigate = useNavigate()

  const handleEditClick = () => {
    navigate('/profile/settings/nickname')
  }

  return (
    <div className="user-profile-data">
      <Title text="Профіль" />
      <div className="user-info-wrapper">
        <div className="user-info">
          <p className="text-medium ">Нікнейм</p>

          <div className="user-data">
            <p className="text-regular">Vladyslav Holdysh</p>
            <img
              onClick={handleEditClick}
              className="edit-nickname"
              src={editIcon}
              alt="icon-pen"
            />
          </div>
        </div>

        <div className="user-info">
          <p className="text-medium ">Аватар</p>

          <div className="user-data">
            <p className="text-regular">Завантажити</p>
            <img
              className="edit-nickname"
              src={cameraIcon}
              alt="icon-photo-camera"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
