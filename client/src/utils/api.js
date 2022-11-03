import axios from 'axios';

export const fetchLogin = (url, data) => {
  return axios(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  });
};

export const fetchCreate = (url, data) => {
  axios(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: '1',
    },
    data,
  }).catch((err) => console.log('Error', err.message));
};

export const fetchPatch = (url, data) => {
  axios(url, {
    method: 'patch',
    headers: {
      'Content-Type': 'application/json',
      Authorization: '1',
    },
    data,
  }).catch((err) => console.log('Error', err.message));
};

export const fetchDelete = (url) => {
  axios(url, {
    method: 'delete',
    headers: {
      Authorization: '1',
    },
  }).catch((err) => console.log('Error', err.message));
};
