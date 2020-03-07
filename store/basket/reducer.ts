import {
  Actions,
  AddActionType,
  addItem,
  BasketState,
  CompleteOrderActionType,
  initialState,
  RemoveActionType,
  removeItem,
} from './actions';

export function reducer(state = initialState, action: Actions): BasketState {
  switch (action.type) {
    case AddActionType:
      return addItem(state, action.payload);
    case RemoveActionType:
      return removeItem(state, action.payload.id.toString());
    case CompleteOrderActionType:
      return { ...initialState };
    default:
      return state;
  }
}
