import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import TagCloudTag from './tag-cloud-tag';

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
    render(<TagCloudTag tag="Toronto" size={3} />, container);
  });
  expect(container.querySelector('div:first-child').getAttribute('class')).toBe('tag-cloud-tag tag-cloud-tag-size3');
});

it('includes the additional class name when a className attribute is specified.', () => {
  act(() => {
    render(<TagCloudTag tag="Toronto" size={3} className="example" />, container);
  });
  expect(container.querySelector('div:first-child').getAttribute('class')).toBe('tag-cloud-tag tag-cloud-tag-size3 example');
});

it('changes the class based on the size specified.', () => {
  act(() => {
    render(<TagCloudTag tag="Toronto" size={2} />, container);
  });
  expect(container.querySelector('div:first-child').getAttribute('class')).toBe('tag-cloud-tag tag-cloud-tag-size2');
});

it('uses a size of 1 when the size attribute is less than 1.', () => {
  act(() => {
    render(<TagCloudTag tag="Toronto" size={0} />, container);
  });
  expect(container.querySelector('div:first-child').getAttribute('class')).toBe('tag-cloud-tag tag-cloud-tag-size1');
});

it('uses a size of 6 when the size attribute is greater than 6.', () => {
  act(() => {
    render(<TagCloudTag tag="Toronto" size={7} />, container);
  });
  expect(container.querySelector('div:first-child').getAttribute('class')).toBe('tag-cloud-tag tag-cloud-tag-size6');
});

it('displays the text specified by the tag attribute.', () => {
  act(() => {
    render(<TagCloudTag tag="Toronto" size={1} />, container);
  });
  expect(container.textContent).toBe('Toronto');
});
