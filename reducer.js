import { PRESS_NUM } from './actions';

export default (state = '0', action) => {
  switch (action.type) {
    case PRESS_NUM:
      return state + action.payload;
    default:
      return state;
  }
};
