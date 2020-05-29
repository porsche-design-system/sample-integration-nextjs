import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Collection from '../pages/collection';
import Forms from '../pages/forms';

test('renders a headline from Porsche Design System', async () => {
  const { getByText } = render(<Collection />);
  const submitButtonElement = getByText('Submit');
  fireEvent.click(submitButtonElement);
  const headLineElement = getByText(/Hello/i);
  expect(headLineElement).toBeInTheDocument();
});

test('dismisses the headline from Porsche Design System', async () => {
  const { getByText } = render(<Collection />);
  const submitButtonElement = getByText('Submit');
  fireEvent.click(submitButtonElement);
  const headLineElement = getByText('Hello');

  const dismissButtonElement = getByText('Dismiss');
  fireEvent.click(dismissButtonElement);
  expect(headLineElement).not.toBeInTheDocument();
});

test('headline should be changed according the selected value', async () => {
  const { getByText, getByTestId } = render(<Forms />);
  expect(getByText('Change this Headline by selecting')).toBeInTheDocument();

  fireEvent.change(getByTestId('select'), { target: { value: 'Headline B' } });
  expect(getByText('Headline B')).toBeInTheDocument();

  fireEvent.change(getByTestId('select'), { target: { value: 'Headline C' } });
  expect(getByText('Headline C')).toBeInTheDocument();
});

test('headline should be displayed after click on Checkbox', async () => {
  const { getByText, getByTestId } = render(<Forms />);
  const input = getByTestId('checkbox');

  input.click();
  expect(getByText('Checkbox Works')).toBeInTheDocument();
});

test('headline should be displayed after click on RadioButton', async () => {
  const { getByText, getByTestId } = render(<Forms />);
  const input = getByTestId('radiobutton');

  input.click();
  expect(getByText('Radio Works')).toBeInTheDocument();
});

test('headline should be changed according the typed value', async () => {
  const { getByText, getByTestId } = render(<Forms />);
  getByText('Change this Headline by typing');

  fireEvent.change(getByTestId('input'), { target: { value: 'Headline C' } });
  getByText('Headline C');

  fireEvent.change(getByTestId('input'), { target: { value: 'Headline B' } });
  getByText('Headline B');
});

/* jsdom has some limitations. One of them is the fact that we cant change location. But we are able to test the closest href */
test('slotted Link should navigate to PDS while mocked', async () => {
  const { getByText } = render(<Forms />);

  expect(getByText('Slotted Link').closest('a')).toHaveAttribute('href', 'https://designsystem.porsche.com');
});

test('a wrapped Link should navigate to #hashTest', async () => {
  const { getByText } = render(<Collection />);
  const link = getByText(/Test PLinkPure/i);

  expect(link.closest('a')).toHaveAttribute('href', '#hashTest');
});

test('a wrapped Link should navigate to #hashTest', async () => {
  const { getByText } = render(<Collection />);
  const link = getByText(/Test propHash/i);

  expect(link.closest('a')).toHaveAttribute('href', '#propHashTest');
});

test('pagination should return page 2', async () => {
  const { container, getByText } = render(<Collection />);

  if (!container.querySelector('li[value=NEXT_PAGE_LINK]')) {
    return;
  }
  const nextButton = container.querySelector('li[value=NEXT_PAGE_LINK]');

  if (!nextButton) {
    return;
  }
  fireEvent.click(nextButton);

  expect(getByText('You are on Page 2 Page')).toBeInTheDocument();
});
