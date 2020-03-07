export const AddActionType = '[Basket] ADD';
export const RemoveActionType = '[Basket] REMOVE';
export const CompleteOrderActionType = '[Basket] COMPLETE';

export const addToBasket = (payload) => ({ type: AddActionType, payload });
export const removeFromBasket = (payload) => ({ type: RemoveActionType, payload });
export const completeOrder = (payload) => ({ type: CompleteOrderActionType, payload });

export const initialState = {};

export const selectProducts = (state) => state.basketItems;

export const addItem = (state, data) => {
  if (state[data.id]) {
    const item = state[data.id];

    return {
      ...state,
      [data.id]: {
        ...item,
        quantity: item.quantity + 1,
        price: item.price + data.price,
      },
    };
  }
  return {
    ...state,
    [data.id]: {
      title: data.title,
      quantity: 1,
      price: data.price,
      unitPrice: data.price,
    },
  };
};

export const removeItem = (state, key) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { [key]: deletedKey, ...newState } = state;

  return newState;
};
