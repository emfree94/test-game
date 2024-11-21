// File: src/App.tsx
import { Navigation } from '@components/Navigation/Navigation';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { usePostTelegramDataMutation } from './features/apiSlice';

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        initialData: Record<string, any>; // Assuming initData is an object
        close: () => void;
      };
    };
  }
}

export const App = () => {
  const [rawInitData, setRawInitData] = useState<Record<string, any> | null>(null);
  const [postTelegramData, { data, error, isLoading }] = usePostTelegramDataMutation();

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      const initData = tg.initialData; // Directly access the object
      setRawInitData(initData);

      // Stringify the object to match API schema
      postTelegramData(JSON.stringify(initData))
        .unwrap()
        .then(() => console.log('Data posted successfully'))
        .catch((err) => console.error('Error posting data:', err));
    } else {
      console.error('Telegram WebApp API is not available.');
      setRawInitData(null);
    }
  }, [postTelegramData]);

  const handleClose = () => {
    if (window.Telegram?.WebApp?.close) {
      window.Telegram.WebApp.close();
    } else {
      console.error('Telegram WebApp API is not available.');
    }
  };

  return (
    <div>
      <div>
        <h3>Raw Init Data (Object):</h3>
        <pre>{rawInitData ? JSON.stringify(rawInitData, null, 2) : 'Loading...'}</pre>
      </div>
      <div>
        <h3>API Response:</h3>
        {isLoading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>Error: {(error as any)?.data?.message || 'Unknown error'}</p>}
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </div>
      <button onClick={handleClose}>Close</button>
      <main>
        <Outlet />
      </main>
      <Navigation />
    </div>
  );
};
