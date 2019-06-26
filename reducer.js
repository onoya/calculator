import { PRESS_NUM, ENTER } from './actions';

const initialState = {
  stack: [],
  inputState: 'replace',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ENTER:
      return {
        ...state,
        stack: [state.stack[0] || '0', ...state.stack],
        inputState: 'replace',
      };
    case PRESS_NUM:
      if (state.inputState === 'append') {
        return {
          ...state,
          stack: [(state.stack[0] || '0') + action.payload, ...state.stack.slice(1)],
          inputState: 'append',
        };
      }
      if (state.inputState === 'replace') {
        return {
          ...state,
          stack: [action.payload, ...state.stack.slice(1)],
          inputState: 'append',
        };
      }
      return state;
    default:
      return state;
  }
};
