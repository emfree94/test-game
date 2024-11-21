// src/App.tsx
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usePostTelegramDataMutation } from './features/api/apiSlice';
import { saveResponseData } from './features/response/responseSlice';
import { RootState } from './app/store'; // Correctly import RootState

declare global {
  interface Window {
    Telegram: any;
  }
}

export const App = () => {
  const [rawInitData, setRawInitData] = useState<string | null>(null);
  const [postTelegramData, { isLoading }] = usePostTelegramDataMutation();
  const dispatch = useDispatch();

  // Use RootState type here
  const responseData = useSelector((state: RootState) => state.response.data);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      const initData = tg.initData;
      setRawInitData(initData);

      postTelegramData(initData)
        .unwrap()
        .then((response) => {
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
        {isLoading ? (
          <p>Loading...</p>
        ) : responseData ? (
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        ) : (
          <p>No data received</p>
        )}
      </div>
      <button onClick={() => window.Telegram.WebApp.close()}>Close</button>
    </div>
  );
};
