import React from 'react';
import { NextPage } from 'next';
import { connect } from 'react-redux';

import { Typography } from '@rmwc/typography';

import { BasketTable } from '../components';
import { State, BasketState, removeFromBasket, selectProducts } from '../store';

type BasketPageProp = {
  products: BasketState,
  removeFromBasketDispatcher: typeof removeFromBasket;
}

const BasketPage: NextPage<BasketPageProp> = ({ products, removeFromBasketDispatcher }) => {
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
        completeOrder={() => {} }
      />
    </div>
  );
};

const mapStateToProps = (store: State) => ({
  products: selectProducts(store),
});

const mapDispatchToProps = {
  removeFromBasketDispatcher: removeFromBasket,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BasketPage);
