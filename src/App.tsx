// src/App.tsx
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { usePostTelegramDataMutation } from './features/api/apiSlice'
import { userData } from 'features/response/responseSlice'
import { Outlet } from 'react-router-dom'
import { Navigation } from '@components/Navigation/Navigation'
import { useUpdateAccountNameMutation } from 'features/api/putSlice'

declare global {
  interface Window {
    Telegram: any
  }
}

export const App = () => {
  const [rawInitData, setRawInitData] = useState<string | null>(null)
  const [postTelegramData, { isLoading, isError, data }] =
    usePostTelegramDataMutation()
  const [
    updateAccountName,
    { isLoading: isUpdateLoading, isError: isUpdateError, data: updateData },
  ] = useUpdateAccountNameMutation()
  const dispatch = useDispatch()
  const [response, setResponse] = useState({})

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp
      const initData = tg.initData
      setRawInitData(initData)

      postTelegramData(initData)
        .unwrap()
        .then((response) => {
          console.log('Response from API:', response)
          dispatch(userData(response.data))
        })
        .catch((error) => {
          console.error('Error during POST request:', error)
        })
    }
  }, [dispatch, postTelegramData])

  const updateName = async () => {
    const payload = {
      name: 'test',
      email: 'ruslan_test@rr.rr',
      phone: '+ (38) 067 123 4567',
    }

    try {
      const data = await updateAccountName(payload).unwrap() // Execute PUT request

      setResponse(data)
      console.log('Response from PUT request:', response)
    } catch (error) {
      setResponse(error)
      console.error('Error during PUT request:', error)
    }
  }

  return (
    <div>
      <div>rawInitData: {JSON.stringify(data)}</div>

      <div className="">{localStorage.getItem('token')}</div>

      <button onClick={() => updateName}>Update name</button>

      <div className="">{JSON.stringify(response)}</div>
      <main>
        <Outlet />
      </main>
      <Navigation />
    </div>
  )
}
