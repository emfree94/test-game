import { Navigation } from '@components/Navigation/Navigation'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

declare global {
  interface Window {
    Telegram: any
  }
}

interface UserData {
  userId: string; 
  username: string;
}

export const App = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    // Check if the Telegram WebApp is available
    if (window.Telegram && window.Telegram.WebApp) {
      // Initialize the WebApp
      window.Telegram.WebApp.ready();

      // Retrieve user data from the URL
      const params = new URLSearchParams(window.location.search);
      const userId = params.get('user_id');
      const username = params.get('username');

      // Log the user data for debugging
      console.log('User ID:', userId);
      console.log('Username:', username);

      // Create a user object and set it to state
      if (userId && username) {
        setUserData({ userId, username });
      }
    }
  }, []);

  return (
    <div>
      <main>
        <Outlet />
      </main>
      <Navigation />
    </div>
  )
}
