import App from 'next/app';
import React from 'react';
import '../styles.css';

export default class StyledApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Component {...pageProps} />
    );
  }
}
