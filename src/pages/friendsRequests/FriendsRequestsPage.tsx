import { useState } from 'react'
import { Title } from '@components/title/Title'
import { Friend } from '@components/friend/Friend'
import { ContentMessage } from '@components/contentMessage/ContentMessage'
import '@pages/friends/friendsPage.scss'

export interface User {
  id: string | number
  friendRequest?: boolean
  userName: string
  userImg?: string
  userCountryFlag?: string
  isActive?: boolean
  variant?: string
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

export const FriendsRequestsPage = () => {
  const [usersData, setUsersData] = useState<User[]>(users)

  const hasUsers = usersData.length > 0
  const hasNonRequestUsers = usersData.some((user) => user.friendRequest)

  return (
    <div className="friends">
      <Title text="Заявки у друзі" />
      {hasUsers && hasNonRequestUsers ? (
        usersData
          .filter((user) => user.friendRequest)
          .map(({ friendRequest, userName, userCountryFlag, id }) => (
            <Friend
              key={id}
              id={id}
              friendRequest={friendRequest}
              userName={userName}
              userCountry={userCountryFlag}
              setUsersData={setUsersData}
            />
          ))
      ) : (
        <ContentMessage
          text="У тебе ще немає друзів"
          buttonText="Добавити друзів"
          variant="fail"
        />
      )}
    </div>
  )
}
