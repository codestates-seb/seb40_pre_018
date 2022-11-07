import axios from 'axios';
import { getLocalStorage } from '../utils/localStorage';

export const fetchCreate = (url, data) => {
  axios(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: getLocalStorage().token,
    },
    data,
  }).catch((err) => console.log('Error', err.message));
};

export const fetchPatch = (url, data) => {
  axios(url, {
    method: 'patch',
    headers: {
      'Content-Type': 'application/json',
      Authorization: getLocalStorage().token,
    },
    data,
  }).catch((err) => console.log('Error', err.message));
};

export const fetchDelete = (url) => {
  axios(url, {
    method: 'delete',
    headers: {
      Authorization: getLocalStorage().token,
    },
  }).catch((err) => console.log('Error', err.message));
};
