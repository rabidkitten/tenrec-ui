import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import EmphasizedHeading from './emphasized-heading';

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
    render(<EmphasizedHeading text="Good Eats" />, container);
  });
  expect(container.querySelector('div:first-child').getAttribute('class')).toBe('emphasized-heading');
});

it('includes the additional class name when a className attribute is specified.', () => {
  act(() => {
    render(<EmphasizedHeading text="Good Eats" className="example" />, container);
  });
  expect(container.querySelector('div:first-child').getAttribute('class')).toBe('emphasized-heading example');
});

it('displays the specified text.', () => {
  act(() => {
    render(<EmphasizedHeading text="Good Eats" />, container);
  });
  expect(container.textContent).toContain('Good');
  expect(container.textContent).toContain('Eats');
});
