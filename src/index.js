/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import BlockQuote from './block-quote/block-quote';

ReactDOM.render(
  <React.StrictMode>
    <BlockQuote quote="Hello Word!" author="Unknown" />
  </React.StrictMode>,
  document.getElementById('root'),
);
