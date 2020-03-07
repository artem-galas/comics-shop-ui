import { ComicsDto } from '../../dto';
import { State } from '../index';
import { CompleteOrderDtoRequest } from '../../dto/complete-order-dto';

export const AddActionType = '[Basket] ADD';
export const RemoveActionType = '[Basket] REMOVE';
export const CompleteOrderActionType = '[Basket] COMPLETE';

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

interface CompleteOrder {
  type: typeof CompleteOrderActionType;
  payload: CompleteOrderDtoRequest[];
}

export const addToBasket = (payload: ComicsDto): AddToBasket => ({ type: AddActionType, payload });
export const removeFromBasket = (payload: {id: string}): RemoveFromBasket => ({ type: RemoveActionType, payload });
export const completeOrder = (payload: CompleteOrderDtoRequest[]): CompleteOrder => ({ type: CompleteOrderActionType, payload });

export type Actions =
  ReturnType<typeof addToBasket> |
  ReturnType<typeof removeFromBasket> |
  ReturnType<typeof completeOrder>;

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { [key]: deletedKey, ...newState } = state;

  return newState;
};
