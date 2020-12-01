import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Divider from './divider';

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

it('does not display any additional class name when no className attribute is specified.', () => {
  act(() => {
    render(<Divider />, container);
  });
  expect(container.querySelector('div:first-child').getAttribute('class')).toBe('divider');
});

it('includes the additional class name when a className attribute is specified.', () => {
  act(() => {
    render(<Divider className="example" />, container);
  });
  expect(container.querySelector('div:first-child').getAttribute('class')).toBe('divider example');
});

it('displays the specified text.', () => {
  act(() => {
    render(<Divider text="Good Eats" />, container);
  });
  expect(container.textContent).toBe('Good Eats');
});

it('includes a class to draw a thick line when the type is thick.', () => {
  act(() => {
    render(<Divider text="Good Eats" className="example" type="thick" />, container);
  });
  expect(container.querySelector('div:first-child').getAttribute('class')).toBe('divider divider-thick-line example');
});

it('includes a class to draw a dotted line when the type is dotted.', () => {
  act(() => {
    render(<Divider text="Good Eats" className="example" type="dotted" />, container);
  });
  expect(container.querySelector('div:first-child').getAttribute('class')).toBe('divider divider-dotted-line example');
});

it('includes a class to draw a dashed line when the type is dashed.', () => {
  act(() => {
    render(<Divider text="Good Eats" className="example" type="dashed" />, container);
  });
  expect(container.querySelector('div:first-child').getAttribute('class')).toBe('divider divider-dashed-line example');
});
