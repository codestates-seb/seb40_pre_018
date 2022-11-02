// 로컬스토리지에서 토큰 가져오기
export const getLocalStorage = () => {
  return localStorage.getItem('token');
};

// 로컬스토리지에 토큰 추가
export const addLocalStorage = (token) => {
  return localStorage.setItem('token', token);
};

// 로컬스토리지의 토큰 삭제
export const removeLocalStroage = () => {
  return localStorage.removeItem('token');
};
