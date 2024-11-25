import { FC, useState } from 'react'
import Modal from 'react-modal'
import { Button } from '@components/buttons/button/Button'
import { Title } from '@components/title/Title'
import { User } from '@pages/friendsRequests/FriendsRequestsPage'
import defaultUserLogo from '@assets/icon/avatar2.svg'
import deleteIcon from '@assets/icon/delete.svg'
import addUserIcon from '@assets/icon/group_add.svg'
import timeIcon from '@assets/icon/history.svg'
import defaultFlag from '@assets/icon/ukraine.svg'
import './friend.scss'

interface FriendProps {
  id: string | number
  friendRequest?: boolean
  userName: string
  userImg?: string
  userCountry?: string
  isActive?: boolean
  modalText?: string
  setUsersData: React.Dispatch<React.SetStateAction<User[]>>
}


export const Friend: FC<FriendProps> = ({
  friendRequest = true,
  userImg,
  userName,
  userCountry,
  isActive,
  setUsersData,
  id,
}) => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false)

  const modalTitle = friendRequest
    ? `Прийняти ${userName} користувача в друзі?`
    : `Видалити ${userName} з друзів`

  const [initialModalText, setInitialModalText] = useState<string>(modalTitle)


  const openModal = () => {
    setInitialModalText(modalTitle)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const removeUser = (id: string | number) => {
    setUsersData((prevUsers) => prevUsers.filter((user) => user.id !== id))
    setIsOpen(false)
  }

  return (
    <div className='friend-block'>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}  ariaHideApp={false} >
        <Title
          className="text-semi-bold center"
          text={initialModalText}
        />
        <div className="modal-wrapper-button">
          <Button width="73px" text="Скасувати" colorVariant="transparent" fontSize='text-regular' onClick={closeModal} />
          <Button width="120px" text="Підтвердити" colorVariant="yellow"  onClick={() => { removeUser(id) }} />
        </div>
      </Modal>
      <div className="friend-data">
        <div className="wrapper-user-img">
          <img
            className="user-img"
            src={userImg ? userImg : defaultUserLogo}
            alt="user-img"
          />
          <img
            className="user-country-img"
            src={userCountry ? userCountry : defaultFlag}
            alt="user-img"
          />
          {isActive && <span className="user-active"></span>}
        </div>
        <p className="user-name text-bold">{userName}</p>
        {friendRequest && <img src={timeIcon} alt="time-icon" />}
      </div>
      <div className="wrapper-img">
        {friendRequest && (
          <img
            className="user-request-icon"
            src={addUserIcon}
            alt="add-user-icon"
            onClick={openModal}
          />
        )}
        <img src={deleteIcon} alt="delete-icon" onClick={openModal} />
      </div>
    </div>
  )
}
