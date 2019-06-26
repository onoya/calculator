export const PRESS_NUM = 'PRESS_NUM';
export const ENTER = 'ENTER';

export const pressNum = n => ({
  type: PRESS_NUM,
  payload: n,
});

export const enter = () => ({
  type: ENTER,
});
