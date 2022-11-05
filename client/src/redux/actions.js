import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginAction = createAsyncThunk(
  'loginSlice/loginAction',
  async (payload) => {
    const response = await axios('http://15.165.244.155:8080/auth/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      data: payload,
    });

    const getProfile = await axios('http://15.165.244.155:8080/users/profile', {
      headers: {
        authorization: response.headers.authorization,
      },
    });

    return { ...getProfile.data, token: response.headers.authorization };
  }
);
