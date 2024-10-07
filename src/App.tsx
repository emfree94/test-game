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
  const [data, setData] = useState({});

  useEffect(() => {
    const firstLayerInitData = Object.fromEntries(
      new URLSearchParams(window.Telegram.WebApp.initData)
    );

    const initData: Record<string, string> = {};

    for (const key in firstLayerInitData) {
      try {
        initData[key] = JSON.parse(firstLayerInitData[key]);
      } catch {
        initData[key] = firstLayerInitData[key];
      }
    }

    setData(initData);

    console.log(data)
  }, []);

  return (
    <div>
     <p>{Object.keys(data).length > 0 ? JSON.stringify(data) : 'Loading...'}</p>
      <button onClick={() => tg.close()}>close</button>
      <main>
        <Outlet />
      </main>
      <Navigation />
    </div>
  );
};
