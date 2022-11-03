import axios from 'axios';
import { useEffect } from 'react';

export const LOG_IN = 'LOG_IN';

export const login = (token) => {
  useEffect(() => {
    axios('http://15.165.244.155:8080/users/profile', {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        return {
          type: LOG_IN,
          payload: {
            token,
            displayName: res.data,
          },
        };
      })
      .catch((err) => console.log('Error', err.message));
  }, [token]);
};
