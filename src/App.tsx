// File: src/App.tsx
import { Navigation } from '@components/Navigation/Navigation';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        initialData: any; // You can refine this type further if you know the exact structure
        close: () => void;
      };
    };
  }
}

export const App = () => {
  const [rawInitData, setRawInitData] = useState<string | null>(null);

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      setRawInitData(JSON.stringify(tg.initialData)); // Format JSON for better readability
    } else {
      console.error('Telegram WebApp API is not available.');
      setRawInitData('Error: Telegram WebApp API not available.');
    }
  }, []);

  return (
    <div>
      <div>
        <h3>Raw Init Data (JSON):</h3>
        <pre>{rawInitData || 'Loading...'}</pre>
      </div>
      <button
        onClick={() => {
          if (window.Telegram?.WebApp?.close) {
            window.Telegram.WebApp.close();
          } else {
            console.error('Telegram WebApp API is not available.');
          }
        }}
      >
        Close
      </button>
      <main>
        <Outlet />
      </main>
      <Navigation />
    </div>
  );
};
