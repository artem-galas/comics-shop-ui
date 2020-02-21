import React from 'react';

import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardActions,
  CardActionIcons,
  CardActionIcon,
} from '@rmwc/card';
import { Typography } from '@rmwc/typography';
import { Icon } from '@rmwc/icon';

type ComicsCardProp = {
  id: number;
  title: string;
  img: string;
  description: string;
  price: number;
  saveToBasket: (id: number) => void;
}

export const ComicsCard: React.FC<ComicsCardProp> = ({ id, title, img, description, price, saveToBasket }) => (
  <Card style={{ width: '21rem' }}>
    <CardPrimaryAction>
      <CardMedia
        sixteenByNine
        style={{ backgroundImage: `url(${img})` }}
      />
      <div style={{ padding: '0 1rem 1rem 1rem' }}>
        <Typography use="headline6" tag="h2">{title}</Typography>
        <Typography
          use="body1"
          tag="div"
          theme="textSecondaryOnBackground"
        >
          {description}
        </Typography>
      </div>
    </CardPrimaryAction>
    <CardActions>
      <Typography use="headline5" style={{ color: '#3f51b5', display: 'flex', alignItems: 'center' }}>
        <Icon icon="euro" />
        {price}
      </Typography>
      <CardActionIcons>
        <CardActionIcon icon="shopping_cart" onClick={() => saveToBasket(id)} />
      </CardActionIcons>
    </CardActions>
  </Card>
);
