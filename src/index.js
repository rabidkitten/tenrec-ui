/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import TagCloud from './tag-cloud/tag-cloud';

ReactDOM.render(
  <React.StrictMode>
    <TagCloud tags={[{ tag: 'Toronto', value: 3 }, { tag: 'Edmonton', value: 100 }]} />
  </React.StrictMode>,
  document.getElementById('root'),
);
