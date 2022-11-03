import { getLocalStorage } from '../utils/localStorage';

export const initialState = {
  user: getLocalStorage() ? getLocalStorage() : null,
};
