import React from 'react';

import fetch from 'isomorphic-unfetch';
import { NextPage, NextPageContext } from 'next';

import { API } from '../../conf';
import { BaseDto, ComicsDto } from '../../dto';
import { ComicsCard } from '../../components';

type CharacterPageProp = {
  comics: Array<ComicsDto>;
}

export const CharacterPage: NextPage<CharacterPageProp> = ({ comics }) => {
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
          />
        ))
      }
    </div>
  );
};

CharacterPage.getInitialProps = async ({ query }: NextPageContext) => {
  const res = await fetch(`${API}/characters/${query.slug}`);
  const json = await res.json() as BaseDto<ComicsDto[]>;

  return { comics: json.data };
};

export default CharacterPage;
