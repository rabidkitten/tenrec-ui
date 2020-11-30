import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import EmbossedHeading from './embossed-heading';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('does not display any additional class name when no className attribute is specified.', () => {
  act(() => {
    render(<EmbossedHeading embossedLetter="g" text="Great Eats" />, container);
  });
  expect(container.querySelector('div:first-child').getAttribute('class')).toBe('embossed-heading');
});

it('includes the additional class name when a className attribute is specified.', () => {
  act(() => {
    render(<EmbossedHeading embossedLetter="g" text="Great Eats" className="example" />, container);
  });
  expect(container.querySelector('div:first-child').getAttribute('class')).toBe('embossed-heading example');
});

it('displays the embossed letter and text', () => {
  act(() => {
    render(<EmbossedHeading embossedLetter="g" text="Great Eats" />, container);
  });
  expect(container.textContent).toBe('gGreat Eats');
});
