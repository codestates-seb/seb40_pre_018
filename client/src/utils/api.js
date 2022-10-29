export const fetchCreate = (url, data) => {
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).catch((err) => console.log(err.message));
};

/* 추후에 사용하기 위한 로직입니다. */
/*
export const fetchDelete = (url) => {
  fetch(url, {
    method: 'DELETE',
  }).catch((err) => console.log('Error', err.message));
};

export const fetchPatch = (url, data) => {
  fetch(url, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).catch((err) => console.log(err.message));
};
*/
