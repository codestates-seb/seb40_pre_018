import { addLocalStorage } from '../../utils/localStorage';
import { LOG_IN } from '../actions';
import { initialState } from '../initialState';

const loginReducer = (state = initialState, action) => {
  if (action.type === LOG_IN) {
    addLocalStorage(action.payload);
    return { ...state, user: action.payload };
  } else {
    return state;
  }
};

export default loginReducer;
