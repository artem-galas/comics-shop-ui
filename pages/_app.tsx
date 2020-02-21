import React from 'react';
import NextApp from 'next/app';
import Router from 'next/router';
import { Store as ReduxStore } from 'redux';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';

import { SimpleTopAppBar, TopAppBarFixedAdjust } from '@rmwc/top-app-bar';

import '@material/card/dist/mdc.card.css';
import '@material/button/dist/mdc.button.css';
import '@material/icon-button/dist/mdc.icon-button.css';
import '@material/top-app-bar/dist/mdc.top-app-bar.css';
import '@material/typography/dist/mdc.typography.css';
import '@rmwc/data-table/data-table.css';

import '../styles/global.css';
import { Footer } from '../components';
import { makeStore, State } from '../store';

class App extends NextApp<{ store: ReduxStore<State> }> {
  render() {
    const { Component, pageProps, store } = this.props;

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
          <Provider store={store}>
            <div className="content">
              <Component {...pageProps} />
            </div>
          </Provider>
          <Footer />
        </div>
      </>
    );
  }
}

export default withRedux(makeStore)(App);
