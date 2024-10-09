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
  const [data, setData] = useState<Record<string, any>>({})

  useEffect(() => {
    const firstLayerInitData = Object.fromEntries(
      new URLSearchParams(window.Telegram.WebApp.initData)
    )

    const initData: Record<string, string> = {}

    for (const key in firstLayerInitData) {
      try {
        initData[key] = JSON.parse(firstLayerInitData[key])
      } catch {
        initData[key] = firstLayerInitData[key]
      }
    }

    setData(initData)

    console.log(initData)
  }, [])

  return (
    <div>
      <div>
        {Object.keys(data).length > 0
          ? Object.entries(data).map(([key, value]) => (
              <>
                <p key={key}>
                  <strong>{key}:</strong>{' '}
                  {typeof value === 'object' ? JSON.stringify(value) : value}
                </p>
                <p>{data}</p>
              </>
            ))
          : 'Loading...'}
      </div>
      <button onClick={() => tg.close()}>Close</button>
      <main>
        <Outlet />
      </main>
      <Navigation />
    </div>
  )
}
