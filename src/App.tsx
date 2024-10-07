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
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    tg.ready();
    
    if (tg.initDataUnsafe?.user) {
      setUsername(tg.initDataUnsafe.user.username);
    } else {
      console.log('User data is not available yet');
    }
  }, []);

  return (
    <div>
      <p>{username ? username : 'Loading...'}</p>
      <button onClick={() => tg.close()}>close</button>
      <main>
        <Outlet />
      </main>
      <Navigation />
    </div>
  );
};
