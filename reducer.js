import {
  PRESS_NUM, ENTER, OPERATION, CLEAR, SWAP, TOGGLE_NEGATIVE,
} from './actions';

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

const switchNegative = x => (x.startsWith('-') ? x.slice(1) : `-${x}`);

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NEGATIVE:
      return {
        ...state,
        stack: state.stack.map((x, i) => (action.payload === i ? switchNegative(x) : x)),
      };
    case SWAP:
      return {
        stack: [state.stack[1], state.stack[0], ...state.stack.slice(2)],
        inputState: 'push',
      };
    case OPERATION:
      return {
        stack: [
          `${doOperation(state.stack[0], state.stack[1], action.payload)}`,
          ...state.stack.slice(2),
        ],
        inputState: 'push',
      };
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
    case CLEAR:
      return initialState;
    default:
      return state;
  }
};
