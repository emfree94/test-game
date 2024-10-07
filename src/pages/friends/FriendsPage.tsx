import { Title } from '@components/title/Title'
import './friendsPage.scss'
import { Friend } from '@components/friend/Friend'
import { useState } from 'react'
import { ContentMessage } from '@components/ContentMessage/ContentMessage'

export interface User {
  id: string | number
  friendRequest?: boolean
  userName: string
  userImg?: string
  type?: 'silver' | 'yellow'
  userCountryFlag?: string
  isActive?: boolean
}
const users: User[] = [
  {
    id: 1,
    friendRequest: true,
    userName: 'Alice',
    type: 'silver',
    userCountryFlag: 'https://flagcdn.com/us.svg',
    isActive: true,
  },
  {
    id: 2,
    friendRequest: false,
    userName: 'Bob',
    type: 'yellow',
    userCountryFlag: 'https://flagcdn.com/fr.svg',
    isActive: true,
  },
  {
    id: 3,
    friendRequest: true,
    userName: 'Carlos',
    type: 'silver',
    userCountryFlag: 'https://flagcdn.com/br.svg',
    isActive: false,
  },
  {
    id: 4,
    friendRequest: false,
    userName: 'Diana',
    type: 'yellow',
    userCountryFlag: 'https://flagcdn.com/ua.svg',
    isActive: true,
  },
  {
    id: 5,
    friendRequest: true,
    userName: 'Elena',
    type: 'silver',
    userCountryFlag: 'https://flagcdn.com/de.svg',
    isActive: true,
  },
  {
    id: 6,
    friendRequest: false,
    userName: 'Felix',
    type: 'silver',
    userCountryFlag: 'https://flagcdn.com/pl.svg',
    isActive: false,
  },
  {
    id: 7,
    friendRequest: true,
    userName: 'Gabriel',
    type: 'silver',
    userCountryFlag: 'https://flagcdn.com/ru.svg',
    isActive: true,
  },
  {
    id: 8,
    friendRequest: false,
    userName: 'Hanna',
    type: 'yellow',
    userCountryFlag: 'https://flagcdn.com/es.svg',
    isActive: true,
  },
  {
    id: 9,
    friendRequest: true,
    userName: 'Ivan',
    type: 'silver',
    userCountryFlag: 'https://flagcdn.com/it.svg',
    isActive: false,
  },
  {
    id: 10,
    friendRequest: false,
    userName: 'Julia',
    type: 'yellow',
    userCountryFlag: 'https://flagcdn.com/jp.svg',
    isActive: true,
  },
  {
    id: 11,
    friendRequest: true,
    userName: 'Ken',
    type: 'silver',
    userCountryFlag: 'https://flagcdn.com/ca.svg',
    isActive: true,
  },
  {
    id: 12,
    friendRequest: false,
    userName: 'Lily',
    type: 'yellow',
    userCountryFlag: 'https://flagcdn.com/gb.svg',
    isActive: false,
  },
]

export const FriendsPage = () => {
  const [usersData, setUsersData] = useState<User[]>(users)

  const hasUsers = usersData.length > 0
  const hasNonRequestUsers = usersData.some(
    (user) => user.friendRequest === false
  )

  return (
    <div className="friends">
      <Title text="Друзі" />
      {hasUsers && hasNonRequestUsers ? (
        usersData
          .filter((user) => !user.friendRequest)
          .sort((a, b) => Number(b.isActive) - Number(a.isActive))
          .map(({ friendRequest, userName, userCountryFlag, isActive, id }) => (
            <Friend
              key={id}
              id={id}
              friendRequest={friendRequest}
              userName={userName}
              userCountry={userCountryFlag}
              isActive={isActive}
              setUsersData={setUsersData}
            />
          ))
      ) : (
        <ContentMessage
          text="У тебе ще немає друзів"
          buttonText="Добавити друзів"
          variant='fail'
        />
      )}
    </div>
  )
}
