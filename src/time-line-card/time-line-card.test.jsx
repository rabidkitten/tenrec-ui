import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import TimeLineCard from './time-line-card';

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
    render(<TimeLineCard />, container);
  });
  expect(container.querySelector('div:first-child').getAttribute('class')).toBe('time-line-card');
});

it('includes the additional class name when a className attribute is specified.', () => {
  act(() => {
    render(<TimeLineCard className="example" />, container);
  });
  expect(container.querySelector('div:first-child').getAttribute('class')).toBe('time-line-card example');
});

it('displays the specified title.', () => {
  act(() => {
    render(<TimeLineCard title="example" />, container);
  });
  expect(container.querySelector('div[class*="time-line-card-title"]').textContent).toBe('example');
});

it('displays the specified sub-title.', () => {
  act(() => {
    render(<TimeLineCard subTitle="example" />, container);
  });
  expect(container.querySelector('div[class*="time-line-card-sub-title"]').textContent).toBe('example');
});

it('displays the specified text.', () => {
  act(() => {
    render(<TimeLineCard text="example" />, container);
  });
  expect(container.querySelector('div[class*="time-line-card-text"]').textContent).toBe('example');
});

it('displays the specified image.', () => {
  act(() => {
    render(<TimeLineCard imageUrl="https://raw.githubusercontent.com/rabidkitten/tenrec-ui/main/docs/tenrec.jpg" />, container);
  });
  expect(container.querySelector('img').getAttribute('src')).toBe('https://raw.githubusercontent.com/rabidkitten/tenrec-ui/main/docs/tenrec.jpg');
});

it('does not display an image if one is not specified.', () => {
  act(() => {
    render(<TimeLineCard />, container);
  });
  expect(container.querySelectorAll('img').length).toBe(0);
});

it('does not display a box tail by default.', () => {
  act(() => {
    render(<TimeLineCard />, container);
  });
  expect(container.querySelectorAll('div[class*="box-tail"]').length).toBe(0);
});

it('displays a box tail pointing to the left and on the left when the boxTailStyle is left.', () => {
  act(() => {
    render(<TimeLineCard boxTailStyle="left" />, container);
  });
  expect(container.querySelectorAll('div[class*="time-line-card-tail-left"]').length).toBe(1);
  expect(container.querySelectorAll('div[class*="time-line-card-tail-right"]').length).toBe(0);
  expect(container.querySelectorAll('div[class*="box-tail-left"]').length).toBe(1);
  expect(container.querySelectorAll('div[class*="box-tail-right"]').length).toBe(0);
});

it('displays a box tail pointing to the right and on the right when the boxTailStyle is right.', () => {
  act(() => {
    render(<TimeLineCard boxTailStyle="right" />, container);
  });
  expect(container.querySelectorAll('div[class*="time-line-card-tail-left"]').length).toBe(0);
  expect(container.querySelectorAll('div[class*="time-line-card-tail-right"]').length).toBe(1);
  expect(container.querySelectorAll('div[class*="box-tail-left"]').length).toBe(0);
  expect(container.querySelectorAll('div[class*="box-tail-right"]').length).toBe(1);
});
