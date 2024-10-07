import { Navigation } from '@components/Navigation/Navigation'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

declare global {
  interface Window {
    Telegram: any
  }
}

const tg = window.Telegram.WebApp

export const App = () => {
  useEffect(() => {
    tg.ready()
    console.log('tg.initDataUnsafe?.user?', tg.initDataUnsafe?.user)
  }, [])

  return (
    <div>
      <p>{tg.initDataUnsafe?.user?.username}</p>
      <main>
        <Outlet />
      </main>
      <Navigation />
    </div>
  )
}
