/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import TagCloud from './tag-cloud/tag-cloud';
import TimelineCard from './time-line-card/time-line-card';

ReactDOM.render(
  <React.StrictMode>
    <TagCloud tags={[{ tag: 'Toronto', value: 3 }, { tag: 'Edmonton', value: 100 }]} />
    <TimelineCard title="Established" subTitle="We Broke Ground" text="Acme was established on January 1st, 1990." boxTailStyle="right" imageUrl="https://raw.githubusercontent.com/rabidkitten/tenrec-ui/main/docs/tenrec.jpg" />
  </React.StrictMode>,
  document.getElementById('root'),
);
