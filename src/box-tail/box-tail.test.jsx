import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import BoxTail from './box-tail';

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
    render(<BoxTail />, container);
  });
  expect(container.querySelector('div:first-child').getAttribute('class')).toBe('box-tail box-tail-left');
});

it('includes the additional class name when a className attribute is specified.', () => {
  act(() => {
    render(<BoxTail className="example" />, container);
  });
  expect(container.querySelector('div:first-child').getAttribute('class')).toBe('box-tail box-tail-left example');
});

it('includes the correct class name when the right attribute is specified', () => {
  act(() => {
    render(<BoxTail right />, container);
  });
  expect(container.querySelector('div:first-child').getAttribute('class')).toBe('box-tail box-tail-right');
});

it('includes the correct class name when the right attribute is not specified', () => {
  act(() => {
    render(<BoxTail />, container);
  });
  expect(container.querySelector('div:first-child').getAttribute('class')).toBe('box-tail box-tail-left');
});
