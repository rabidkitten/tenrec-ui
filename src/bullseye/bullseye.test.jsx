import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Bullseye from './bullseye';

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
    render(<Bullseye />, container);
  });
  expect(container.querySelector('div:first-child').getAttribute('class')).toBe('bullseye bullseye-empty ');
});

it('includes the additional class name when a className attribute is specified.', () => {
  act(() => {
    render(<Bullseye className="example" />, container);
  });
  expect(container.querySelector('div:first-child').getAttribute('class')).toBe('bullseye bullseye-empty example');
});

it('includes the correct class name when the solid attribute is specified', () => {
  act(() => {
    render(<Bullseye solid />, container);
  });
  expect(container.querySelector('div:first-child').getAttribute('class')).toBe('bullseye bullseye-solid ');
});

it('includes the correct class name when the solid attribute is not specified', () => {
  act(() => {
    render(<Bullseye />, container);
  });
  expect(container.querySelector('div:first-child').getAttribute('class')).toBe('bullseye bullseye-empty ');
});
