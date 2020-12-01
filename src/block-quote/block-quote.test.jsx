import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import BlockQuote from './block-quote';

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
    render(<BlockQuote quote="Love is kind." author="Unknown" />, container);
  });
  expect(container.querySelector('div:first-child').getAttribute('class')).toBe('block-quote');
});

it('includes the additional class name when a className attribute is specified.', () => {
  act(() => {
    render(<BlockQuote quote="Love is kind." author="Unknown" className="example" />, container);
  });
  expect(container.querySelector('div:first-child').getAttribute('class')).toBe('block-quote example');
});

it('displays the specified quote and author.', () => {
  act(() => {
    render(<BlockQuote quote="Love is kind." author="Unknown" />, container);
  });
  expect(container.textContent).toBe('“Love is kind.Unknown');
});
