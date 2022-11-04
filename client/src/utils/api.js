import axios from 'axios';

export const fetchLogin = (url, data) => {
  axios(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  })
    .then((res) => console.log(res.data))
    .catch((err) => console.log('Error', err.message));
};

export const fetchCreate = (url, data) => {
  axios(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzM4NCJ9.eyJyb2xlcyI6WyJVU0VSIl0sInVzZXJJZCI6MSwiZW1haWwiOiJxd2VAcXdlLmNvbSIsInN1YiI6InF3ZUBxd2UuY29tIiwiaWF0IjoxNjY3NTQxMTEyLCJleHAiOjE3MzA2MTMxMTJ9.weJGE_crrKtLnSWEf4xcsbcd8w-sR2fAnb4ZieIH4vyR0LDM9KEhxTo3NEYhNf-2',
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
