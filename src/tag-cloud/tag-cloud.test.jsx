import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import TagCloud from './tag-cloud';

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
    render(<TagCloud tags={[{ tag: 'dogs', value: 10 }, { tag: 'cats', value: 20 }, { tag: 'birds', value: 4 }]} />, container);
  });
  expect(container.querySelector('div:first-child').getAttribute('class')).toBe('tag-cloud');
});

it('includes the additional class name when a className attribute is specified.', () => {
  act(() => {
    render(<TagCloud tags={[{ tag: 'dogs', value: 10 }, { tag: 'cats', value: 20 }, { tag: 'birds', value: 4 }]} className="example" />, container);
  });
  expect(container.querySelector('div:first-child').getAttribute('class')).toBe('tag-cloud example');
});

it('displays the same number of tags that are passed in.', () => {
  act(() => {
    render(<TagCloud tags={[{ tag: 'dogs', value: 10 }, { tag: 'cats', value: 20 }, { tag: 'birds', value: 4 }]} />, container);
  });
  expect(container.querySelectorAll('div[class*="tag-cloud-tag"]').length).toBe(3);
});

it('displays correct size of each tag.', () => {
  act(() => {
    render(<TagCloud tags={[{ tag: 'dogs', value: 10 }, { tag: 'cats', value: 20 }, { tag: 'birds', value: 4 }]} />, container);
  });
  expect(container.querySelectorAll('div[class*="tag-cloud-tag"')[0].getAttribute('class')).toContain('2');
  expect(container.querySelectorAll('div[class*="tag-cloud-tag"')[1].getAttribute('class')).toContain('3');
  expect(container.querySelectorAll('div[class*="tag-cloud-tag"')[2].getAttribute('class')).toContain('1');
});
