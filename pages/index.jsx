import React from 'react';

import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';

import { API } from '../conf';
import { CharacterCard } from '../components';

const HomePage = ({ characters }) => (
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
  const json = await res.json();
  return { characters: json.data };
};

HomePage.propTypes = {
  characters: PropTypes
    .arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        img: PropTypes.string,
        slug: PropTypes.string,
      }),
    ),
};

export default HomePage;
