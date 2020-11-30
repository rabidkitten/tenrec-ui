import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import EstimatedReadTime from './estimated-read-time';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('displays 0 when the text argument contains no text.', () => {
  act(() => {
    render(<EstimatedReadTime text="" />, container);
  });
  expect(container.textContent).toBe('0');
});

it('displays 1 when no template argument is specified, however the text argument is specified and can be read in less than one minute.', () => {
  act(() => {
    render(<EstimatedReadTime text="This is an example." />, container);
  });
  expect(container.textContent).toBe('1');
});

it('displays "1 min read" when both a template and text arguments are specified and the text can be read in less than one minute.', () => {
  act(() => {
    render(<EstimatedReadTime template="{time} min read" text="This is an example." />, container);
  });
  expect(container.textContent).toBe('1 min read');
});

it('displays "0 min read" when a template is specified, however the text argument contains no text.', () => {
  act(() => {
    render(<EstimatedReadTime template="{time} min read" text="" />, container);
  });
  expect(container.textContent).toBe('0 min read');
});
