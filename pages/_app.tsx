import React from 'react';
import { AppProps } from 'next/app'
import Router from 'next/router';

import { SimpleTopAppBar, TopAppBarFixedAdjust } from '@rmwc/top-app-bar';

import '@material/card/dist/mdc.card.css';
import '@material/button/dist/mdc.button.css';
import '@material/icon-button/dist/mdc.icon-button.css';
import '@material/top-app-bar/dist/mdc.top-app-bar.css';
import '@material/typography/dist/mdc.typography.css';
import '@rmwc/data-table/data-table.css';

import '../styles/global.css';
import { Footer } from '../components';

const App: React.FC<AppProps> = ({Component, pageProps}) => {
  return (
    <>
      <div className="main-container">
        <SimpleTopAppBar
          title="Comics Shop"
          actionItems={[{
            icon: 'shopping_cart',
            onClick: () => Router.push('/basket'),
          }]}
          fixed
        />
        <TopAppBarFixedAdjust />
        <div className="content">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
