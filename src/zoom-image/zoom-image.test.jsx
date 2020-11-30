import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import ZoomImage from './zoom-image';

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
    render(<ZoomImage imageUrl="./test.jpg" alt="test" />, container);
  });
  expect(container.querySelector('div:first-child').getAttribute('class')).toBe('zoom-image ');
});

it('includes the additional class name when a className attribute is specified.', () => {
  act(() => {
    render(<ZoomImage imageUrl="./test.jpg" alt="test" className="example" />, container);
  });
  expect(container.querySelector('div:first-child').getAttribute('class')).toBe('zoom-image example');
});

it('outputs the correct value for the alt attribute.', () => {
  act(() => {
    render(<ZoomImage imageUrl="./test.jpg" alt="test" className="example" />, container);
  });
  expect(container.querySelector('img').getAttribute('alt')).toBe('test');
});

it('outputs the correct value for the imageUrl attribute.', () => {
  act(() => {
    render(<ZoomImage imageUrl="./test.jpg" alt="test" className="example" />, container);
  });
  expect(container.querySelector('img').getAttribute('src')).toBe('./test.jpg');
});
