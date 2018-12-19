import * as React from 'react';
import { render } from 'react-dom';
import { createStore, Store } from 'redux';
import { connect, Provider } from 'react-redux';
import { createAction, handleAction, reduceReducers } from 'redux-ts-utils';

type State = {
  readonly count: number,
};

const add = createAction<number>('count/ADD');
const addOne = createAction<void>('count/ADD_ONE');
const subtractOne = createAction<void>('count/SUBTRACT_ONE');

const initialState = { count: 0 };

const reducer = reduceReducers<State>([
  handleAction(add, (draft, { payload }) => {
    draft.count += payload;
  }),
  handleAction(addOne, (draft) => {
    draft.count += 1;
  }),
  handleAction(subtractOne, (draft) => {
    draft.count -= 1;
  }),
], initialState);

const store: Store<State> = createStore(reducer);

type StateProps = {
  count: number,
};

type DispatchProps = {
  add: typeof add,
  addOne: typeof addOne,
  subtractOne: typeof subtractOne,
};

type AppProps = StateProps & DispatchProps;

const App: React.FunctionComponent<AppProps> = ({ count, add, addOne, subtractOne }) => (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={() => addOne()}>+1</button>
    <button onClick={() => subtractOne()}>-1</button>
    <button onClick={() => add(5)}>+5</button>
    <button onClick={() => add(-5)}>-5</button>
  </div>
);

const mapStateToProps = (state: State): StateProps => ({
  count: state.count,
});

const mapDispatchToProps: DispatchProps = {
  add,
  addOne,
  subtractOne,
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

const Root: React.FunctionComponent = () => (
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
);

const root = document.getElementById('root');
render(<Root />, root);
