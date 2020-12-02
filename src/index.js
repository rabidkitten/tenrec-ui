/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import TimeLine from './time-line/time-line';

const events = [
  { title: 'one' }, { title: 'two' },
];

ReactDOM.render(
  <React.StrictMode>
    <TimeLine events={events} />
  </React.StrictMode>,
  document.getElementById('root'),
);
