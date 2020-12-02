import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import TimeLine from './time-line';

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
    render(<TimeLine />, container);
  });
  expect(container.querySelector('div:first-child').getAttribute('class')).toBe('time-line');
});

it('includes the additional class name when a className attribute is specified.', () => {
  act(() => {
    render(<TimeLine className="example" />, container);
  });
  expect(container.querySelector('div:first-child').getAttribute('class')).toBe('time-line example');
});

it('does not display any time cards, when the events argument is not specified or is an empty array.', () => {
  act(() => {
    render(<TimeLine events={[]} />, container);
  });
  expect(container.querySelector('div:first-child').children.length).toBe(0);
});

it('displays one time card, when one time card is passed into the array.', () => {
  act(() => {
    render(<TimeLine events={[{ title: 'one' }]} />, container);
  });
  expect(container.querySelectorAll('div[class="time-line-card"]').length).toBe(1);
});

it('displays two time cards, when two time cards are passed into the array.', () => {
  act(() => {
    render(<TimeLine events={[{ title: 'one' }, { title: 'two' }]} />, container);
  });
  expect(container.querySelectorAll('div[class="time-line-card"]').length).toBe(2);
});

it('displays all of the specified event properties on the time card.', () => {
  act(() => {
    render(<TimeLine events={[{
      title: 'title',
      subTitle: 'subTitle',
      text: 'text',
      imageUrl: './dog.jpg',
    }]}
    />, container);
  });
  expect(container.querySelectorAll('div[class="time-line-card-title"]')[0].textContent).toBe('title');
  expect(container.querySelectorAll('div[class="time-line-card-sub-title"]')[0].textContent).toBe('subTitle');
  expect(container.querySelectorAll('div[class="time-line-card-text"]')[0].textContent).toBe('text');
  expect(container.querySelectorAll('img')[0].getAttribute('src')).toBe('./dog.jpg');
});

it('displays the first time card on the left.', () => {
  act(() => {
    render(<TimeLine events={[{ title: 'one' }]} />, container);
  });
  expect(container.querySelectorAll('div[class="time-line-card-left"]')[0].children.length).toBe(1);
  expect(container.querySelectorAll('div[class="time-line-card-right"]')[0].children.length).toBe(0);
});

it('displays the second time card on the right.', () => {
  act(() => {
    render(<TimeLine events={[{ title: 'one' }, { title: 'two' }]} />, container);
  });
  expect(container.querySelectorAll('div[class="time-line-card-right"]')[0].children.length).toBe(0);
  expect(container.querySelectorAll('div[class="time-line-card-right"]')[1].children.length).toBe(1);
});

it('displays the an arrow pointing to the right for the first time card.', () => {
  act(() => {
    render(<TimeLine events={[{ title: 'one' }]} />, container);
  });
  expect(container.querySelectorAll('div[class*="time-line-card-left"] div[class*="box-tail-right"]').length).toBe(1);
});

it('displays the an arrow pointing to the left for the second time card.', () => {
  act(() => {
    render(<TimeLine events={[{ title: 'one' }, { title: 'two' }]} />, container);
  });
  expect(container.querySelectorAll('div[class*="time-line-card-right"] div[class*="box-tail-left"]').length).toBe(1);
});

it('displays a bullseye for each time card.', () => {
  act(() => {
    render(<TimeLine events={[{ title: 'one' }, { title: 'two' }]} />, container);
  });
  expect(container.querySelectorAll('div[class*="bullseye"]').length).toBe(2);
});
