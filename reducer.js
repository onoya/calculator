import { PRESS_NUM, ENTER, OPERATION } from './actions';

const initialState = {
  stack: [],
  inputState: 'replace',
};

const doOperation = (x, y, op) => {
  const a = parseFloat(x);
  const b = parseFloat(y);
  switch (op) {
    case 'pow':
      return b ** a;
    case '+':
      return b + a;
    case '-':
      return b - a;
    case 'X':
      return b * a;
    case '/':
      return b / a;
    default:
      return 0;
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPERATION:
      return {
        stack: [
          `${doOperation(state.stack[0], state.stack[1], action.payload)}`,
          ...state.stack.slice(2),
        ],
        inputState: 'push',
      };

      break;
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
      if (state.inputState === 'push') {
        return {
          ...state,
          stack: [action.payload, ...state.stack],
          inputState: 'append',
        };
      }
      return state;
    default:
      return state;
  }
};
