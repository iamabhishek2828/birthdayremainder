import React from 'react';
import { render } from '@testing-library/react';
import BirthdayList from './BirthdayList';

test('renders birthday list with person details', () => {
  const birthdays = [
    { name: 'abhishek', date: '2004-01-28', image: 'URL_TO_ABHISHEK_IMAGE' },
  
  ];

  const { getByText } = render(<BirthdayList birthdays={birthdays} />);
  
  // Assuming "John Doe" is in the rendered component
  const nameElement = getByText(/abhishek/i);
  expect(nameElement).toBeInTheDocument();
});