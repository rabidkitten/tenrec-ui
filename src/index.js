/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import TagCloudTag from './tag-cloud-tag/tag-cloud-tag';

ReactDOM.render(
  <React.StrictMode>
    <TagCloudTag tag="Toronto" size={3} />
    <TagCloudTag tag="Edmonton" size={2} />
    <TagCloudTag tag="New York" size={5} />
  </React.StrictMode>,
  document.getElementById('root'),
);
