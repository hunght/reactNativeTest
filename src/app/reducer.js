// @flow
import { merge } from 'ramda';

const initValue = {
  users: null,
  isLoading: false
};

const reducer = (state = initValue, action) => {
  switch (action.type) {
    case 'GET_USER_ASYNC':
      return merge(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
