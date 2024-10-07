import { Title } from '@components/title/Title'
import { FC, useState } from 'react'
import { Friend } from '@components/friend/Friend'
import { ButtonArrow } from '@components/buttons/buttonArrow/ButtonArrow'
import { useNavigate } from 'react-router-dom'
import buttonArrowIcon from '@assets/icon/arrow_forward2.svg'
import './friendManagement.scss'
import { ContentMessage } from '@components/ContentMessage/ContentMessage'

export interface User {
  id: string | number
  friendRequest?: boolean
  userName: string
  userImg?: string
  userCountryFlag?: string
  isActive?: boolean
}

interface UserListProps {
  users: User[]
  showAll: boolean
  setUsersData: React.Dispatch<React.SetStateAction<User[]>>
}

const users: User[] = [
  {
    id: 1,
    friendRequest: true,
    userName: 'Alice',
    userCountryFlag: 'https://flagcdn.com/us.svg',
    isActive: true,
  },
  {
    id: 2,
    friendRequest: false,
    userName: 'Bob',
    userCountryFlag: 'https://flagcdn.com/fr.svg',
    isActive: true,
  },
  {
    id: 3,
    friendRequest: true,
    userName: 'Carlos',
    userCountryFlag: 'https://flagcdn.com/br.svg',
    isActive: false,
  },
  {
    id: 4,
    friendRequest: false,
    userName: 'Diana',
    userCountryFlag: 'https://flagcdn.com/ua.svg',
    isActive: true,
  },
  {
    id: 5,
    friendRequest: true,
    userName: 'Elena',
    userCountryFlag: 'https://flagcdn.com/de.svg',
    isActive: true,
  },
  {
    id: 6,
    friendRequest: false,
    userName: 'Felix',
    userCountryFlag: 'https://flagcdn.com/pl.svg',
    isActive: false,
  },
  {
    id: 7,
    friendRequest: true,
    userName: 'Gabriel',
    userCountryFlag: 'https://flagcdn.com/ru.svg',
    isActive: true,
  },
  {
    id: 8,
    friendRequest: false,
    userName: 'Hanna',
    userCountryFlag: 'https://flagcdn.com/es.svg',
    isActive: true,
  },
  {
    id: 9,
    friendRequest: true,
    userName: 'Ivan',
    userCountryFlag: 'https://flagcdn.com/it.svg',
    isActive: false,
  },
  {
    id: 10,
    friendRequest: false,
    userName: 'Julia',
    userCountryFlag: 'https://flagcdn.com/jp.svg',
    isActive: true,
  },
  {
    id: 11,
    friendRequest: true,
    userName: 'Ken',
    userCountryFlag: 'https://flagcdn.com/ca.svg',
    isActive: true,
  },
  {
    id: 12,
    friendRequest: false,
    userName: 'Lily',
    userCountryFlag: 'https://flagcdn.com/gb.svg',
    isActive: false,
  },
]

const filterAndSortUsers = (users: User[], friendRequest: boolean) =>
  users
    .filter((user) => user.friendRequest === friendRequest)
    .sort((a, b) => Number(b.isActive) - Number(a.isActive))

const UserList: FC<UserListProps> = ({ users, showAll, setUsersData }) => {
  const visibleUsers = showAll ? users : users.slice(0, 3)

  return (
    <>
      {visibleUsers.map(
        ({ id, friendRequest, userName, userCountryFlag, isActive }) => (
          <Friend
            key={id}
            id={id}
            friendRequest={friendRequest}
            userName={userName}
            userCountry={userCountryFlag}
            isActive={isActive}
            setUsersData={setUsersData}
          />
        )
      )}
    </>
  )
}

export const FriendManagementPage: FC = () => {
  const [usersData, setUsersData] = useState<User[]>(users)
  const [showAll, setShowAll] = useState(false)
  const navigate = useNavigate()

  const friendRequests = filterAndSortUsers(usersData, true)
  const friends = filterAndSortUsers(usersData, false)

  return (
    <div className="friend-management">
      <div className="friends-request-container">
        <div className="title-wrapper">
          <Title text="Заявки у друзі" marginBottom="0px" />
          <ButtonArrow onClick={() => navigate('/profile/friends/requests')} />
        </div>
        {friendRequests.length > 0 ? (
          <UserList
            users={friendRequests}
            showAll={showAll}
            setUsersData={setUsersData}
          />
        ) : null}

        <button
          className="show-more-button text-medium"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Показати менше' : 'Показати ще'}
          <img src={buttonArrowIcon} alt="button-arrow-icon" />
        </button>
      </div>

      <div className="my-friends-container">
        <div className="friends">
          <Title text="Друзі" />
          {friends.length > 0 ? (
            <UserList
              users={friends}
              showAll={true}
              setUsersData={setUsersData}
            />
          ) : (
            <ContentMessage
              text="У тебе ще немає друзів"
              buttonText="Добавити друзів"
              variant='fail'
            />
          )}
        </div>
      </div>
    </div>
  )
}
