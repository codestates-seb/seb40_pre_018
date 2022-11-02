import { getLocalStorage } from '../utils/localStorage';

export const initialState = {
  token: getLocalStorage() ? getLocalStorage() : null,
};
