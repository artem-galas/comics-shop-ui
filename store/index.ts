import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { MakeStore } from 'next-redux-wrapper';

import { initialState as basketInitialState } from './basket/actions';
import { reducer as basketReducer } from './basket/reducer';

export * from './basket/actions';

export type State = {
  basketItems: ReturnType<typeof basketReducer>;
};
export const makeStore: MakeStore = (initialState: any) => createStore(
  combineReducers(
    { basketItems: basketReducer },
  ),
  initialState,
  composeWithDevTools(),
);
