import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navigation } from '@components/navigation/Navigation'
import { useEffect, useState } from 'react'
import { usePostTelegramDataMutation } from 'features/api/apiSlice'
import { useUpdateAccountNameMutation } from 'features/api/putSlice'
import { useDispatch } from 'react-redux'
import { userData } from 'features/response/responseSlice'

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
  const [response, setResponse] = useState<string>('')

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
      name: 'test reponse',
      email: 'ruslan_test_ruslan@rr.rr',
      phone: '+ (38) 067 123 4567',
    }

    try {
      const data = await updateAccountName(payload).unwrap() // Execute PUT request

      setResponse(data)
      console.log('Response from PUT request:', response)
    } catch (error: any) {
      setResponse(error)
      console.error('Error during PUT request:', error)
    }
  }
  
  return (
    <div className='app-wrapper'>
      <main>
        <Outlet />
      </main>
      <Navigation />
    </div>
  )
}
