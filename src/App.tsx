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
  const [userData, setUserData] = useState<{ name?: string; surname?: string; id?: string }>({});

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

    // Extracting name, surname, and id from initData
    const { first_name, last_name, id } = initData;
    setUserData({
      name: first_name,
      surname: last_name,
      id: id,
    });

    console.log(initData);
  }, []);

  return (
    <div>
      <p>
        {userData.name && userData.surname
          ? `Name: ${userData.name}, Surname: ${userData.surname}, ID: ${userData.id}`
          : 'Loading...'}
      </p>
      <button onClick={() => tg.close()}>Close</button>
      <main>
        <Outlet />
      </main>
      <Navigation />
    </div>
  );
};
