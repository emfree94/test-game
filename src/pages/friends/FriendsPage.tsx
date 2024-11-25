import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Title } from '@components/title/Title'
import { Friend } from '@components/friend/Friend'
import { ContentMessage } from '@components/contentMessage/ContentMessage'
import { ButtonArrow } from '@components/buttons/buttonArrow/ButtonArrow'
import { User } from '@pages/friendsRequests/FriendsRequestsPage'
import './friendsPage.scss'

const users: User[] = [
  {
    id: 1,
    friendRequest: true,
    userName: 'Alice',
    variant: 'silver',
    userCountryFlag: 'https://flagcdn.com/us.svg',
    isActive: true,
  },
  {
    id: 2,
    friendRequest: false,
    userName: 'Bob',
    variant: 'yellow',
    userCountryFlag: 'https://flagcdn.com/fr.svg',
    isActive: true,
  },
  {
    id: 3,
    friendRequest: true,
    userName: 'Carlos',
    variant: 'silver',
    userCountryFlag: 'https://flagcdn.com/br.svg',
    isActive: false,
  },
  {
    id: 4,
    friendRequest: false,
    userName: 'Diana',
    variant: 'yellow',
    userCountryFlag: 'https://flagcdn.com/ua.svg',
    isActive: true,
  },
  {
    id: 5,
    friendRequest: true,
    userName: 'Elena',
    variant: 'silver',
    userCountryFlag: 'https://flagcdn.com/de.svg',
    isActive: true,
  },
  {
    id: 6,
    friendRequest: false,
    userName: 'Felix',
    variant: 'silver',
    userCountryFlag: 'https://flagcdn.com/pl.svg',
    isActive: false,
  },
  {
    id: 7,
    friendRequest: true,
    userName: 'Gabriel',
    variant: 'silver',
    userCountryFlag: 'https://flagcdn.com/ru.svg',
    isActive: true,
  },
  {
    id: 8,
    friendRequest: false,
    userName: 'Hanna',
    variant: 'yellow',
    userCountryFlag: 'https://flagcdn.com/es.svg',
    isActive: true,
  },
  {
    id: 9,
    friendRequest: true,
    userName: 'Ivan',
    variant: 'silver',
    userCountryFlag: 'https://flagcdn.com/it.svg',
    isActive: false,
  },
  {
    id: 10,
    friendRequest: false,
    userName: 'Julia',
    variant: 'yellow',
    userCountryFlag: 'https://flagcdn.com/jp.svg',
    isActive: true,
  },
  {
    id: 11,
    friendRequest: true,
    userName: 'Ken',
    variant: 'silver',
    userCountryFlag: 'https://flagcdn.com/ca.svg',
    isActive: true,
  },
  {
    id: 12,
    friendRequest: false,
    userName: 'Lily',
    variant: 'yellow',
    userCountryFlag: 'https://flagcdn.com/gb.svg',
    isActive: false,
  },
]

export const FriendsPage = () => {
  const [usersData, setUsersData] = useState<User[]>(users)

  const navigate = useNavigate()

  const getFriendRequests = () => usersData.filter((user) => user.friendRequest)

  const getActiveFriends = () => usersData.filter((user) => !user.friendRequest)

  return (
    <div className="friends">
      {usersData.length === 0 ? (
        <ContentMessage
          text="У тебе ще немає друзів"
          buttonText="Добавити друзів"
          variant="fail"
        />
      ) : (
        <>
          <div className="friends--wrapper">
            <div className="friends--wrapper__block">
              <Title text="Заявки у друзі" marginBottom="0" />
              <ButtonArrow onClick={() => navigate('requests')} />
            </div>
            {!!usersData.length &&
              getFriendRequests().map(
                ({ friendRequest, userName, userCountryFlag, id }) => (
                  <Friend
                    key={id}
                    id={id}
                    friendRequest={friendRequest}
                    userName={userName}
                    userCountry={userCountryFlag}
                    setUsersData={setUsersData}
                  />
                )
              )}
          </div>

          <div className="friends--wrapper">
            <Title text="Друзі" />
            {!!usersData.length &&
              getActiveFriends().map(
                ({
                  friendRequest,
                  userName,
                  userCountryFlag,
                  isActive,
                  id,
                }) => (
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
          </div>
        </>
      )}
    </div>
  )
}
