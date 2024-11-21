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
  const [rawInitData, setRawInitData] = useState(null)

  useEffect(() => {
    setRawInitData(tg.initData)
  }, [])

  return (
    <div>
      <div>
        <h3>Raw Init Data (JSON):</h3>
        <pre>{JSON.stringify(rawInitData)}</pre>
      </div>
      <button onClick={() => tg.close()}>Close</button>
      <main>
        <Outlet />
      </main>
      <Navigation />
    </div>
  )
}
