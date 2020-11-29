import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import CopyrightYear from './copyright-year';

jest.mock('moment', () => () => ({ year: () => 2019 }));

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

it('displays only the current year when no base year is passed.', () => {
  act(() => {
    render(<CopyrightYear />, container);
  });
  expect(container.textContent).toBe('2019');
});

it('displays the base year hyphenated with the current year when a base year is passed.', () => {
  act(() => {
    render(<CopyrightYear baseYear={2010} />, container);
  });
  expect(container.textContent).toBe('2010-2019');
});
