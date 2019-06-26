export const PRESS_NUM = 'PRESS_NUM';
export const ENTER = 'ENTER';
export const OPERATION = 'OPERATION';
export const CLEAR = 'CLEAR';
export const SWAP = 'SWAP';
export const TOGGLE_NEGATIVE = 'TOGGLE_NEGATIVE';

export const pressNum = n => ({
  type: PRESS_NUM,
  payload: n,
});

export const enter = () => ({
  type: ENTER,
});

export const operation = op => ({
  type: OPERATION,
  payload: op,
});

export const clear = () => ({
  type: CLEAR,
});

export const swap = () => ({
  type: SWAP,
});

export const toggleNegative = idx => ({
  type: TOGGLE_NEGATIVE,
  payload: idx,
});
