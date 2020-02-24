import React from 'react';
import NextApp from 'next/app';
import { Store as ReduxStore } from 'redux';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';

import '@material/card/dist/mdc.card.css';
import '@material/button/dist/mdc.button.css';
import '@material/icon-button/dist/mdc.icon-button.css';
import '@material/top-app-bar/dist/mdc.top-app-bar.css';
import '@material/typography/dist/mdc.typography.css';
import '@rmwc/data-table/data-table.css';

import '../styles/global.css';
import { Footer, Header } from '../components';
import { makeStore, State } from '../store';

class App extends NextApp<{ store: ReduxStore<State> }> {
  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <>
        <div className="main-container">
          <Header />
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
