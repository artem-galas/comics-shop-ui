import React from 'react';

import fetch from 'isomorphic-unfetch';
import { NextPage, NextPageContext } from 'next';
import { connect } from 'react-redux';

import { API } from '../../conf';
import { BaseDto, ComicsDto } from '../../dto';
import { ComicsCard } from '../../components';
import { addToBasket } from '../../store';

interface CharacterPageContext extends NextPageContext {
  addToBasketDispatcher: typeof addToBasket;
}

type CharacterPageProp = {
  comics: Array<ComicsDto>;
  addToBasketDispatcher: typeof addToBasket;
}

export const CharacterPage: NextPage<CharacterPageProp> = ({ comics, addToBasketDispatcher }) => {
  const saveToBasket = (id: number) => {
    const cm = comics.find((c) => c.id === id);
    if (cm) {
      addToBasketDispatcher(cm);
    }
  };

  return (
    <div className="card-list">
      {
        comics.map((c) => (
          <ComicsCard
            key={c.id}
            id={c.id}
            img={c.img}
            title={c.title}
            price={c.price}
            description={c.description}
            saveToBasket={saveToBasket}
          />
        ))
      }
    </div>
  );
};

CharacterPage.getInitialProps = async ({ query, addToBasketDispatcher }: CharacterPageContext) => {
  const res = await fetch(`${API}/characters/${query.slug}`);
  const json = await res.json() as BaseDto<ComicsDto[]>;

  return { comics: json.data, addToBasketDispatcher };
};

const mapDispatchToProps = { addToBasketDispatcher: addToBasket };

export default connect(
  null,
  mapDispatchToProps,
)(CharacterPage);
