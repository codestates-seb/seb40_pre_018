import axios from 'axios';

export const fetchCreate = (url, data) => {
  axios(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: '1',
    },
    data,
  })
    .then((res) => console.log(res.data))
    .catch((err) => console.log('Error', err.message));
};

export const fetchPatch = (url, data) => {
  axios(url, {
    method: 'patch',
    headers: {
      'Content-Type': 'application/json',
      Authorization: '1',
    },
    data,
  })
    .then((res) => console.log(res.data))
    .catch((err) => console.log('Error', err.message));
};

/* 추후에 사용하기 위한 로직입니다. */
/*
export const fetchDelete = (url) => {
  axios(url, {
    method: 'delete',
  })
    .then((res) => console.log(res.data))
    .catch((err) => console.log('Error', err.message));
};
*/
