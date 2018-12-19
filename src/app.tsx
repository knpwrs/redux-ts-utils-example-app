import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import { State } from './store';

type StateProps = {
  count: number,
};

type AppProps = StateProps & typeof actions;

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

export default connect(mapStateToProps, actions)(App);
