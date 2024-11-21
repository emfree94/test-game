// src/App.tsx
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { usePostTelegramDataMutation } from './features/api/apiSlice';
import { saveResponseData } from './features/response/responseSlice';

declare global {
  interface Window {
    Telegram: any;
  }
}

export const App = () => {
  const [rawInitData, setRawInitData] = useState<string | null>(null);
  const [postTelegramData, { isLoading, isError, data }] =
    usePostTelegramDataMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      const initData = tg.initData;
      setRawInitData(initData);

      // Debugging: Log initData
      console.log('Init Data:', initData);

      // Send the initData via POST request using RTK Query
      postTelegramData(initData)
        .unwrap()
        .then((response) => {
          console.log('Response from API:', response);
          dispatch(saveResponseData(response)); // Save data to Redux
        })
        .catch((error) => {
          console.error('Error during POST request:', error);
        });
    }
  }, [dispatch, postTelegramData]);

  return (
    <div>
      <div>
        <h3>Raw Init Data (JSON):</h3>
        <pre>{rawInitData ? rawInitData : 'Loading...'}</pre>
      </div>
      <div>
        <h3>Response Data:</h3>
        <pre>{isLoading ? 'Loading...' : JSON.stringify(data)}</pre>
      </div>
      <button onClick={() => window.Telegram.WebApp.close()}>Close</button>
    </div>
  );
};
