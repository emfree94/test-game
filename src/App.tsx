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
  const [rawInitData, setRawInitData] = useState({})

  useEffect(() => {
  const [data, setData] = useState<Record<string, any>>()
    setRawInitData({initialData: JSON.stringify(tg.initialData)})
  }, [])

  return (
    <div>
      <div>
        <h3>Raw Init Data (JSON):</h3>
        <pre>{}</pre>
      </div>
      <button onClick={() => tg.close()}>Close</button>
      <main>
        <Outlet />
      </main>
      <Navigation />
    </div>
  )
}
