import { handleAction, reduceReducers } from 'redux-ts-utils';
import * as actions from './actions';

export type State = {
  readonly count: number,
};

const initialState: State = { count: 0 };

export default reduceReducers<State>([
  handleAction(actions.add, (draft, { payload }) => {
    draft.count += payload;
  }),
  handleAction(actions.addOne, (draft) => {
    draft.count += 1;
  }),
  handleAction(actions.subtractOne, (draft) => {
    draft.count -= 1;
  }),
], initialState);
