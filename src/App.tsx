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
  const [rawInitData, setRawInitData] = useState<string | null>(null);

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      setRawInitData(JSON.stringify(tg.initialData));
    } else {
      console.error('Telegram WebApp API not found');
    }
  }, []);

  return (
    <div>
      <div>
        <h3>Raw Init Data {rawInitData}</h3>
      </div>
      <button onClick={() => tg.close()}>Close</button>
      <main>
        <Outlet />
      </main>
      <Navigation />
    </div>
  )
}
