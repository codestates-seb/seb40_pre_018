export const LOG_IN = 'LOG_IN';

export const login = (token) => {
  return {
    type: LOG_IN,
    token,
  };
};
