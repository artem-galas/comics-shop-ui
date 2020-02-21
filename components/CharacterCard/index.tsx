import React from 'react';

import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardMediaContent,
  CardActions,
  CardActionIcons,
  CardActionIcon,
} from '@rmwc/card';
import { Typography } from '@rmwc/typography';
import Link from 'next/link';

type CharacterCardProp = {
  title: string;
  imgUrl: string;
  slug: string;
};

export const CharacterCard: React.FC<CharacterCardProp> = ({ title, imgUrl, slug }) => (
  <Card style={{ width: '12.5rem' }}>
    <CardPrimaryAction>
      <CardMedia
        square
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <CardMediaContent>
          <Typography
            use="subtitle2"
            tag="div"
            theme="textPrimaryOnDark"
            style={{
              padding: '0.5rem 1rem',
              backgroundImage:
                'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.5) 100%)',
              bottom: '0',
              left: '0',
              right: '0',
              color: 'white',
              position: 'absolute',
            }}
          >
            { title }
          </Typography>
        </CardMediaContent>
      </CardMedia>
    </CardPrimaryAction>
    <CardActions>
      <Typography
        use="subtitle2"
        tag="div"
      >
        Learn more
      </Typography>
      <CardActionIcons>
        <Link href="character/[slug]" as={`character/${slug}`}>
          <a><CardActionIcon icon="arrow_forward" /></a>
        </Link>
      </CardActionIcons>
    </CardActions>
  </Card>
);
