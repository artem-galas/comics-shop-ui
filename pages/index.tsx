import React from 'react';

import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';

import { API } from '../conf';
import { BaseDto, CharacterDto } from '../dto';
import { CharacterCard } from '../components';

type HomePageProp = {
  characters: Array<CharacterDto>;
}

const HomePage: NextPage<HomePageProp> = ({ characters }) => (
  <>
    <div className="card-list">
      {
        characters.map((char) => (
          <CharacterCard
            key={char.id}
            title={char.name}
            imgUrl={char.img}
            slug={char.slug}
          />
        ))
      }
    </div>
  </>
);

HomePage.getInitialProps = async () => {
  const res = await fetch(`${API}/characters`);
  const json = await res.json() as BaseDto<CharacterDto[]>;
  return { characters: json.data };
};

export default HomePage;
