import React from 'react';
import { NextPage } from 'next';
import { connect } from 'react-redux';
import fetch from 'isomorphic-unfetch';

import { Typography } from '@rmwc/typography';

import { BasketTable } from '../components';
import {
  State,
  BasketState,
  removeFromBasket,
  selectProducts,
  completeOrder,
} from '../store';
import { API } from '../conf';
import { BaseDto } from '../dto';
import { OrderDto } from '../dto/order-dto';

type BasketPageProp = {
  products: BasketState;
  removeFromBasketDispatcher: typeof removeFromBasket;
  completeOrderDispatcher: typeof completeOrder;
}

const BasketPage: NextPage<BasketPageProp> = ({ products, removeFromBasketDispatcher, completeOrderDispatcher }) => {
  const completeOrderAction = async () => {
    const completeOrderData = Object.keys(products).map((key) => ({
      comicsId: Number(key),
      quantity: products[key].quantity,
    }));

    const res = await fetch(`${API}/order`, {
      method: 'POST',
      body: JSON.stringify({ order: completeOrderData }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    const json = await res.json() as BaseDto<OrderDto>;

    alert(`Order ${json.data.id} for amount ${json.data.amount} successfully created`);

    completeOrderDispatcher(completeOrderData);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography
        use="headline4"
        tag="div"
        style={{ marginBottom: '16px' }}
      >
        Your Basket
      </Typography>
      <BasketTable
        products={products}
        deleteFromBasket={(key) => removeFromBasketDispatcher({ id: key })}
        completeOrder={() => completeOrderAction()}
      />
    </div>
  );
};

const mapStateToProps = (store: State) => ({ products: selectProducts(store) });

const mapDispatchToProps = {
  removeFromBasketDispatcher: removeFromBasket,
  completeOrderDispatcher: completeOrder,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BasketPage);
