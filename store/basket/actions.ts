import { ComicsDto } from '../../dto';
import { State } from '../index';

export const AddActionType = '[Basket] ADD';
export const RemoveActionType = '[Basket] REMOVE';

interface AddToBasket {
  type: typeof AddActionType;
  payload: ComicsDto;
}

interface RemoveFromBasket {
  type: typeof RemoveActionType;
  payload: {
    id: string;
  };
}

export const addToBasket = (payload: ComicsDto): AddToBasket => ({ type: AddActionType, payload });
export const removeFromBasket = (payload: {id: string}): RemoveFromBasket => ({ type: RemoveActionType, payload });

export type Actions =
  ReturnType<typeof addToBasket> |
  ReturnType<typeof removeFromBasket>;

export type BasketState = {
  [id: string]: {
    title: string;
    quantity: number;
    unitPrice: number;
    price: number;
  };
}
export const initialState: BasketState = {};

export const selectProducts = (state: State) => state.basketItems;

export const addItem = (state: BasketState, data: ComicsDto): BasketState => {
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

export const removeItem = (state: BasketState, key: string): BasketState => {
  const { [key]: deletedKey, ...newState } = state;

  return newState;
};
