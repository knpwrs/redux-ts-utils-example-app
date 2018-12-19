import { createStore, Store } from 'redux';
import reducer, { State } from './reducer';

export { State };

const store: Store<State> = createStore(reducer);

export default store;
