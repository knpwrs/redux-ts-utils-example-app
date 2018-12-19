import { createAction } from 'redux-ts-utils';

export const add = createAction<number>('count/ADD');
export const addOne = createAction<void>('count/ADD_ONE');
export const subtractOne = createAction<void>('count/SUBTRACT_ONE');
