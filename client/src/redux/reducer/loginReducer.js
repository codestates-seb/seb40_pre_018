import { addLocalStorage } from '../../utils/localStorage';
import { LOG_IN } from '../actions';
import { initialState } from '../initialState';

const loginReducer = (state = initialState, action) => {
  if (action.type === LOG_IN) {
    addLocalStorage(action.token);
    return { ...state, token: action.token };
  } else {
    return state;
  }
};

export default loginReducer;
