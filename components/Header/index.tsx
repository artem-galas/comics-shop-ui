import React from 'react';
import Router from 'next/router';
import {
  TopAppBar,
  TopAppBarActionItem,
  TopAppBarFixedAdjust,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from '@rmwc/top-app-bar';

export const Header: React.FC = () => (
  <>
    <TopAppBar fixed>
      <TopAppBarRow>
        <TopAppBarSection alignStart>
          <TopAppBarTitle
            style={{ cursor: 'pointer' }}
            onClick={() => Router.push('/')}
          >
            Comics Shop
          </TopAppBarTitle>
        </TopAppBarSection>
        <TopAppBarSection alignEnd>
          <TopAppBarActionItem
            icon="shopping_cart"
            onClick={() => Router.push('/basket')}
          />
        </TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>
    <TopAppBarFixedAdjust />
  </>
);
