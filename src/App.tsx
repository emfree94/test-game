import { Navigation } from '@components/Navigation/Navigation';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

declare global {
  interface Window {
    Telegram: any;
  }
}

const tg = window.Telegram.WebApp;

export const App = () => {
  const [data, setData] = useState<Record<string, any>>({});
  const [rawInitData, setRawInitData] = useState<string>("");

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
    setRawInitData(window.Telegram.WebApp.initData);
    console.log(initData);
  }, []);

  return (
    <div>
      <div>
        <h3>rawInitData</h3>
        <h3>Parsed Init Data:</h3>
        {Object.keys(data).length > 0 ? (
          Object.entries(data).map(([key, value]) => (
            <p key={key}>
              <strong>{key}:</strong>{' '}
              {typeof value === 'object' ? JSON.stringify(value) : value}
            </p>
          ))
        ) : (
          'Loading...'
        )}
      </div>
      <div>
        <h3>Raw Init Data (JSON):</h3>
        <pre>{JSON.stringify(rawInitData, null, 2)}</pre> 
      </div>
      <button onClick={() => tg.close()}>Close</button>
      <main>
        <Outlet />
      </main>
      <Navigation />
    </div>
  );
};
